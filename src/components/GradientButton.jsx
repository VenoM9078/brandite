import { useState, useEffect } from "react";

function GradientButton({ pressable }) {
  const [gradientClass, setGradientClass] = useState(
    "bg-gradient-to-r from-blue-500 to-teal-400"
  );
  const [boxShadowClass, setBoxShadowClass] = useState(
    "shadow-[0px_22px_70px_4px_rgba(59,130,246,0.56)]"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (gradientClass === "bg-gradient-to-r from-blue-500 to-teal-400") {
        setGradientClass("bg-gradient-to-r from-purple-800 to-pink-500");
        setBoxShadowClass("shadow-[0px_22px_70px_4px_rgba(165,85,247,0.56)]");
      } else if (
        gradientClass === "bg-gradient-to-r from-purple-800 to-pink-500"
      ) {
        setGradientClass("bg-gradient-to-r from-red-500 to-yellow-300");
        setBoxShadowClass("shadow-[0px_22px_70px_4px_rgba(253,186,116,0.56)]");
      } else if (
        gradientClass === "bg-gradient-to-r from-red-500 to-yellow-300"
      ) {
        setGradientClass("bg-gradient-to-r from-blue-500 to-teal-400");
        setBoxShadowClass("shadow-[0px_22px_70px_4px_rgba(59,130,246,0.56)]");
      }
    }, 2100);

    return () => clearInterval(intervalId);
  }, [gradientClass]);

  return (
    <div className="my-10">
      {/* <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className="rounded-full font-bold text-white bg-gradient-to-r from-rose-700 to-pink-600 py-4 px-6 text-md hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
        type="button"
      >
        Generate 🚀
      </button> */}
      <button
        type="button"
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        style={{
          borderRadius: "5px",
          fontFamily: "Inter",
          fontSize: "16px",
          padding: "2px",
        }}
        className={`${boxShadowClass} ${gradientClass} gradient-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-white rounded-full group  group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-1 focus:outline-none focus:ring-pink-800 dark:focus:ring-pink-800`}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "5px",
            padding: "10px 32px",
          }}
          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-full group-hover:bg-opacity-0"
        >
          <span>Get Started</span>
        </div>
      </button>
    </div>
  );
}

export default GradientButton;
