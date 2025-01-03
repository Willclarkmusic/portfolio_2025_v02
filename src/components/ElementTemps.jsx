import React, { useEffect, useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { MobileParams } from "../components/ScrollManager";

const { isTablet, isMobile } = MobileParams();

export const Card1 = ({
  data,
  containerRef,
  setModalContent,
  setModalVisible,
  className,
}) => {
  return (
    <motion.div
      drag={isMobile ? false : true}
      dragConstraints={containerRef}
      className={twMerge(`${isMobile ? "p-3" : "p-0"}`, className)}
    >
      <div className="w-[95%] h-full rounded-2xl border-2 backdrop-blur-lg hover:bg-black transition duration-500">
        <div className={`rounded-t-xl h-[60%]`}>
          <img
            src={data.img}
            className={`rounded-3xl h-full w-full object-cover`}
          />
        </div>
        <div className="p-2 flex flex-col ">
          <p
            className={`p-1 md:text-xl sm:text-md font-semibold  text-gray-200`}
          >
            {data.title}
          </p>
          <p className="ml-3 md:text-md sm:text-sm text-gray-200">
            {data.role}
          </p>
          <div className="pt-1 items-center justify-center">
            <button
              className="text-white text-lg w-full"
              onClick={() => {
                setModalContent(data);
                isMobile ? setModalVisible(true) : "";
              }}
            >
              Details...
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const IconBox1 = ({ data, title, className, classIcons = "" }) => {
  const containerRef = useRef();
  const [textBG, setTextBG] = useState(title);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        `relative backdrop-blur-3xl h-[21%] transition duration-500 border rounded-xl p-2 m-2`,
        className
      )}
    >
      <h1
        className={`${
          isMobile
            ? "fixed top-0 text-[250%] text-3xl"
            : "absolute bottom-0 right-0 text-[250%] text-3xl"
        } font-extrabold p-10 opacity-30`}
      >
        {textBG.toUpperCase()}
      </h1>
      <div
        className={twMerge(
          `${isMobile ? "mt-[9rem]" : ""} relative`,
          classIcons
        )}
      >
        {data.map((d, index) => {
          return (
            <Iconic
              key={index}
              iconData={d}
              containerRef={containerRef}
              setTextBG={setTextBG}
              textBG={textBG}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Iconic = ({
  iconData,
  containerRef,
  textBG,
  setTextBG,
  title,
}) => {
  const { icon, name } = iconData;

  const ButtonClick = () => {
    if (textBG === name) {
      setTextBG(title);
    } else {
      setTextBG(name);
    }
  };
  return (
    <motion.button
      drag
      dragConstraints={containerRef}
      onClick={ButtonClick}
      className={`text-4xl p-[1.2%] m-[1.2%] z-50 ${
        name === textBG
          ? "border-teal-500 text-blue-500 shadow drop-shadow-[0_10px_10px_rgba(0,0.9,0.9,1)]"
          : ""
      }`}
    >
      {icon}
    </motion.button>
  );
};
