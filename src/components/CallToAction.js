import React from "react";
import whiteGtr from "../assets/img/gtr-white.jpeg";

const CallToAction = () => {
  return (
    <div className="bg-gray-200">
      <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container overflow-y-hidden">
        <div className="flex  sm:flex-row flex-col items-center justify-between">
          <div className="sm:w-2/5 md:w-1/4 lg:w-1/3">
            <h1 className="lg:text-5xl text-2xl font-bold text-gray-800">
              Don't Miss Out!
            </h1>
            <p className="text-2xl leading-6 text-gray-600 mt-4 ">
              Limited Availability. Contact your local dealer for inventory
              information.
            </p>
            <button className="mt-12 text-4xl font-normal leading-none text-white bg-red-700 rounded sm:p-4 p-6 sm:w-auto w-full focus:outline-none hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
              Contact Now
            </button>
          </div>
          <div className="sm:w-1/2 w-11/12 py-10 sm:mt-0 mt-14 sm:ml-0 ml-7  bg-red-700 rounded-md">
            <img
              src={whiteGtr}
              alt="white dog"
              className="w-full md:-ml-28 -ml-7 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
