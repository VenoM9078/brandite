import React, { useState } from "react";
import banner1 from "../assets/banners/banner1.jpg";
import banner2 from "../assets/banners/banner2.jpg";
import banner3 from "../assets/banners/banner3.jpg";
import banner4 from "../assets/banners/banner4.jpg";
import banner5 from "../assets/banners/banner5.jpg";
import banner6 from "../assets/banners/banner6.jpg";
import banner7 from "../assets/banners/banner7.jpg";
import banner8 from "../assets/banners/banner8.jpg";
import banner9 from "../assets/banners/banner9.jpg";
import banner10 from "../assets/banners/banner10.jpg";
import classnames from "classnames";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const FormSection = () => {
  const animatedComponents = makeAnimated();

  const [selectedImage, setSelectedImage] = useState("");
  const images = [
    { id: "1", src: banner1, alt: "image 1" },
    { id: "2", src: banner2, alt: "image 2" },
    { id: "3", src: banner3, alt: "image 3" },
    { id: "4", src: banner4, alt: "image 4" },
    { id: "5", src: banner5, alt: "image 5" },
    { id: "6", src: banner6, alt: "image 4" },
    { id: "7", src: banner7, alt: "image 5" },
    { id: "8", src: banner8, alt: "image 4" },
    { id: "9", src: banner9, alt: "image 5" },
    { id: "10", src: banner10, alt: "image 4" },
  ];

  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" },
  ];

  const selectedImageHandler = (e) => {
    setSelectedImage(e.target.value);
    console.log(e.target.value);
  };

  const handleSelect = (data) => {
    setSelectedOptions(data);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "rgb(30 41 59);",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "rgb(75 85 99);" : "rgb(75 85 99);",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "rgb(75 85 99);" : "rgb(75 85 99);",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };
  return (
    <>
      <h1
        style={{ fontFamily: "Unbounded" }}
        className="text-slate-300 text-center text-5xl my-10 font-bold sm:text-4xl md:text-5xl"
      >
        Where the magic happens..
      </h1>

      <h1
        style={{ fontFamily: "Inter" }}
        className="text-slate-300 text-left text-lg my-5 font-md sm:text-lg md:text-lg"
      >
        Pick a Header Background
      </h1>

      <div className="grid grid-cols-6 gap-4 my-10">
        {images.map((image) => (
          <label
            key={image.id}
            // style={{
            //   border: selectedImage === image.src ? "2px solid blue" : "",
            // }}
            className="relative cursor-pointer object-cover rounded-md border border-slate-400 hover:border-slate-600 transition-all duration-10 ease-in-out"
          >
            <div
              className={classnames("w-full rounded-md", {
                "border-sky-500 border border-solid":
                  selectedImage === image.src,
              })}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-16 rounded-md"
              />
            </div>
            <input
              type="radio"
              name="image-select"
              value={image.src}
              className="absolute opacity-0"
              checked={selectedImage === image.id}
              onChange={selectedImageHandler}
            />
          </label>
        ))}
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            style={{ fontFamily: "Inter" }}
            className="text-slate-300 text-left text-lg my-5 font-md sm:text-lg md:text-lg"
          >
            Enter Full Name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-slate-800/60 ring-0.5 my-4 ring-slate-300/10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label
            style={{ fontFamily: "Inter" }}
            className="text-slate-300 text-left text-lg my-5 font-md sm:text-lg md:text-lg"
          >
            Company Name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-slate-800/60 ring-0.5 my-4 ring-slate-300/10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Netflix"
            required
          />
        </div>

        <div>
          <label
            style={{ fontFamily: "Inter" }}
            className="text-slate-300 text-left text-lg my-5 font-md sm:text-lg md:text-lg"
          >
            Portfolio URL
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-slate-800/60 ring-0.5 my-4 ring-slate-300/10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="www.iamcool.com"
            required
          />
        </div>

        <div>
          <label
            style={{ fontFamily: "Inter" }}
            className="text-slate-300 text-left text-lg my-5 pb-6 font-md sm:text-lg md:text-lg"
          >
            What are your Hobbies?
          </label>
          <Select
            options={optionList}
            className="mt-3"
            placeholder="Separate Hobbies"
            styles={customStyles}
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            components={animatedComponents}
            isMulti
          />
        </div>
      </div>
    </>
  );
};

export default FormSection;
