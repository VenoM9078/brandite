import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GradientButton from "./GradientButton";

const ModalForm = () => {
  const [keywords, setKeywords] = useState("");
  const [style, setStyle] = useState("");
  const navigate = useNavigate();
  const [pressable, setPressable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [error, setError] = useState(false);
  const [gradientClass, setGradientClass] = useState(
    "bg-gradient-to-r from-blue-500 to-teal-400"
  );
  const [boxShadowClass, setBoxShadowClass] = useState(
    "shadow-[0px_22px_70px_4px_rgba(59,130,246,0.56)]"
  );

  const handleToggle = () => {
    if (keywords.length > 2) {
      setIsToggled(!isToggled);
      setError(false);
    } else {
      setError(true);
    }
  };

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

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isMounted && keywords.length > 2) {
      setPressable(true);
    } else {
      setPressable(false);
    }
  }, [isMounted, keywords]);

  const keywordHandler = (e) => {
    setKeywords(e.target.value);
    // console.log(keywords);
  };

  const styleHandler = (e) => {
    setStyle(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let props = {
      keywords: keywords,
      style: style,
    };

    fetch("http://localhost:5000/api/brands/getBrands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsLoading(false);

        navigate("/results", { state: { data } });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  return (
    <>
      {error && (
        <div
          class="flex p-4 mb-4 max-w-lg mx-auto text-sm text-red-800 border border-red-700 rounded-lg bg-neutral-900 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Error!</span> The keyword must be at least
            2 characters long.
          </div>
        </div>
      )}
      <form onSubmit={formHandler}>
        <div className="flex justify-center pb-5 pt-5">
          <div className="w-2/3">
            <div class="relative mb-5">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="keywords"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Keywords"
                onChange={keywordHandler}
                value={keywords}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <div>
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
                onClick={handleToggle}
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
          </div>

          {/* Main modal */}
          {isToggled && (
            <div className="flex items-center justify-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
              <div class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"></div>

              <div className="relative w-full h-full max-w-2xl md:h-auto">
                {/* Modal content */}
                <div className="relative bg-neutral-900 rounded-lg shadow dark:bg-gray-700">
                  {/* Modal header */}
                  <div className="flex items-start justify-between p-4 border-b border-neutral-700 rounded-t">
                    <h3
                      style={{ fontFamily: "Inter", fontWeight: "500" }}
                      className="text-xl font-bold text-white dark:text-white"
                    >
                      Choose A Style
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleToggle}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="p-6 space-y-6">
                    <div>
                      <ul className="grid w-full gap-6 md:grid-cols-2">
                        <li>
                          <input
                            type="radio"
                            id="auto"
                            name="style"
                            value="Auto"
                            onChange={styleHandler}
                            className="hidden peer"
                            required
                          />
                          <label
                            htmlFor="auto"
                            className="inline-flex items-center justify-between w-full p-5 text-white bg-neutral-1000 border border-neutral-600 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-blue-500 peer-checked:border-yellow-300 peer-checked:text-yellow-300 hover:text-white hover:bg-black dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Auto
                              </div>
                              <div className="w-full">All Styles Included</div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                              />
                            </svg>
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="brandable"
                            name="style"
                            value="Brandable"
                            onChange={styleHandler}
                            className="hidden peer"
                          />
                          <label
                            htmlFor="brandable"
                            className="inline-flex items-center justify-between w-full p-5 text-white bg-neutral-1000 border border-neutral-600 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-blue-500 peer-checked:border-yellow-300 peer-checked:text-yellow-300 hover:text-white hover:bg-black dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Brandable Names
                              </div>
                              <div className="w-full">
                                like Google and Rolex
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                              />
                            </svg>
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="alternate"
                            name="style"
                            value="Alternate"
                            onChange={styleHandler}
                            className="hidden peer"
                          />
                          <label
                            htmlFor="alternate"
                            className="inline-flex items-center justify-between w-full p-5 text-white bg-neutral-1000 border border-neutral-600 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-blue-500 peer-checked:border-yellow-300 peer-checked:text-yellow-300 hover:text-white hover:bg-black dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Alternate Spelling
                              </div>
                              <div className="w-full">like Lyft and Fiverr</div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                              />
                            </svg>
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="non-english"
                            name="style"
                            value="Non-English"
                            onChange={styleHandler}
                            className="hidden peer"
                          />
                          <label
                            htmlFor="non-english"
                            className="inline-flex items-center justify-between w-full p-5 text-white bg-neutral-1000 border border-neutral-600 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-blue-500 peer-checked:border-yellow-300 peer-checked:text-yellow-300 hover:text-white hover:bg-black dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Non-English Words
                              </div>
                              <div className="w-full">like Toyota and Audi</div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                              />
                            </svg>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="flex items-center p-6 space-x-2 border-t border-neutral-600 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="defaultModal"
                      type="submit"
                      style={{ fontFamily: "Inter" }}
                      className="text-white w-32 mx-auto bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-900">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
