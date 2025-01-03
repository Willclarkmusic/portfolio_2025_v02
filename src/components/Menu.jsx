import React from "react";
import { BsPersonWalking } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import { PiPlanetFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { FaGamepad, FaChevronDown } from "react-icons/fa";
import { GiCampingTent, GiBallPyramid } from "react-icons/gi";

const Menu = (props) => {
  const { section, onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <div className="fixed backdrop-blur-3xl z-50 bg-transparent w-full h-[5%]">
      <div className="p-2">
        {/*Menu Close/Open Button*/}
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-20 fixed right-14 p-2 w-10 h-10 rounded-md"
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

        {/* DownButton */}
        <div
          className={`absolute bottom-10 z-10 left-[45%] ${
            section == 7 ? "rotate-180" : "rotate-0"
          }`}
        >
          <button
            onClick={() =>
              onSectionChange(
                section == 0 ? section + 2 : section == 7 ? 0 : section + 1
              )
            }
            className="border p-2 rounded-xl transition-all duration-500 ease-in-out"
          >
            <FaChevronDown className="text-white text-4xl cursor-pointer group-hover:text-blue-400" />
          </button>
        </div>

        {/* Container */}
        <div
          className={`z-10 right-2 transition-all fixed mr-10 h-screen flex flex-col items-end justify-center space-y-10 p-2 duration-500 
        ${
          menuOpened
            ? "opacity-100 pointer-events-auto backdrop-blur-3xl"
            : "opacity-0 pointer-events-none"
        }`}
        >
          {/* Menu Item 1 */}
          <button
            onClick={() => onSectionChange(2)}
            className="group flex items-center border-gray-400 p-2 rounded-xl transition-all duration-500 ease-in-out"
            id={section === 2 ? "menuactive" : ""}
          >
            <span className="p-1 ml-[-3.2em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
              About
            </span>
            <BsPersonWalking className="text-white text-2xl cursor-pointer group-hover:text-blue-400" />
          </button>

          {/* Menu Item 2 */}
          <button
            onClick={() => onSectionChange(3)}
            className="group flex items-center border-gray-400 p-2 rounded-xl transition-all duration-500 ease-in-out"
            id={section === 3 ? "menuactive" : ""}
          >
            <span className="p-1 ml-[-4em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
              Projects
            </span>
            <PiPlanetFill className="text-white text-2xl cursor-pointer group-hover:text-blue-400" />
          </button>

          {/* Menu Item 3 */}
          <button
            onClick={() => onSectionChange(4)}
            className="group flex items-center border-gray-400 p-2 rounded-xl transition-all duration-500 ease-in-out"
            id={section === 4 ? "menuactive" : ""}
          >
            <span className="p-1 ml-[-2.1em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
              Skills
            </span>
            <FaGamepad className="text-white text-2xl cursor-pointer group-hover:text-blue-400" />
          </button>

          {/* Menu Item 4 */}
          <button
            onClick={() => onSectionChange(5)}
            className="group flex items-center border-gray-400 p-2 rounded-xl transition-all duration-500 ease-in-out"
            id={section === 5 ? "menuactive" : ""}
          >
            <span className="p-1 ml-[-4.6em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
              Tech Art
            </span>
            <GrTechnology className="text-white text-2xl cursor-pointer group-hover:text-blue-400" />
          </button>

          {/* Menu Item 5 */}
          <button
            onClick={() => onSectionChange(6)}
            className="group flex items-center border-gray-400 p-2 rounded-xl transition-all duration-500 ease-in-out"
            id={section === 6 ? "menuactive" : ""}
          >
            <span className="p-1 ml-[-4.2em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
              Contact
            </span>
            <GiCoffeeCup className="text-white text-2xl cursor-pointer group-hover:text-blue-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
