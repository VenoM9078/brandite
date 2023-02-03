import React from "react";

const ResultCards = ({ brands, fontFamilies, backgroundColors, counter }) => {
  return (
    <>
      {console.log(brands.length)}
      {brands.length > 0 ? (
        <div className="flex flex-wrap">
          {brands.map((el, index) => (
            <div key={`${el.name}-${counter}-${index}`} className="w-1/5 p-4">
              <div
                className={`w-64 h-64 flex items-center justify-center text-white text-center font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  backgroundColors[index % backgroundColors.length]
                }`}
              >
                <h1
                  style={{
                    fontFamily: fontFamilies[index % fontFamilies.length],
                  }}
                  className="text-4xl"
                >
                  {el.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1
          style={{ fontFamily: "Unbounded" }}
          className="text-slate-300 py-5 text-center pb-5 text-3xl w-full font-bold sm:text-4xl md:text-3xl"
        >
          <span className="inline bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-3xl tracking-tight text-transparent">
            Sorry!
          </span>{" "}
          Couldn't find any ideas with your keywords
        </h1>
      )}
    </>
  );
};

export default ResultCards;
