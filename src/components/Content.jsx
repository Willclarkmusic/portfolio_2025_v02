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
  SiVectorworks,
  SiNvidia,
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
import { GrUserManager } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";

export const ProjectsData = [
  {
    title: "React Three Fiber",
    img: "images/This1.png",
    role: "Front-end Develeoper",
    description:
      "This Website was built with a lot of front-end tools. React Fiber, Three.js, Tailwind, Framer Motion and more! I love to explore the amazing world of React. Code that writes other code... Simply Amazing! ",
    element: (
      <div className="justify-center w-full">
        <div className="">
          <img src="images/This1.png" className="rounded-3xl object-cover" />
        </div>

        <button
          id="standbutton"
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_v02",
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
    icons: [
      { name: "React", icon: <FaReact /> },
      { name: "Three.js", icon: <SiThreedotjs /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "AWS", icon: <FaAws /> },
    ],
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
          id="standbutton"
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
    icons: [
      { name: "React", icon: <FaReact /> },
      { name: "REST Api", icon: <FaCloud /> },
      { name: "HTML/CSS", icon: <FaHtml5 /> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "AWS", icon: <FaAws /> },
    ],
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
    icons: [
      { name: "Unity 3D", icon: <FaUnity /> },
      { name: "C#", icon: <PiFileCSharp /> },
      { name: "Meta XR", icon: <FaMeta /> },
      { name: "Tensor Flow", icon: <SiTensorflow /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
    ],
  },
  {
    title: "Synthesizer Plugin",
    img: "./images/BassBotLogo1.png",
    role: "Audio DSP Programmer",
    description:
      "I have an expert level knowledge of audio DSP and Synthesized music.  One of my first experiences as a Software Developer was to create audio tools for my own music production.  Visit the github to download the code and the Vst plugins for your favorite daw.",
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
          id="standbutton"
          onClick={() =>
            window.open("https://github.com/Willclarkmusic/BassBot", "_blank")
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
    icons: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Juce Audio DSP", icon: <SiJuce /> },
      { name: "Pro Tools", icon: <SiProtools /> },
    ],
  },
];

export const ArtTechData = [
  {
    title: "Kaskade: Menagerie 2022",
    img: "./images/Menag2022.jpg",
    role: "Stage Designer | Visual Artist",
    description:
      "This stage I designed was for the festival 'Menagerie 2023' with headlining artist Kaskade.  I also was the project manager for this stage. The visual content on the screens is my own custom, audio-reactive, real-time simulations that I am manipulating during the performance. I many more examples of this content in the youtube playlist linked below!.",
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
          id="standbutton"
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
    icons: [
      { name: "VectorWorks", icon: <SiVectorworks /> },
      { name: "Project Management", icon: <GrUserManager /> },
      { name: "Resolume VJ", icon: <HiAdjustmentsVertical /> },
      { name: "Touch Designer", icon: <MdTouchApp /> },
      { name: "Unity 3D", icon: <FaUnity /> },
      { name: "Adobe CC", icon: <SiAdobe /> },
    ],
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
          id="standbutton"
          onClick={() => window.open("https://www.marpi.studio/", "_blank")}
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            Visit Marpi Studios
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
    icons: [
      { name: "VectorWorks", icon: <SiVectorworks /> },
      { name: "Project Management", icon: <GrUserManager /> },
      { name: "Unity 3D", icon: <FaUnity /> },
    ],
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
          id="standbutton"
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
    icons: [
      { name: "Touch Designer", icon: <MdTouchApp /> },
      { name: "Server Tech", icon: <FaComputer /> },
      { name: "Nvidia G-Sync", icon: <SiNvidia /> },
    ],
  },
  {
    title: "The Marble Game",
    img: "./images/MarblesMagnets.png",
    role: "Game Developer",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center">
          <iframe
            src="https://itch.io/embed-upload/11630976?color=333333"
            allowFullScreen
          />
        </div>
        <button
          id="standbutton"
          onClick={() => window.open("https://www.marpi.studio/", "_blank")}
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View on Github
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
    icons: [
      { name: "Unity", icon: <FaUnity /> },
      { name: "Wwise", icon: <SiWwise /> },
      { name: "C#", icon: <PiFileCSharp /> },
    ],
  },
];

export const FrontEndIcons = [
  { name: "React", icon: <FaReact /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
];

export const BackEndIcons = [
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <PiFileCSharp /> },
  { name: "REST Api", icon: <FaCloud /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Meta XR", icon: <FaMeta /> },
  { name: "Tensor Flow", icon: <SiTensorflow /> },
  { name: "Hugging Face", icon: <SiHuggingface /> },
  { name: "OpenGl", icon: <SiOpengl /> },
  { name: "Mongo DB", icon: <DiMongodb /> },
  { name: "Juce Audio DSP", icon: <SiJuce /> },
];
export const OtherTechIcons = [
  { name: "Visual Studio", icon: <DiVisualstudio /> },
  { name: "Unity 3D", icon: <FaUnity /> },
  { name: "Unreal Engine", icon: <SiUnrealengine /> },
  { name: "Wwise", icon: <SiWwise /> },
  { name: "Adobe CC", icon: <SiAdobe /> },
  { name: "Touch Designer", icon: <MdTouchApp /> },
  { name: "Resolume VJ", icon: <HiAdjustmentsVertical /> },
  { name: "Pro Tools", icon: <SiProtools /> },
  { name: "VectorWorks", icon: <SiVectorworks /> },
  { name: "Computer Build", icon: <FaComputer /> },
  { name: "Nvidia", icon: <SiNvidia /> },
];

export const OtherOtherIcons = [
  { name: "Bass Guitar", icon: <GiGuitar /> },
  { name: "Rock Climbing", icon: <GiMountainClimbing /> },
  { name: "Mario Kart", icon: <BsNintendoSwitch /> },
];

export const MobileSkillIcons = [
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <PiFileCSharp /> },
  { name: "React", icon: <FaReact /> },
  { name: "REST Api", icon: <FaCloud /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Meta XR", icon: <FaMeta /> },
  { name: "Tensor Flow", icon: <SiTensorflow /> },
  { name: "Hugging Face", icon: <SiHuggingface /> },
  { name: "OpenGl", icon: <SiOpengl /> },
  { name: "Mongo DB", icon: <DiMongodb /> },
  { name: "Juce Audio DSP", icon: <SiJuce /> },
  { name: "Visual Studio", icon: <DiVisualstudio /> },
  { name: "Unity 3D", icon: <FaUnity /> },
  { name: "Unreal Engine", icon: <SiUnrealengine /> },
  { name: "Wwise", icon: <SiWwise /> },
  { name: "Adobe CC", icon: <SiAdobe /> },
  { name: "Touch Designer", icon: <MdTouchApp /> },
  { name: "Resolume VJ", icon: <HiAdjustmentsVertical /> },
  { name: "Pro Tools", icon: <SiProtools /> },
  { name: "Bass Guitar", icon: <GiGuitar /> },
  { name: "Rock Climbing", icon: <GiMountainClimbing /> },
  { name: "Mario Kart", icon: <BsNintendoSwitch /> },
];
