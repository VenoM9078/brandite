import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReactPaginate from "react-paginate";
import ResultCards from "../components/ResultCards";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  console.log(state);
  const [keywords, setKeywords] = useState(state.data[1]);
  const [style, setStyle] = useState(state.data[2]);
  const [brands, setBrands] = useState(state.data[0]);

  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = brands.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(brands.length / itemsPerPage);

  const [isLoading, setIsLoading] = useState(false);

  const [fontFamilies] = useState([
    "Bebas Neue",
    "Cinzel Decorative",
    "Fredoka One",
    "Inter",
    "Itim",
    "Lobster",
    "Merriweather",
    "Poiret One",
    "Raleway",
    "Secular One",
    "Unbounded",
  ]);

  const [backgroundColors] = useState([
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-teal-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-gray-800",
    "bg-gray-900",
  ]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const [randomFontFamilies, setRandomFontFamilies] = useState(
    shuffle(fontFamilies)
  );
  const [randomBackgroundColors, setRandomBackgroundColors] = useState(
    shuffle(backgroundColors)
  );

  function handleRandomizeStyles() {
    setRandomFontFamilies(shuffle(fontFamilies));
    setRandomBackgroundColors(shuffle(backgroundColors));
  }

  const [counter, setCounter] = useState(0);

  const handleRandomize = () => {
    setCounter(counter + 1);
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % brands.length;

    setItemOffset(newOffset);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let props = {
      keywords: keywords,
      style: style,
    };

    fetch("https://brandite-api.vercel.app/api/brands/getBrands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setIsLoading(false);
        navigate("/results", { state: { data } });
        window.location.reload();
      })
      .catch((error) => {
        setIsLoading(false);

        console.error(error);
      });
  };

  //   console.log(props);
  //   const object = location.state?.object || {};

  //   console.log(object);

  return (
    <>
      <Navbar />

      <div class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <img
        src="https://www.useblackbox.io/style/images/bg-shape-006-p-2000.png"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      {isLoading && (
        <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-900">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="relative">
        <div className="relative container m-auto px-6 md:px-12 lg:px-6">
          <div className="mb-12 space-y-8 md:mb-20 pt-16 w-full lg:mx-auto">
            <div className="flex justify-center items-center">
              <Link
                to="/"
                class="text-blue-700 mr-2 align-baseline self-baseline	 border relative inline-flex items-center justify-center border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
              >
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
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>

                <span class="sr-only">Icon description</span>
              </Link>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-white rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-pink-800 dark:focus:ring-pink-800">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 border-r pr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <span>{keywords}</span>
                </div>
              </button>
              {/* <button
                onClick={formHandler}
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-white rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-pink-800 dark:focus:ring-pink-800"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                >
                  <span>Retry</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6   ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
              </button> */}
              <button
                onClick={handleRandomize}
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-white rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-pink-800 dark:focus:ring-pink-800"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                >
                  <span>Randomize Styles</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>
                </div>
              </button>
            </div>

            <ResultCards
              brands={currentItems}
              fontFamilies={fontFamilies}
              backgroundColors={randomBackgroundColors}
              counter={counter}
            />
            <div class="flex justify-center items-center mt-6">
              <div class="bg-gray-200 rounded-full items-center px-6">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={
                    <span
                      style={{ alignItems: "center", display: "block" }}
                      class="text-gray-600 px-4 text-lg items-center hover:text-gray-800"
                    >
                      Next
                    </span>
                  }
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel={
                    <span
                      style={{ alignItems: "center", display: "block" }}
                      class="text-gray-600 px-4 text-lg items-center hover:text-gray-800"
                    >
                      Previous
                    </span>
                  }
                  renderOnZeroPageCount={null}
                  containerClassName="flex justify-center"
                  pageClassName="bg-gray-300 grid items-center px-4 hover:bg-gray-200 hover:text-black"
                  pageLinkClassName="text-gray-600 grid font-bold hover:text-black"
                  activeClassName="bg-gray-300 text-white"
                  previousLinkClassName="mx-2"
                  nextLinkClassName="mx-2"
                  disabledClassName="cursor-not-allowed"
                />
              </div>
            </div>

            {/* <div className="flex flex-wrap">
              {brands.map((el, index) => (
                <div className="w-1/5 p-4">
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
            </div> */}
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
