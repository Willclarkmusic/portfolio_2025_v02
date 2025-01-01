import { RiTailwindCssFill, RiBlenderLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { PiFileCSharp } from "react-icons/pi";
import {
  FaReact,
  FaCloud,
  FaPython,
  FaUnity,
  FaGithub,
  FaHtml5,
  FaAws,
  FaNode,
  FaRegLightbulb,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import {
  SiThreedotjs,
  SiHuggingface,
  SiTensorflow,
  SiUnrealengine,
  SiAdobe,
  SiJuce,
  SiWwise,
  SiCplusplus,
} from "react-icons/si";
import { DiVisualstudio, DiMongodb } from "react-icons/di";
import { BsNintendoSwitch } from "react-icons/bs";
import { GiGuitar, GiMountainClimbing } from "react-icons/gi";
import { SiProtools } from "react-icons/si";
import { SiOpengl } from "react-icons/si";
import { MdTouchApp } from "react-icons/md";
import { MdOutlineFestival } from "react-icons/md";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { FaSquareYoutube, FaInstagram } from "react-icons/fa6";

export const ProjectsData = [
  {
    title: "React Three Fiber",
    img: "images/This1.png",
    role: "Front-end Develeoper",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more! I am excited to explore the amazing world of React. Code that writes other code... Amazing! ",
    element: (
      <div className="justify-center w-full">
        <div className="">
          <img src="images/This1.png" className="rounded-3xl object-cover" />
        </div>

        <button
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_full",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View on GitHub
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
  },
  {
    title: "REST API",
    img: "images/rest-project.png",
    role: "Full-stack Developer",
    description:
      "This is a full-stack MERN app that demonstrates my skills with a RESTful Api, a React UI and a data-base on MongoDB. The purpose of this site is to track exercises done by the user.",
    element: (
      <div className="justify-center">
        <img
          src="images/rest-project.png"
          className="rounded-3xl w-[93%] object-cover"
        />
        <button
          onClick={() => window.open("http://18.144.55.121:3000/", "_blank")}
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View Live
          </span>
          <FaAws className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
  },
  {
    title: "AI Assistant",
    img: "images/RoboBot.png",
    role: "Machine Learning Researcher",
    description:
      "This Friendly AI was my submission for the Cal Hacks: Hackathon 2024.  It  was made with a combination of Meta XR Tools, Unity and C#.  A react friendly version coming soon!",
    element: (
      <div className="w-[93%] justify-center">
        <img src="images/RoboBot2.png" className="rounded-3xl object-contain" />
      </div>
    ),
  },
  {
    title: "Synthesizer Plugin",
    img: "./images/BassBotLogo1.png",
    role: "Audio DSP Programmer",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center">
          <iframe
            width="full"
            height="full"
            src="https://www.youtube.com/embed/BDI37ZLwD9U?si=rdontQhEELwsAPef"
            title="YouTube video player"
            allowFullScreen
          />
        </div>

        <button
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_full",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View on GitHub
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
  },
];

export const ArtTechData = [
  {
    title: "Kaskade: Menagerie 2022",
    img: "./images/Menag2022.jpg",
    role: "Stage Designer | Visual Artist",
    description:
      "This stage design was for the festival 'Menagerie 2023' with headlining artist Kaskade. I created the design for the stage, lighting, video and rigging, then it was passed off to a civil-engineering firm.  I supervised and staffed the build and operation of the stage, while operating video for the headlining performances.",
    element: (
      <div className="p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center">
          <iframe
            src="https://www.youtube.com/embed/o_2ffI3xDDM?si=ToFiy7RqNoamWxdL"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <button
          onClick={() =>
            window.open(
              "https://youtube.com/playlist?list=PLDQiSM9VNZvGwR1fpKYjFClOSRJz-bmm4&si=-jOXLFFlG2QFD3we",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View More AV Art
          </span>
          <FaSquareYoutube className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
  },
  {
    title: "Marpi Studio: Paleo Alto",
    img: "./images/PaleoAlto2.webp",
    role: "CAD Designer | Project Manager",
    description:
      "PaleoAlto was my collaboration between Colour Feeders and the digital-artist, Marpi for the art festival 'CODE: Art' in the downtown public spaces of Palo Alto, CA. I led the construction and CAD design for this piece while my company Colour Feeders handled the technology and computing power.",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center">
          <iframe
            src="https://www.youtube.com/embed/ItJb8IFTutE?si=4YJjcUpon-3MoDEW"
            allowFullScreen
          />
        </div>
        <button
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_full",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            Visit Marpi Studios
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
  },
  {
    title: "Artechouse",
    img: "./images/ATH1.jpg",
    role: "Render Farm Architect",
    description:
      "Artechouse is one of the premiere digital-art spaces in the world with locations on the east coast and pop-ups internationally. I constructed dozens of the highest level, enterprise-server computer nodes to power real-time art installations and single-node art projects for their efforts.",
    element: (
      <div>
        <div className="grid grid-cols-2 h-full">
          <img
            src="images/ATH3.jpg"
            className="col-span-1 flex rounded-3xl object-cover"
          />
          <img
            src="images/ATHCompy2-scaled.jpg"
            className="col-span-1 flex rounded-3xl object-cover"
          />
        </div>

        <button
          onClick={() =>
            window.open(
              "https://www.instagram.com/artechouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            Visit ArTecHouse
          </span>
          <FaInstagram className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
  },
  {
    title: "Audio Reactive Visuals",
    img: "./images/Blob.png",
    role: "Interactive Audio/Visual Artist",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center">
          <iframe
            src="https://www.youtube.com/embed/BDI37ZLwD9U?si=rdontQhEELwsAPef"
            allowFullScreen
          />
        </div>

        <button
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_full",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View on GitHub
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
  },
];

export const FrontEndIcons = [
  { name: "React", icon: <FaReact /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
];

export const BackEndIcons = [
  { name: "React", icon: <FaReact /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "Visual Studio", icon: <DiVisualstudio /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
];
export const OtherTechIcons = [
  { name: "React", icon: <FaReact /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "Visual Studio", icon: <DiVisualstudio /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
];

export const OtherOtherIcons = [
  { name: "React", icon: <FaReact /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "Visual Studio", icon: <DiVisualstudio /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
];
