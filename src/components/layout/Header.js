import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Header() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  console.log(location);
  return (
    <div className=" h-full">
      <div className="bg-white">
        <div className="2xl:container 2xl:mx-auto">
          <nav>
            <div className=" flex flex-row justify-between">
              <div className=" flex space-x-3 items-center lg:pl-7 sm:pl-6 py-6 pl-4 pr-8">
                <Link to="/">
                  <img alt="logo" width={150} src={logo}></img>
                </Link>
              </div>

              {/* Burger Icon */}
              <div
                id="bgIcon"
                onClick={() => setShow(!show)}
                className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 block sm:hidden cursor-pointer lg:pr-7 sm:pr-6 py-6 pr-4"
              >
                <svg
                  className={`${show ? "hidden" : ""}`}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" transform duration-150"
                    d="M4 6H20"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className=" transform duration-150"
                    d="M4 18H20"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`${show ? "" : "hidden"} `}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile and Small devices Navigation */}
      <div
        id="MobileNavigation"
        className={`${
          show ? "" : "hidden"
        } transform duration-150 sm:hidden h-full bg-white `}
      ></div>
    </div>
  );
}

export default Header;
