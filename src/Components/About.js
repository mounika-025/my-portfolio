import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Welcome to my portfolio website! As a passionate and versatile Full
          Stack Developer, I am thrilled to showcase my skills, experiences, and
          projects in the world of web development. With a deep-rooted curiosity
          for technology and a determination to create impactful solutions, I
          constantly strive to push the boundaries of what is possible in the
          digital realm
        </p>

        <br />

        <p className="text-xl">
          I am a results-driven Full Stack Developer with a solid background in
          both front-end and back-end development. My journey in the world of
          programming began several years ago, and ever since, I have been on an
          exciting learning adventure, continuously expanding my knowledge and
          honing my craft.
        </p>
      </div>
    </div>
  );
};

export default About;
