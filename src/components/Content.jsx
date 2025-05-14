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
  SiExpress,
  SiOpengl,
  SiProtools,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { DiVisualstudio, DiMongodb } from "react-icons/di";
import { BsNintendoSwitch } from "react-icons/bs";
import { GiGuitar, GiMountainClimbing } from "react-icons/gi";
import { MdTouchApp } from "react-icons/md";
import { MdOutlineFestival } from "react-icons/md";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { FaSquareYoutube, FaInstagram } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";

export const ProjectsData = [
  {
    title: "Chromatic Music Database",
    img: "images/ChromaMusic.jpg",
    role: "Full-stack Developer / SQL",
    description:
      "This app is a demonstration with creating a REST api connected to an SQL database as an internal tool for inventory managment.  The React front end makes calls to the Express backend which is connected to a database that I created from scratch.  The SQL implements Join and Cascade functionality as well as having 1:M and M:N relationships. All hosted on AWS: EC2, Aurora",
    element: (
      <div className="w-[93%] justify-center">
        <img
          src="images/ChromaMusic_site.jpg"
          className="rounded-3xl object-contain"
        />
      </div>
    ),
    element2: (
      <div className="flex">
        <button
          id="standbutton"
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/ChromaticMusic_DBFinal",
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
        <button
          id="standbutton"
          onClick={() => window.open("http://13.57.29.119:8375/", "_blank")}
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
      { name: "Express JS", icon: <SiExpress /> },
      { name: "REST Api", icon: <FaCloud /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
  {
    title: "REST-ful API",
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
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "React", icon: <FaReact /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "REST Api", icon: <FaCloud /> },
      { name: "HTML/CSS", icon: <FaHtml5 /> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
  {
    title: "Synthesizer Plugin",
    img: "./images/BassBotLogo1.png",
    role: "Audio DSP Programmer",
    description:
      "This monophonic synthesizer that I created is a power-house of unique audio DSP. I created it in C++ using the JUCE audio framework. One of my goals as a Software Developer is to create audio tools for other creatives to use.  Visit the github to download the code and the Vst plugins for your favorite DAW.",
    element: (
      <div className="p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            width="full"
            height="full"
            src="https://www.youtube.com/embed/BDI37ZLwD9U?si=rdontQhEELwsAPef"
            title="YouTube video player"
            allowFullScreen
          />
        </div>
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Juce Audio DSP", icon: <SiJuce /> },
      { name: "Pro Tools", icon: <SiProtools /> },
    ],
  },
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
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "React", icon: <FaReact /> },
      { name: "Three.js", icon: <SiThreedotjs /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
];

export const moreProjectsData = [
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
      </div>
    ),
    element2: (
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
    title: "REST-ful API",
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
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "React", icon: <FaReact /> },
      { name: "Express JS", icon: <SiExpress /> },
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
      "I created an AI conversational character in Unity game engine as my submission for the Cal Hacks: Hackathon 2024.  I used a combination of Gemini, MetaXR and Open AI all within Unity.",
    element: (
      <div className="w-[93%] justify-center">
        <img src="images/RoboBot2.png" className="rounded-3xl object-contain" />
      </div>
    ),
    element2: (
      <button
        id="standbutton"
        onClick={() =>
          window.open(
            "https://github.com/Willclarkmusic/RobotBot_AI_Personality_v0.1",
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
      "This monophonic synthesizer that I created is a power-house of unique audio DSP. I created it in C++ using the JUCE audio framework. One of my goals as a Software Developer is to create audio tools for other creatives to use.  Visit the github to download the code and the Vst plugins for your favorite DAW.",
    element: (
      <div className="p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            width="full"
            height="full"
            src="https://www.youtube.com/embed/BDI37ZLwD9U?si=rdontQhEELwsAPef"
            title="YouTube video player"
            allowFullScreen
          />
        </div>
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Juce Audio DSP", icon: <SiJuce /> },
      { name: "Pro Tools", icon: <SiProtools /> },
    ],
  },
];

export const GamesData = [
  {
    title: "Paleo Alto",
    img: "./images/PaleoAlto2.webp",
    role: "CAD Designer | Project Manager",
    description:
      "PaleoAlto was a collaboration between Colour Feeders and the digital-art studio, Marpi Studio, for the art festival 'CODE: Art' in the downtown public spaces of Palo Alto, CA. I led the construction and CAD design for this piece while my company Colour Feeders handled the technology and computing power.",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/ItJb8IFTutE?si=4YJjcUpon-3MoDEW"
            allowFullScreen
          />
        </div>
        <div class="sketchfab-embed-wrapper" className="aspect-w-16 aspect-h-9">
          <iframe
            className="min-h-[40vw] lg:size-full rounded-xl"
            title="Palo Alto Rnd3 2"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/59a100f31edb46c388c380e867c643a3/embed?ui_theme=dark"
          ></iframe>
        </div>
      </div>
    ),
    element2: (
      <button
        id="standbutton"
        onClick={() => window.open("https://www.marpi.studio/", "_blank")}
        className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
      >
        <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
          Visit Marpi Studios
        </span>
        <FaComputer className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
      </button>
    ),
    icons: [
      { name: "VectorWorks", icon: <SiVectorworks /> },
      { name: "Project Management", icon: <GrUserManager /> },
      { name: "Unity 3D", icon: <FaUnity /> },
    ],
  },
  {
    title: "Interactive Art",
    img: "./images/Goo1.png",
    role: "Digital Media Artist",
    description:
      "I have made a lot of interactive art over the years using a variety of software platforms and programming languages.  Touchdesigner, Unity and Unreal are my main tool sets.  These pieces have been exhibited at different music festivals, tech-art shows and more. This piece was featured on a large LED wall at Mutek 2020 in San Francisco.  See more of my art in the Youtube playlist below.",
    element: (
      <div>
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl ">
          <iframe
            src="https://www.youtube.com/embed/mpQK2xXC6Vc?si=Q0GDQvECqMXJNZc5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "Touch Designer", icon: <MdTouchApp /> },
      { name: "Unity", icon: <FaUnity /> },
      { name: "C#", icon: <PiFileCSharp /> },
      { name: "Server Tech", icon: <FaComputer /> },
      { name: "Nvidia G-Sync", icon: <SiNvidia /> },
    ],
  },
  {
    title: "The Marble Game",
    img: "./images/MarblesMagnets.png",
    role: "Game Developer",
    description:
      "The Marble Game was built for a game jam where the theme was to rapid prototype: make as many levels based around one mechanic as you can.  ",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://itch.io/embed-upload/11630976?color=333333"
            allowFullScreen
          />
        </div>
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "Unity", icon: <FaUnity /> },
      { name: "Wwise", icon: <SiWwise /> },
      { name: "C#", icon: <PiFileCSharp /> },
    ],
  },
  {
    title: "Monsters in Trucks",
    img: "./images/MonsterTrucks1.png",
    role: "Game Developer",
    description:
      "The Marble Game was built for a game jam where the theme was to rapid prototype: make as many levels based around one mechanic as you can.  ",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://itch.io/embed-upload/11627955?color=333333"
            allowFullScreen
          />
        </div>
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "Unity", icon: <FaUnity /> },
      { name: "Wwise", icon: <SiWwise /> },
      { name: "C#", icon: <PiFileCSharp /> },
    ],
  },
];

