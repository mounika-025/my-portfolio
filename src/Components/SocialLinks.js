/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "resume",
      download: true,
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:im.mounika025@gmail.com",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socialLinks.map(({ id, child, href, style, download }) => (
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="-blank"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
