import React from "react";

const ResultCards = ({ brands, fontFamilies, backgroundColors, counter }) => {
  return (
    <>
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
    </>
  );
};

export default ResultCards;
