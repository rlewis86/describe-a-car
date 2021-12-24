import React from "react";
import gtrMain from "../assets/img/nissan-gtr.jpeg";

const Hero = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center pb-20">
          <div className="hidden md:block xl:mt-8">
            <div className="text-4xl lg:text-6xl xl:text-7xl text-gray-800 tracking-1px font-semibold leading-10">
              <div>
                <h1 className="mt-2 lg:mt-0">2021 Nissan GTR</h1>
              </div>
            </div>
            <div className="text-5xl lg:text-4xl xl:text-6xl text-gray-800 tracking-1px font-semibold leading-10">
              <h2 className="mt-2 lg:mt-0 ">
                <span>An Unmatched Blend of </span>
                <span className="text-red-700">Power</span> and&nbsp;
                <span className="text-red-700">Soul</span>
              </h2>
            </div>
            <h3 className="text-lg lg:text-2xl tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
              A singular supercar, so intuitive it can be enjoyed by drivers of
              all levels. So capable, it can be driven anytime, anywhere.
            </h3>
            <button className="hover:opacity-90 flex items-center  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 justify-center mt-5 lg:mt-10 text-base md:text-lg lg:text-2xl font-medium text-white p-4 lg:p-4 bg-red-700 rounded">
              Build Yours Now ...
            </button>
          </div>
          <div className=" md:hidden w-full custom-height bg-red-100 mt-8 lg:mt-0 rounded-3xl ">
            <img className="w-full" src={gtrMain} alt="2021 Nissan GTR" />
          </div>
          <div className="hidden md:block w-full custom-height bg-red-100 mt-8 lg:mt-0 rounded-3xl ">
            <img
              className="w-full rounded-lg shadow-lg"
              src={gtrMain}
              alt="2021 Nissan GTR"
            />
          </div>
          <div className="md:hidden xl:mt-8">
            <div className="text-4xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-semibold leading-10">
              <div>
                <h1 className="mt-2 lg:mt-0">2021 Nissan GTR</h1>
              </div>
            </div>
            <div className="text-5xl lg:text-5xl xl:text-6xl text-gray-800 tracking-1px font-semibold leading-10">
              <h2 className="mt-2 lg:mt-0 ">
                An Unmatched Blend of
                <span className="text-red-700">Power</span> and
                <span className="text-red-700">Soul</span>
              </h2>
            </div>
            <h2 className="text-lg lg:text-2xl tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
              A singular supercar, so intuitive it can be enjoyed by drivers of
              all levels. So capable, it can be driven anytime, anywhere.
            </h2>
            <button className="hover:opacity-90 flex items-center relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 justify-center mt-5 lg:mt-10 text-base md:text-lg lg:text-2xl font-medium text-white p-4 lg:p-8 bg-red-700 rounded">
              Get a quote ...
              <img
                className="ml-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_illustration_Svg4.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
