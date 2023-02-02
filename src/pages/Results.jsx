import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Results = (props) => {
  const { keywords, style } = useParams();
  const [fontFamilies] = useState([
    "sans-serif",
    "serif",
    "monospace",
    "cursive",
    "fantasy",
  ]);

  const [backgroundColors] = useState([
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-pink-500",
  ]);

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />

      <img
        src="https://tailwindui.com/img/beams-home@95.jpg"
        alt=""
        class="absolute object-cover top-1/2 left-1/2 max-w-full max-h-auto -translate-x-1/2 -translate-y-1/2"
        width=""
      />

      <div class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <img
        src="https://www.useblackbox.io/style/images/bg-shape-006-p-2000.png"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative">
        <div className="relative container m-auto px-6 md:px-12 lg:px-6">
          <div className="mb-12 pt-40 space-y-8 md:mb-20 md:pt-40 w-full lg:mx-auto">
            <div className="flex flex-wrap">
              {Array.from({ length: 5 }, (el, index) => (
                <div className="w-1/5 p-4">
                  <div
                    className={`w-64 h-64 flex items-center justify-center text-white text-center font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                      backgroundColors[index % backgroundColors.length]
                    }`}
                    style={{
                      fontFamily: fontFamilies[index % fontFamilies.length],
                    }}
                  >
                    Apple
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="w-full p-4 mt-5 bg-slate-900">
          <div className="relative container m-auto px-6 md:px-12 lg:px-6">
            <FormSection />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Results;
