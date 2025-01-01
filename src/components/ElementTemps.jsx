import React, { useEffect, useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { MobileParams } from "../components/ScrollManager";

const { isTablet, isMobile, responsiveRatio } = MobileParams();

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

export const Modal = ({ data, setOpenModal }) => {
  return (
    <div
      className={`fixed z-[1000] items-start justify-start max-w-screen-2xl max-2xl w-auto h-[auto] p-10 pt-[6em] bg-gray-900 border border-white rounded-xl`}
    >
      <div className="container mx-auto">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          className="absolute top-10 right-10 place-content-end text-xl text-gray-200 border-cyan-100"
        >
          <FaWindowClose />
        </button>
      </div>
      <div className="bg-transparent grid grid-cols-3 items-start justify-start">
        <div className="col-span-1">
          <h1 className="p-1 text-3xl font-semibold  text-gray-200">
            {data.title}
          </h1>
          <h3 className="p-5 ml-3 text-xl text-gray-200">Role: {data.role}</h3>

          <p className="p-[1em] text-gray-400 text-lg bg-gray-900 hover:bg-black transition rounded-lg duration-500 border ">
            <br />
            {data.description}
            <br /> <br />
          </p>
        </div>

        <div className=" m-auto px-6 col-span-2">{data.element}</div>
      </div>
    </div>
  );
};

export const IconBox1 = ({ data, title, className }) => {
  const containerRef = useRef();

  const [textBG, setTextBG] = useState(title);
  console.log(textBG);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        `backdrop-blur-3xl h-[21%] hover:bg-black transition duration-500 border rounded-xl p-2 m-2`,
        className
      )}
    >
      <h1
        className={`${
          isMobile
            ? "top-0 right-0 text-[250%] text-3xl"
            : "absolute bottom-0 right-0 text-[250%] text-3xl"
        } font-extrabold p-10 opacity-30`}
      >
        {textBG.toUpperCase()}
      </h1>
      <div>
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
          ? "border-teal-500 shadow drop-shadow-[0_10px_10px_rgba(0,0.9,0.9,1)]"
          : ""
      }`}
    >
      {icon}
    </motion.button>
  );
};
