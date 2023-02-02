import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import FormSection from "../components/FormSection";
import ModalForm from "../components/ModalForm";

const Home = () => {
  const [pressable, setPressable] = useState(false);

  return (
    <>
      <Navbar />

      <img
        src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss.com/master/src/img/beams/hero-dark.png"
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
          <div className="mb-12 pt-40 space-y-8 md:mb-20 md:pt-40 lg:w-9/12 lg:mx-auto">
            <h1
              style={{ fontFamily: "Unbounded" }}
              className="text-slate-300 text-center text-5xl w-full font-bold sm:text-4xl md:text-5xl"
            >
              Label Your{" "}
              <span className="inline bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Ideas
              </span>{" "}
              with{" "}
              <span className="inline bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Brandite
              </span>
            </h1>

            <ModalForm />
            <div className="mt-10">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                    <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
                    <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
                    <div className="">
                      <img
                        src="https://i.imgur.com/s1xyk4Z.png"
                        alt="Your image description"
                        className="img-responsive rounded-2xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                    <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
                    <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
                    <div className="">
                      <img
                        src="https://i.imgur.com/s1xyk4Z.png"
                        alt="Your image description"
                        className="img-responsive rounded-2xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
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

export default Home;
