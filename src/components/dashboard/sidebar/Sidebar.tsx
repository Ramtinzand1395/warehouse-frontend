import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.jpg";
import profile from "../../../assets/profile.jpg";

import menuLinks from "../data/links";

const Sidebar: React.FC = () => {
  const [OpenSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div
      className={`h-full w-auto duration-300 flex flex-col items-center relative mx-2 ${
        OpenSidebar ? "w-15 md:w-44" : "w-10"
      }`}
    >
      <div className="absolute top-3 -right-6">
        <BsArrowRightShort
          onClick={() => setOpenSidebar(!OpenSidebar)}
          className={`bg-white text-3xl rounded-full border border-black cursor-pointer duration-500 ${
            !OpenSidebar && "rotate-180"
          }`}
        />
      </div>

      <div className={`flex items-center md:flex-row h-14 flex-col mt-10 ${OpenSidebar ? "w-full" : "w-10"} `}>
        <img
          src={logo}
          className={`w-10 h-10 rounded-full text-4xl cursor-pointer block duration-500 ${
            OpenSidebar && "rotate-[360deg]"
          }`}
          alt=""
        />
        <h1
          className={`text-white text-center pt-2 font-medium text-base md:text-2xl duration-300 ${
            !OpenSidebar && "scale-0"
          }`}
        >
          Habibi Hello
        </h1>
      </div>
      {/**UserInfo */}
      <div
        className={`flex items-start flex-col ${
          OpenSidebar ? "mt-10" : "mt-2"
        } `}
      >
        <img
          src={profile}
          className={` rounded-xl ${OpenSidebar ? "w-20 h-20" : "w-10 h-10"} `}
          alt=""
        />
        <h3 className={`font-bold py-2 ${OpenSidebar ? "block" : "hidden"}`}>
          Username
        </h3>
        <p className={`text-sm ${OpenSidebar ? "block" : "hidden"}`}>info@gmail.com</p>
      </div>
      {/**UserInfo-end */}

      {/**menu-Items */}
      <div className={`${OpenSidebar ? "mt-10" : "mt-5"}`}>
        {menuLinks.map((link) => (
          <div
            key={link.id}
            className={`flex items-start font-bold  my-5 `}
          >
            {OpenSidebar ? (
              <button className="hover:text-white">
                <Link to={link.to}>{link.title}</Link>{" "}
              </button>
            ) : (
              <button className="hover:text-white">
                <Link to={link.to}>{link.icon}</Link>{" "}
              </button>
            )}
          </div>
        ))}
      </div>
      {/**menu-Items-end */}
    </div>
  );
};

export default Sidebar;
