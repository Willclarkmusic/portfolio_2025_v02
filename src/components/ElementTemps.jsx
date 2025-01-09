import React, { useEffect, useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { MobileParams } from "../components/ScrollManager";

const { isTablet, isMobile } = MobileParams();

export const MotionP = (props) => {
  const { children, container } = props;
  return (
    <motion.div
      drag={!isMobile}
      dragConstraints={container}
      className="max-w-xl m-[2%] "
    >
      <motion.p
        className={`justify-start p-2 text-sm md:p-[1.5em] lg:p-5 md:text-md text-white-200 hover:bg-black bg-slate-950 transition duration-500 rounded-xl`}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
};

export const MotionH1 = (props) => {
  const { children, container } = props;
  return (
    <motion.div
      drag={!isMobile}
      dragConstraints={container}
      className="max-w-60 m-[2%] backdrop-blur-2xl"
    >
      <motion.h1
        className={`p-[1em] md:p-[1.5em] lg:p-[0.5em] md:text-3xl backdrop-blur-3xl text-white-200 hover:bg-black transition duration-500 border-b `}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {children}
      </motion.h1>
    </motion.div>
  );
};

export const Card1 = ({
  data,
  containerRef,
  setModalContent,
  setModalVisible,
  className,
}) => {
  return (
    <motion.div
      // drag={isMobile ? false : true}
      // dragConstraints={containerRef}
      className={twMerge(`${isMobile ? "p-3" : "p-0"}`, className)}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="w-[95%] h-full rounded-2xl backdrop-blur-lg bg-slate-950 hover:bg-black transition duration-500">
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
          <div className="pt-4 items-center justify-center text-xs">
            <button
              id="standbutton"
              className="text-white w-full p-2 text-xl cursor-pointer group-hover:text-blue-400"
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

export const IconBox1 = ({
  data,
  title,
  className,
  classIcons = "",
  drag = true,
}) => {
  const containerRef = useRef();
  const [textBG, setTextBG] = useState(title);

  return (
    <motion.div
      ref={containerRef}
      className={twMerge(
        `flex md:block backdrop-blur-3xl hover:bg-black bg-slate-950 transition duration-500 rounded-xl p-2 m-2 max-w-[95%] md:max-w-[90%]`,
        className
      )}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <h1
        className={`text-[250%] text-xl md:text-3xl absolute md:inline md:bottom-0 md:right-0 md:text-[200%]  font-extrabold p-5 opacity-30`}
      >
        {textBG.toUpperCase()}
      </h1>
      <div className={twMerge(`relative`, classIcons)}>
        {data.map((d, index) => {
          return (
            <Iconic
              key={index}
              iconData={d}
              containerRef={containerRef}
              setTextBG={setTextBG}
              textBG={textBG}
              title={title}
              drag={drag}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export const Iconic = ({
  iconData,
  containerRef,
  textBG,
  setTextBG,
  title,
  drag,
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
      id="iconbutton"
      drag={drag}
      dragConstraints={containerRef}
      onClick={ButtonClick}
      className={`md:text-[180%] text-2xl m-[1%] z-50 ${
        name === textBG ? "border-blue-600 text-blue-500 shadow" : ""
      }`}
    >
      {icon}
    </motion.button>
  );
};

export const ProjectDisplay = ({ contentData }) => {
  const [projModalContent, setProjModalContent] = useState(contentData[0]);
  const [projModalVisible, setProjModalVisible] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (projModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [projModalVisible]);

  return (
    <motion.div>
      <div className="flex w-[100%] max-w-[1200px] bg-black z-10 mb-[10%] rounded-xl">
        <div
          className={`w-[100%] h-[90%] m-[1%] flex  lg:grid lg:grid-cols-2 lg:grid-rows-2 sm:grid-rows-1 sm:grid-cols-1
          `}
        >
          <div
            ref={containerRef}
            className={`m-1 w-full h-full lg:col-span-1 lg:row-span-2 md:grid md:grid-cols-2 md:grid-rows-2 sm:col-span-2 sm:grid-cols-1 sm:grid-rows-2 "
            `}
          >
            {contentData.map((data, key) => (
              <Card1
                key={key}
                data={data}
                containerRef={containerRef}
                setModalContent={setProjModalContent}
                setModalVisible={setProjModalVisible}
                className={`col-span-1 row-span-1 w-[100%] h-[100%]`}
              />
            ))}
          </div>

          {/* DESKTOP MODAL */}
          <div className="hidden col-span-1 row-span-2 lg:grid grid-rows-4 rounded-xl w-full ">
            <div className="row-span-2 items-center">
              {projModalContent.element}
            </div>
            <IconBox1
              data={projModalContent.icons}
              title="Stack"
              className="row-span-1 h-[60%]"
            />
            <div>
              <h1 className="text-xl font-semibold px-5 py-2">
                <b>Role:</b> {projModalContent.role}
              </h1>
              <MotionP
                className={`text-white hover:bg-slate-950 transition rounded-xl duration-500 border p-5 m-3 mt-0`}
              >
                {projModalContent.description}
              </MotionP>
            </div>
          </div>

          {/* MOBILE MODAL */}
          {projModalVisible ? (
            <div className=" fixed top-0 left-0  h-full z-50 rounded-xl size-[100%] backdrop-blur-3xl ">
              <button
                id="iconbutton"
                className="m-5 border-white text-2xl"
                onClick={() => {
                  setProjModalVisible(false);
                }}
              >
                <FaWindowClose />
              </button>
              <div className="">{projModalContent.element}</div>
              <div>
                <p
                  className={`bg-slate-950 text-white text-sm hover:bg-black transition rounded-xl duration-500 border p-5 `}
                >
                  {projModalContent.description}
                </p>
                <h1 className="p-5 text-xl">Role: {projModalContent.role}</h1>
              </div>
              <IconBox1
                data={projModalContent.icons}
                title="Tech Stack"
                className="row-span-1 h-[20%] "
                classIcons="pt-14"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const TitleBar = ({ title }) => {
  return (
    <div
      className={`flex backdrop-blur-3xl items-center justify-center w-screen border-y overflow-x-hidden`}
    >
      <h1 className="flex items-center text-4xl p-5">{title}</h1>
    </div>
  );
};