export const moreGamesData = [];

export const EventsData = [
  {
    title: "Kaskade: Menagerie",
    img: "./images/Menag2022.jpg",
    role: "Stage Designer | Visual Artist",
    description:
      "This is a stage I designed was for the festival 'Menagerie 2023' with headlining artist Kaskade.  I also was the project manager for this stage and also created and performed the real-time, visual content on the screens. There are more examples of my visual art in the link below!.",
    element: (
      <div className="p-2 ">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl ">
          <iframe
            src="https://www.youtube.com/embed/o_2ffI3xDDM?si=ToFiy7RqNoamWxdL"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div
          class="sketchfab-embed-wrapper"
          className="aspect-w-16 aspect-h-9 "
        >
          <iframe
            className=" size-full rounded-xl"
            title="Kaskade_stage2"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/4bd1f7322754428fb50b67f305836fae/embed?ui_theme=dark"
          ></iframe>
        </div>
      </div>
    ),
    element2: (
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
    title: "Diplo: Menagerie",
    img: "./images/Diplo1.png",
    role: "Stage Designer | Visual Artist",
    description:
      "This is a stage I designed was for the music festival 'Menagerie 2021' with headlining artist Diplo.  I also was the project manager for this stage and I created and performed the real-time, visual content on the screens. There are more examples of my visual art in the link below!.",
    element: (
      <div className="p-2 ">
        <div className="overflow-hidden justify-center rounded-xl ">
          <img src="./images/Diplo2.png" className="flex"></img>
        </div>
        <div
          class="sketchfab-embed-wrapper"
          className="aspect-w-16 aspect-h-9 "
        >
          <iframe
            className=" size-full rounded-xl"
            title="Kaskade_stage2"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/e2bfaabf7a9949d281ab4559dc20eecb/embed"
          ></iframe>
        </div>
      </div>
    ),
    element2: (
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
    title: "Colour Feeders",
    img: "./images/Logo1.png",
    role: "Digital Media Artist | AV Technician",
    description:
      "Colour Feeders is a technology arts community of multi-disiplinary artists based in San Francisco. Specializing in hardware solutions and real-time, audio-visual experiences. Colour Feeders has worked in some of most cutting edge art spaces. Founded and led by Will Clark.",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <img src="./images/CF_full.png" />
        </div>
      </div>
    ),
    element2: (
      <button
        id="standbutton"
        onClick={() => window.open("https://colourfeeders.com/", "_blank")}
        className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
      >
        <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
          Visit Website
        </span>
        <FaComputer className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
      </button>
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
        <div className="grid grid-rows-2  h-full max-w-[400px] lg:max-w-full">
          <img
            src="images/ATH3.jpg"
            className="lg:row-span-1 flex rounded-3xl object-cover"
          />
          <img
            src="images/ATHCompy2-scaled.jpg"
            className="lg:row-span-1 flex rounded-3xl object-cover"
          />
        </div>
      </div>
    ),
    element2: (
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
    ),
    icons: [
      { name: "Touch Designer", icon: <MdTouchApp /> },
      { name: "Server Tech", icon: <FaComputer /> },
      { name: "Nvidia G-Sync", icon: <SiNvidia /> },
    ],
  },
];

export const moreEventsData = [];

export const BackEndIcons = [
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <PiFileCSharp /> },
  { name: "Express JS", icon: <SiExpress /> },
  { name: "REST Api", icon: <FaCloud /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Meta XR", icon: <FaMeta /> },
  { name: "Tensor Flow", icon: <SiTensorflow /> },
  { name: "Hugging Face", icon: <SiHuggingface /> },
  { name: "OpenGl", icon: <SiOpengl /> },
  { name: "Mongo DB", icon: <DiMongodb /> },
  { name: "Juce Audio DSP", icon: <SiJuce /> },
];

export const FrontEndIcons = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "React", icon: <FaReact /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "OpenGL", icon: <SiOpengl /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
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
  { name: "JavaScript", icon: <SiJavascript /> },
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
