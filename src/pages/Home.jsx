import React, { useState } from "react";
import Navbar from "../components/Navbar";

import FormSection from "../components/FormSection";
import ModalForm from "../components/ModalForm";
import "./Background.css";

const Home = () => {
  const [pressable, setPressable] = useState(false);

  return (
    <>
      <Navbar />
      <div
        style={{ width: "600px", top: "-180px" }}
        class="absolute right-[100px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-purple-600 blur-[150px]"
      ></div>
      <div class="absolute dotted-background h-full top-0 left-0 right-0 z-0">
        <div class="absolute left-0 right-0 bottom-0 h-[300px]"></div>
      </div>{" "}
      <img
        src="https://www.useblackbox.io/style/images/bg-shape-006-p-2000.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative">
        <div className="relative container m-auto px-6 md:px-12 lg:px-6">
          <div className="mb-12 pt-40 md:mb-20 md:pt-40 lg:w-9/12 lg:mx-auto">
            <h1
              style={{
                fontFamily: "Inter",
                letterSpacing: "1px",
                fontWeight: "900",
                fontSize: "68px",
              }}
              className="text-slate-200 text-center pb-5 text-5xl w-full font-light sm:text-4xl md:text-5xl"
            >
              Label Your{" "}
              <span className="inline font-bold bg-gradient-to-tr from-orange-500 to-yellow-300 bg-clip-text font-display tracking-tight text-transparent">
                Ideas
              </span>{" "}
              With{" "}
              <span
                style={{
                  fontFamily: "Inter",
                  letterSpacing: "1px",
                  fontWeight: "900",
                }}
                className="inline bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 bg-clip-text font-display tracking-tight text-transparent "
              >
                Brandite
              </span>
            </h1>
            <h2
              style={{
                fontFamily: "Inter",
                letterSpacing: "1px",
              }}
              className="text-neutral-500 mx-auto max-w-screen-sm text-center"
            >
              Elevate your business with Brandite. Enter keywords and let our
              innovative web app generate captivating brand names effortlessly.
              Unlock your brand's potential today!
            </h2>
            <hr className="w-96 h-1 mx-auto opacity-20 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700" />

            <ModalForm />
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

export default Home;
