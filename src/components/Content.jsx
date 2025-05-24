import { RiTailwindCssFill, RiBlenderLine } from "react-icons/ri";
import { IoLogoJavascript, IoDocumentText } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { PiFileCSharp } from "react-icons/pi";
import { LuAudioLines } from "react-icons/lu";
import {
  FaReact,
  FaCloud,
  FaPython,
  FaUnity,
  FaGithub,
  FaHtml5,
  FaAws,
  FaNode,
  FaFigma,
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
  SiPytorch,
  SiFastapi,
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
    title: "Atomic Chess",
    img: "./images/Chess1.png",
    role: "Python Developer",
    description:
      "Atomic Chess is a variant of chess where when a piece is captured, and explosion happens, killing all pieces adjacent to the capture. I created this program as a portfolio piece in my intro to Python class at OSU.",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://trinket.io/embed/python3/f6225c469bb9?outputOnly=true&runOption=run&start=result"
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
    title: "Sue Chef: Recipe Social",
    img: "images/SueChef.png",
    role: "Front-end Engineer | UX Researcher",
    description:
      "This Website was built with a lot of front-end tools. React Fiber, Three.js, Tailwind, Framer Motion and more! I love to explore the amazing world of React. Code that writes other code... Simply Amazing! ",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://embed.figma.com/proto/3q80IKS5vI9E7cUj7otYWq/AI-cooking-app---Final-Proto?node-id=1-3&starting-point-node-id=1%3A3&embed-host=share"
            allowFullScreen
          />
        </div>
      </div>
    ),
    element2: (
      <div className="flex">
        <button
          id="standbutton"
          onClick={() =>
            window.open("/Generative Research Report Will Clark.pdf", "_blank")
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View Research
          </span>
          <IoDocumentText className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
        <button
          id="standbutton"
          onClick={() =>
            window.open("/Generative Research Report Will Clark.pdf", "_blank")
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View Prototype
          </span>
          <FaFigma className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    ),
    icons: [
      { name: "React", icon: <FaReact /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Project Management", icon: <GrUserManager /> },
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
    title: "Jelly Jam: 1st place",
    img: "./images/JellyJam.webp",
    role: "Game Developer | Sound Design",
    description:
      "Took first place in multiple categories in the 2023 Jelly Jam as part of the P1-Open Metaverse community. My team of four created a 3d racing game in Unity using custom modeling, sound effects and environmental assets all within 3 days. I contributed programming and custom sound effects.",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/sNWzZMGAus8?si=wwnEkcQAySZ4Wf4E"
            allowFullScreen
          />
        </div>
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
      </div>
    ),
    icons: [
      { name: "Unity", icon: <FaUnity /> },
      { name: "C#", icon: <PiFileCSharp /> },
      { name: "Wwise", icon: <SiWwise /> },
      { name: "Project Management", icon: <GrUserManager /> },
    ],
  },
  {
    title: "Ninja Frog",
    img: "./images/ChickenGame.png",
    role: "Game Developer | Instructor",
    description:
      "Ninja Frog is a 2D platformer game that I developed as part of the ciriculum for my game audio course taught at Pyramind Institute.  I created this game in Unity using free assets so that students could easily implement their sound design using Wwise and C#.",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://itch.io/embed-upload/11622436?color=333333"
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
      { name: "C#", icon: <PiFileCSharp /> },
      { name: "Wwise", icon: <SiWwise /> },
      { name: "Project Management", icon: <GrUserManager /> },
    ],
  },
];

export const moreGamesData = [
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
  {
    title: "SynthLand",
    img: "./images/MetaSounds1.png",
    role: "Game Developer | Audio Programmer",
    description:
      "This game level is part of a prototype I built for a game called Synthland that uses interactive gameplay with procedural audio programmed in Unreal Engine 5's, MetaSounds. The audio is generated in real-time based on interactions that the user has with the game's environment.",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/oPhbU3bMjUo?si=EJJK1vOrzD0EDdJv"
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
          Visit Marpi Studios
        </span>
        <FaComputer className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
      </button>
    ),
    icons: [
      { name: "Unity", icon: <FaUnity /> },
      { name: "C#", icon: <PiFileCSharp /> },
      { name: "Wwise", icon: <SiWwise /> },
      { name: "Project Management", icon: <GrUserManager /> },
    ],
  },
  {
    title: "Game Audio Re-Designs",
    img: "./images/SoundDesign.png",
    role: "Sound Design | Audio Programmer",
    description:
      "This youtube playlist shows off my skills in sound design and composition for vide game audio.",
    element: (
      <div className="overflow-hidden justify-center p-2">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/videoseries?si=HiZCIbRhljAsNUdb&amp;list=PLDQiSM9VNZvET1OmajoNikPFdCuKhLwog"
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
          Visit Marpi Studios
        </span>
        <FaComputer className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
      </button>
    ),
    icons: [
      { name: "Unity", icon: <FaUnity /> },
      { name: "C#", icon: <PiFileCSharp /> },
      { name: "Wwise", icon: <SiWwise /> },
      { name: "Project Management", icon: <GrUserManager /> },
    ],
  },
];

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
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "NodeJS", icon: <FaNode /> },
  { name: "PyTorch", icon: <SiPytorch /> },
  { name: "Hugging Face", icon: <SiHuggingface /> },
  { name: "Express JS", icon: <SiExpress /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Meta XR", icon: <FaMeta /> },
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
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "ToneJS", icon: <LuAudioLines /> },
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

