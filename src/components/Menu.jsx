import React, { useState, useRef, useEffect } from "react";
import Resume from "/Resume_SoftwareDev_WillClark_2024.pdf";
import { twMerge } from "tailwind-merge";
import MediaQuery from "react-responsive";

import { BsPersonWalking } from "react-icons/bs";
import { PiPlanetFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaPaperPlane } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { MobileParams } from "../components/ScrollManager";
import { FaChevronDown } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { FaWindowClose } from "react-icons/fa";

const { isTablet, isMobile } = MobileParams();

const Menu = (props) => {
  const { refArray } = props;

  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [contactOpened, setContactOpened] = useState(false);

  const resumeOpen = () => {
    window.open(Resume, "_blank");
  };

  const scrollToSection = (index) => {
    setSection(index);
    console.log(index);
    const element = refArray[index];
    console.log(refArray);
    window.scrollTo({
      top: element.current.offsetTop - 45,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isMobile && menuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpened]);

  return (
    <>
      <MobileMenu
        section={section}
        setSection={scrollToSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        settingsOpened={settingsOpened}
        setSettingsOpened={setSettingsOpened}
        contactOpened={contactOpened}
        setContactOpened={setContactOpened}
        resumeOpen={resumeOpen}
        className="md:hidden "
      />

      <MainMenu
        section={section}
        setSection={scrollToSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        settingsOpened={settingsOpened}
        setSettingsOpened={setSettingsOpened}
        contactOpened={contactOpened}
        setContactOpened={setContactOpened}
        resumeOpen={resumeOpen}
        className="hidden md:block "
      />
    </>
  );
};

export default Menu;

const MainMenu = ({
  section,
  setSection,
  menuOpened,
  setMenuOpened,
  settingsOpened,
  setSettingsOpened,
  contactOpened,
  setContactOpened,
  resumeOpen,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "fixed backdrop-blur-3xl z-50 bg-transparent w-full min-h-10 h-[5%] border-b-[1px] ",
        className
      )}
    >
      {/*Menu Close/Open Button*/}
      <div>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-20 fixed left-12 p-2 w-11 h-[100%] border-white border-x-[1px]  "
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>

        {/* Section Links */}
        <div
          className={`fixed border-[1px] bg-zinc-900 top-[100%] left-12 h-auto transition-all flex flex-col items-start space-y-10 p-2 py-4 duration-500 
          ${
            menuOpened
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Menu Item 1 */}
          <button
            onClick={() => setSection(1)}
            className="group flex items-center p-2 rounded-xl transition-all duration-500 ease-in-out"
            id={section === 3 ? "menuactive" : ""}
          >
            <BsPersonWalking className="text-white text-4xl cursor-pointer group-hover:text-blue-400" />

            <span className="p-1 ml-[-3em] text-white text-xl opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
              About
            </span>
          </button>

          {/* Menu Item 2 */}
          <button
            onClick={() => setSection(2)}
            className="group flex items-center p-2 rounded-xl transition-all duration-500 ease-in-out"
            id={section === 3 ? "menuactive" : ""}
          >
            <PiPlanetFill className="text-white text-4xl cursor-pointer group-hover:text-blue-400" />
            <span className="p-1 ml-[-4em] text-white text-xl opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
              Projects
            </span>
          </button>

          {/* Menu Item 3 */}
          <button
            onClick={() => setSection(3)}
            className="group flex items-center p-2 rounded-xl transition-all duration-500 ease-in-out"
            id={section === 5 ? "menuactive" : ""}
          >
            <GrTechnology className="text-white text-4xl cursor-pointer group-hover:text-blue-400" />
            <span className="p-1 ml-[-4.2em] text-white text-xl opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
              Tech Art
            </span>
          </button>
        </div>
      </div>

      <div>
        {/* Contact Button */}
        <div className="absolute left-[40%] h-[100%]">
          <button
            onClick={() => setContactOpened(!contactOpened)}
            className="inline top-0 w-40 items-center h-[100%] hover:bg-zinc-900  transition-all duration-500 ease-in-out border-x-2"
          >
            <span className="text-white text-xl hover:text-blue-500">
              Contact{"   "}
              <FaPaperPlane className="inline text-3xl text-white hover:text-blue-500 cursor-pointer" />
            </span>
          </button>

          {/* Contact Area */}
          <div
            className={`fixed border-2 bg-black top-[100%] h-96 w-96 transition-all justify-start space-y-5 p-2 duration-500 
              ${
                contactOpened
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
          >
            <ContactForm />
            <h1 className="bg-black border-2 p-4 text-2xl">
              My Email: WillClarkmusic@gmail.com
            </h1>
          </div>

          {/* Resume Button */}
          <button
            onClick={resumeOpen}
            className="inline top-0 w-40 items-center h-[95%] hover:bg-zinc-900 transition-all duration-500 ease-in-out border-r-2"
          >
            <span className="text-white text-xl hover:text-blue-500">
              <RxOpenInNewWindow className="inline text-3xl text-white hover:text-blue-500 cursor-pointer" />
              {"   "}Resume
            </span>
          </button>
        </div>

        {/*Settings Button*/}
        <div>
          {/* <button
            onClick={() => setSettingsOpened(!settingsOpened)}
            className="z-20 fixed left-12 top-[10%] p-2 w-10 h-10 border-white border-[1px] rounded-xl "
          >
            <IoSettingsSharp className=" rounded-md w-full text-2xl" />
          </button> */}
          {/* Settins Area */}
          {/* <div
            className={`fixed border-2 bg-black rounded-lg top-[4em] left-12 h-20 w-60 transition-all duration-500 
          ${
            settingsOpened
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          >
            <h1 className="text-xl p-5">Coming Soon...</h1>
          </div> */}
        </div>
      </div>

      <div className={`absolute left-14 top-[1800%] justify-center `}>
        {section !== 3 && (
          <button
            onClick={() => setSection(section + 1)}
            className={`absolute border p-2 transition-all duration-500 ease-in-out bg-black`}
          >
            <FaChevronDown className="text-white text-4xl cursor-pointer group-hover:text-blue-400" />
          </button>
        )}
        {section !== 0 && (
          <button
            onClick={() => setSection(section - 1)}
            className={`relative left-14 border p-2 transition-all duration-500 ease-in-out bg-black`}
          >
            <FaChevronDown className="text-white text-4xl cursor-pointer group-hover:text-blue-400 rotate-180" />
          </button>
        )}
      </div>
    </div>
  );
};

const MobileMenu = ({
  section,
  setSection,
  menuOpened,
  setMenuOpened,
  settingsOpened,
  setSettingsOpened,
  contactOpened,
  setContactOpened,
  resumeOpen,
  className,
}) => {
  const MobileButton = ({ title, onClick, children, sectionIndex }) => {
    return (
      <button
        onClick={onClick}
        className="w-40 rounded-xl items-center py-1 bg-gray-900 transition-all duration-500 ease-in-out border-1"
      >
        <span className="text-white text-xl hover:text-blue-500">
          {title}
          {"   "}
          {children}
        </span>
      </button>
    );
  };

  const scrollTo = (index) => {
    setSection(index);
    setMenuOpened(false);
  };

  return (
    <div
      className={twMerge(
        "fixed backdrop-blur-3xl z-40 bg-transparent w-full h-[5%]",
        className
      )}
    >
      {/*Menu Close/Open Button*/}
      <div>
        <button
          onClick={() => {
            setSettingsOpened(false);
            setMenuOpened(!menuOpened);
          }}
          className="z-30  fixed right-12 top-[10%] p-2 w-10 h-10 border-white border-[1px]  "
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all z-30 ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 z-30 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all z-30 ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>

        {/* Container */}
        <div
          className={`z-20 fixed border-2 w-full bg-black top-0 right-0 h-screen transition-all flex flex-col items-end space-y-8 p-10 py-20 duration-500 
          ${
            menuOpened
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Menu Item 1 */}
          <MobileButton title="About" onClick={() => scrollTo(1)}>
            <BsPersonWalking className="inline text-3xl text-white hover:text-blue-500 cursor-pointer" />
          </MobileButton>
          <MobileButton title="Projects" onClick={() => scrollTo(2)}>
            <PiPlanetFill className="inline text-3xl text-white hover:text-blue-500 cursor-pointer" />
          </MobileButton>
          <MobileButton title="Tech Art" onClick={() => scrollTo(3)}>
            <GrTechnology className="inline text-3xl text-white hover:text-blue-500 cursor-pointer" />
          </MobileButton>

          {/* Contact */}
          <MobileButton
            title="Contact"
            onClick={() => setContactOpened(!contactOpened)}
          >
            <FaPaperPlane className="inline text-3xl text-white hover:text-blue-500 cursor-pointer" />
          </MobileButton>
          <MobileButton title="Resume" onClick={resumeOpen}>
            <RxOpenInNewWindow className="inline text-3xl text-white hover:text-blue-500 cursor-pointer" />
          </MobileButton>

          {/*Settings Button*/}
          {/* <button
            onClick={() => setSettingsOpened(!settingsOpened)}
            className="z-20 fixed left-12 top-10 p-2 w-10 h-10 border-white border-[1px] rounded-xl "
          >
            <IoSettingsSharp className=" rounded-md w-full text-2xl" />
          </button> */}
        </div>
      </div>

      {/* Settings Area */}
      <div>
        <div
          className={`fixed border-2 bg-black rounded-lg top-36 left-12 h-80 w-40 transition-all flex flex-col items-end justify-center space-y-5 p-2 duration-500 
        ${
          settingsOpened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        >
          <h1 className="text-3xl">Coming Soon...</h1>
        </div>
      </div>

      {/* Arrows */}
      <div className={`absolute right-24 top-[1800%] justify-center `}>
        {section !== 3 && (
          <button
            onClick={() => setSection(section + 1)}
            className={`absolute border p-2  transition-all duration-500 ease-in-out bg-black`}
          >
            <FaChevronDown className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
          </button>
        )}
        {section !== 0 && (
          <button
            onClick={() => setSection(section - 1)}
            className={`absolute right-3 border p-2 transition-all duration-500 ease-in-out bg-black`}
          >
            <FaChevronDown className="text-white text-3xl cursor-pointer group-hover:text-blue-400 rotate-180" />
          </button>
        )}
      </div>
      {/* Contact Area */}
      <div
        className={`fixed border-2 bg-black rounded-lg top-0 left-0 h-screen w-full transition-all space-y-5 p-2 duration-500 
              ${
                contactOpened
                  ? "opacity-100 pointer-events-auto z-40"
                  : "opacity-0 pointer-events-none"
              }`}
      >
        <button
          id="iconbutton"
          className="static mx-5 my-2 border-white "
          onClick={() => {
            setContactOpened(false);
          }}
        >
          <FaWindowClose />
        </button>
        <ContactForm />
      </div>
    </div>
  );
};
