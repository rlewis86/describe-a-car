import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto xl:flex lg:flex text-center xl:text-left lg:text-left">
        <div className="xl:w-3/6 lg:w-3/6 sm:w-full text-center xl:text-left mb-6 xl:mb-0 lg:mb-0">
          <p className="text-gray-800">
            2021 Describe A Car. All Rights Reserved
          </p>
        </div>
        <div className="xl:w-3/6 lg:w-3/6 sm:w-full">
          <ul className="xl:flex lg:flex md:flex sm:flex justify-around">
            <li className="text-gray-800 hover:text-gray-900 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-800 hover:text-gray-900 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
              <Link to="/terms-of-service">Terms of service</Link>
            </li>
            <li className="text-gray-800 hover:text-gray-900 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