export const WorkExperiences = [
  {
    title: "Software Engineer",
    experiences: [
      {
        company: "Stealth Startup",
        title: "Backend Software Engineer Intern",
        meta: "Remote | Mar 2025 - Present",
        description: (
          <>
            ▪ Partnering weekly with a founding engineer to explore web app
            infrastructure including React, Fast API, and Figma. <br />
            ▪ Gaining hands-on experience with real-world development workflows,
            information security, and deployment strategies <br />▪
            Participating with design and technical discussions to deepen
            understanding of modern web frameworks and tools.
          </>
        ),
      },
      {
        company: "Oregon State University",
        title: "Bachelor of Science | Computer Science",
        meta: "Expected grad Mar 2026",
        description: (
          <>
            ▪ Dean's list: Honor roll | All terms | GPA 3.9
            <br /> ▪ Coursework: Algorithms, Data Structures, Databases, Web
            Dev, Discrete Math, Linear Algebra, Assembly x86, Operating Systems
          </>
        ),
      },
    ],
  },
  {
    title: "Audio Visual Engineer",
    experiences: [
      {
        company: "Colour Feeders",
        title: "AV Engineer / Media Artist",
        meta: "2016 - Present",
        description: (
          <>
            ▪ Built Python and C++ / C# tools for real-time multimedia
            processing and infrastructure management and troubleshooting. ▪
            Constructed high-performance computing clusters with Super Micro,
            Intel CPUs and enterprise Nvidia GPUs, for use in real-time
            audio-visual systems and 3D video rendering in digital media-based
            art galleries and interactive installations. ▪ Led full-stack
            development of interactive installations, leveraging Unity, Node.js,
            React, and OpenGL frameworks.
          </>
        ),
        elements: (
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
      },
      {
        company: "The Midway SF",
        title: "AV Technology Lead Engineer",
        meta: "2017 - 2024",
        description: (
          <>
            ▪ Established and led technology systems, engineering teams, and AV
            operations for a large-scale event venue and creative complex.
            <br />▪ Built complex, interconnected systems for lighting, audio,
            video and computer networking. Estimated total budget of over $3
            million. <br />▪ Designed and implemented multi-node, server-based
            computing environments for digital multimedia installations.
          </>
        ),
        elements: (
          <button
            id="standbutton"
            onClick={() => window.open("https://themidwaysf.com/", "_blank")}
            className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
          >
            <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
              Visit Website
            </span>
            <FaComputer className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
          </button>
        ),
      },
      {
        company: "Berklee College of Music",
        title: "Master's of Arts | Music Technology Innovation",
        meta: "grad 2014",
        description: (
          <>
            ▪ Dean's list: Honor roll | All terms | GPA 3.9
            <br /> ▪ Coursework: Large format studio recording, Music
            Production, Programming in MaxMSP, Event production, Live
            performance, DJing
          </>
        ),
      },
    ],
  },
  {
    title: "Game Developer",
    experiences: [
      {
        company: "P1-OM",
        title: "Technical Sound Designer",
        meta: "Jan 2022 - Jun 2023",
        description: `
          ▪	Contributed to an open-source company, developing games by early career game developers for a wide audience.`,
      },
      {
        company: "Manicat Studios",
        title: "Game Developer / Sound Designer",
        meta: "2023",
        description: (
          <>
            ▪ Game Jam studio created by members of P1-OM
            <br />▪ Won over $10k in prizes as a team
          </>
        ),
      },
    ],
  },
  {
    title: "Instructor in Audio Technology",
    experiences: [
      {
        company: "SAE Institute: Expressions",
        title: "Collegiate level instructor",
        meta: "2014 - 2016",
        description: (
          <>
            ▪ Partnering weekly with a founding engineer to explore web app
            infrastructure including React, Fast API, and Figma. <br /> ▪
            Gaining hands-on experience with real-world development workflows,
            information security, and deployment strategies <br />▪
            Participating with design and technical discussions to deepen
            understanding of modern web frameworks and tools.
          </>
        ),
      },
      {
        company: "Pyramind",
        title: "Ableton Live instructor",
        meta: "2015 - 2024",
        description: (
          <>
            ▪ Led a course in Ableton live with up to 20 students in a class{" "}
            <br />▪ Explored topics in advanced sound design, music production
            and more
          </>
        ),
      },
    ],
  },
];