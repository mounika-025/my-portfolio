import netflix from "../assets/netflix.png";
import stackoverflow from "../assets/StackoverFlow.png";
import youtube from "../assets/youtube.png";

import nxtwave from "../assets/nxtwavelogo.jpg";
import sustine from "../assets/sustineLogo.png";

export const experienceData = [
  {
    id: 1,
    company: "Sustine",
    companyLogo: sustine,
    jobTitle: "Software Developer",
    skills:
      "Significantly boosted application performance via expert codebase refactoring, optimizing overall efficiency. ",
    date: "Aug-2022 - Present",
  },
  {
    id: 2,
    company: "Sustine",
    companyLogo: sustine,
    jobTitle: "Developer Intern",
    skills:
      "Technology Used:  HTML5, User Experience (UX), User Interface Design, E-Commerce, Cascading Style Sheets (CSS), JavaScript, React.js, Python ",
    date: "Dec 2021 - Jul 2022",
    icon: "https://img.icons8.com/?size=512&id=kOPTH4LnJoIU&format=png",
  },
  {
    id: 3,
    company: "NxtWave",
    companyLogo: nxtwave,
    jobTitle: "Teaching Assistant(Part-time)",
    skills:
      "Technology Used: HTML, Cascading Style Sheets (CSS), JavaScript, Python (Programming Language), SQL, React.js, Node.js, Express.js",
    date: "Sep 2022 - present",
  },
];

export const experienceStyles = {
  icon: {
    background: "#fff",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    background: "rgb(50, 50, 50)",
    color: "#ffffff",
  },
  arrowStyle: {
    borderRight: "7px solid #677483",
  },
};

export const projectDetails = [
  {
    id: 1,
    src: netflix,
    name: "Netflix-GPT",
    link: "https://github.com/mounika-025/Netflix-gpt",
  },
  {
    id: 2,
    src: stackoverflow,
    name: "StackOverFlow-Clone",
    link: "https://github.com/mounika-025/Stackoverflow-clone",
  },
  {
    id: 3,
    src: youtube,
    name: "Youtube-Clone",
    link: "https://github.com/mounika-025/Youtube-app",
  },
];

export const skills = [
  {
    id: 1,

    title: "HTML",
  },
  {
    id: 2,

    title: "CSS",
  },
  {
    id: 3,

    title: "JavaScript",
  },
  {
    id: 4,

    title: "React JS",
  },
  {
    id: 5,

    title: "UI/UX",
  },
  {
    id: 6,

    title: " Express JS",
  },
  {
    id: 7,

    title: "Node JS",
  },
  {
    id: 8,

    title: "MongoDB",
  },
  {
    id: 9,

    title: "Python",
  },
  {
    id: 10,

    title: "Tailwind",
  },
  {
    id: 11,

    title: "Bootstrap",
  },
  {
    id: 12,

    title: "Material Ui",
  },
  {
    id: 11,

    title: "SQL",
  },
  {
    id: 12,

    title: "Docker",
  },
  {
    id: 13,

    title: "Git",
  },
  {
    id: 12,

    title: "Github",
  },
  {
    id: 13,

    title: "Postman",
  },
];

export const contactDetails = [
  {
    id: 1,
    icon: "fa fa-phone",
    contact_info: "+91 6303321581",
    contact_name: "Phone",
  },
  {
    id: 2,
    icon: "fa fa-envelope",
    contact_info: "im.mounika025@gmail.com",
    contact_name: "Email",
  },
  {
    id: 3,
    icon: "fa fa-map-marker",
    contact_info: "Hyderabad, India",
    contact_name: "Location",
  },
];

export const profileLinks = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mounika-gurram-2916ab245/",
    social_icon: "fa fa-linkedin-square",
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/mounika-025",
    social_icon: "fa fa-github",
  },
  {
    id: 4,
    name: "Twitter",
    link: "https://twitter.com/Nanimounika1",
    social_icon: "fa fa-twitter",
  },
];
