import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const NavLinks = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Experience" },
    { id: 4, link: "Portfolio" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="flex justify-between w-full h-20 px-4 text-gray-300  bg-black fixed items-center">
      <div>
        <h1 className="font-bold ml-2">MOUNIKA</h1>
      </div>
      <ul className="hidden md:flex">
        {NavLinks.map(({ id, link }) => (
          <li
            key={id}
            className="text-gray-300 font-medium capitalize px-4 cursor-pointer hover:scale-105 duration-300"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        className="text-gray-300 cursor-pointer pr-4 z-10 md:hidden"
        onClick={() => setNavBar(!navBar)}
      >
        {navBar ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {navBar && (
        <ul className="flex flex-col justify-center items-center absolute bg-slate-800 w-full top-0 left-0 h-screen">
          {NavLinks.map(({ id, link }) => (
            <li
              key={id}
              className="text-gray-300 text-4xl capitalize py-6 cursor-pointer hover:scale-105 duration-300"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
