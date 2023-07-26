import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className=" bg-gradient-to-b from-black via-black to-gray-800 h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full px-4 md:flex-row max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center h-full">
          <div className="flex gap-4 items-center my-4 gap-2">
            <h1 className="text-gray-800 dark:text-neutral-100 text-4xl md:text-5xl 2xl:text-7xl font-bold text-center">
              I'm a
            </h1>
            <div className="flex items-center justify-center text-white shadow-lg bg-blue-400 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
              <p className="text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center">
                Full Stack Developer
              </p>
            </div>
          </div>
          <p className="text-md text-1xl text-black dark:text-gray-500 mt-2 2xl:mt-6">
            Full-Stack Web Developer with ability to learn and collaborate in
            rapidly changing environments and compositions.
          </p>
          <div className="flex gap-10">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 w-fit text-lg text-white font-semibold rounded-md py-3 px-5 mt-4 my-2 hover:scale-105 duration-300">
              Hire Me
            </button>
            <a href="projects">
              <button className=" flex items-center w-fit group bg-gradient-to-r from-blue-600 to-blue-800 text-lg text-white font-semibold rounded-md py-3 px-6 mt-4 my-2 hover:scale-105 duration-300">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight
                    size={25}
                    className="ml-1 mt-1"
                  />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
