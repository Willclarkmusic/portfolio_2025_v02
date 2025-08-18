import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { MobileParams } from "../components/ScrollManager";
import { FaGithub, FaSoundcloud, FaLinkedin } from "react-icons/fa";
import { IoTerminalSharp } from "react-icons/io5";

const { isTablet, isMobile } = MobileParams();

export const TitleBar = ({
  title,
  children = null,
  leftWidgets = null,
  rightWidgets = null,
  className,
  blur = false,
}) => {
  return (
    <div
      className={twMerge(
        `flex flex-row ${
          blur ? "backdrop-blur-xl bg-opacity-50" : "bg-opacity-50"
        }  bg-black items-center justify-center w-screen border-y overflow-x-hidden`,
        className
      )}
    >
      <h1 className="flex justify-center items-center text-4xl p-4">{title}</h1>
      <div className="relative ">{children}</div>
    </div>
  );
};

export const MotionP = (props) => {
  const { children, container, drag = false } = props;
  return (
    <motion.div
      drag={drag}
      dragConstraints={container}
      className="max-w-xl m-[2%] "
    >
      <motion.p
        className={`justify-start p-2 text-sm md:p-[1.5em] lg:p-5 md:text-md text-[90%] text-white-200 hover:bg-black border-[1px] border-transparent hover:border-slate-400  bg-slate-950 transition duration-500 rounded-xl`}
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
  const { children, container, size = "md:text-3xl" } = props;
  return (
    <motion.div
      drag={!isMobile}
      dragConstraints={container}
      className="flex justify-center items-center max-w-60 m-[2%] backdrop-blur-2xl"
    >
      <motion.h1
        className={`p-[1em] md:p-[1.5em] lg:p-[0.5em] ${size} backdrop-blur-3xl text-white-200 hover:bg-black transition duration-500 border-b `}
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

export const SocialIcons = ({ className, iconClass = "", hover = true }) => {
  const IconLink = ({
    children,
    href,
    color,
    hcolor,
    iconClasses = "",
    hovering: hover2 = true,
  }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          `${
            hover2 ? hcolor : color
          } text-2xl lg:text-3xl transition-all duration-500 ease-in-out border-1 px-2`,
          iconClasses
        )}
      >
        {children}
      </a>
    );
  };

  return (
    <div className={twMerge("items-center justify-center h-full ", className)}>
      <div className="flex items-center justify-center h-full ">
        <IconLink
          href="https://www.linkedin.com/in/will-clark-bab69b48/"
          color="text-blue-500"
          hcolor="hover:text-blue-500"
          iconClasses={iconClass}
          hover2={hover}
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="https://github.com/Willclarkmusic"
          color="text-purple-500"
          hcolor="hover:text-purple-500"
          iconClasses={iconClass}
          hover2={hover}
        >
          <FaGithub />
        </IconLink>
        <IconLink
          href="https://soundcloud.com/cinfulmusic"
          color="text-orange-500"
          hcolor="hover:text-orange-500"
          iconClasses={iconClass}
          hover2={hover}
        >
          <FaSoundcloud />
        </IconLink>
      </div>
    </div>
  );
};

export const Accordian1 = ({ children, title, open = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(open);
  const containerRef = useRef();
  return (
    <motion.div
      ref={containerRef}
      className={
        "p-2 bg-slate-950 hover:bg-zinc-800 transition-all duration-300 rounded-lg m-3"
      }
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
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-[90%] p-2"
      >
        <span>
          <h1 className="text-md md:text-lg font-semibold">{title}</h1>
        </span>
        {/* {accordianOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out 
          ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <MotionP container={containerRef}>{children}</MotionP>
        </div>
      </div>
    </motion.div>
  );
};

export const Accordian2 = ({ data, open = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(open);
  const containerRef = useRef();

  const title = data.title;
  const experiences = data.experiences;
  return (
    <motion.div
      ref={containerRef}
      className={
        "p-2 bg-slate-950 hover:bg-zinc-800 transition-all duration-300 rounded-lg m-3 "
      }
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
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-[90%] p-2"
      >
        <span>
          <h1 className="text-md md:text-lg font-semibold">{title}</h1>
        </span>
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out 
          ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          {experiences.map((item, key) => (
            <Accordian2Nested
              container={containerRef}
              title={item.title}
              meta={item.meta}
              company={item.company}
              key={key}
            >
              {item.description}
              {item.elements ? item.elements : <></>}
            </Accordian2Nested>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Accordian2Nested = ({ children, title, company, meta, open = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(open);
  const containerRef = useRef();
  return (
    <motion.div
      ref={containerRef}
      className={
        "p-2 bg-slate-800 hover:bg-slate-900 border-transparent hover:border-slate-400 b-1 transition-all duration-300 rounded-lg m-3 border-[1px] "
      }
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
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-[90%] p-2"
      >
        <span className="text-start">
          <h1 className="text-md md:text-lg font-semibold">{title}</h1>
          <div className="flex">
            <h1 className="font-semibold px-1">
              {company}
              {" | "}
            </h1>
            <h1 className="flex">{meta}</h1>
          </div>
        </span>
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out 
          ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <MotionP
            className={`justify-start p-2 text-sm md:p-[1.5em] lg:p-5 md:text-md text-[90%] text-white-200 hover:bg-black bg-slate-950 transition duration-500 rounded-xl`}
            container={containerRef}
          >
            {children}
          </MotionP>
        </div>
      </div>
    </motion.div>
  );
};

export const Card1 = ({
  index,
  data,
  containerRef,
  openModal,
  className,
  drag = false,
}) => {
  return (
    <motion.div
      drag={!drag ? false : true}
      dragConstraints={containerRef}
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
      <div className="w-full h-full rounded-2xl backdrop-blur-lg bg-slate-950 hover:bg-black transition duration-500 ">
        <div className={`rounded-xl h-[65%]`}>
          <img
            src={data.thumbnail || data.img || (data.images && data.images[0])}
            className={`rounded-xl h-full w-full object-cover`}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="p-2 flex-col ">
          <p
            className={`p-1 md:text-xl sm:text-md font-semibold  text-gray-200`}
          >
            {data.title}
          </p>
          <p className="ml-3 md:text-md sm:text-sm text-gray-200">
            {data.role}
          </p>
          <div className="flex justify-center mt-4 text-xs">
            <button
              id="standbutton"
              className="text-white min-w-[96%] p-2 text-xl cursor-pointer group-hover:text-blue-400"
              onClick={() => openModal(data)}
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
  classText = "",
  classIcons = "",
  drag = true,
}) => {
  const containerRef = useRef();
  const [textBG, setTextBG] = useState(title);

  return (
    <motion.div
      ref={containerRef}
      className={twMerge(
        `flex md:block backdrop-blur-3xl hover:bg-black border-[1px] border-transparent hover:border-slate-400 bg-slate-950 transition duration-500 rounded-xl p-2 m-2 max-w-[95%] md:max-w-[95%]`,
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
        className={twMerge(
          `text-[250%] text-xl lg:text-3xl absolute lg:inline lg:bottom-0 lg:right-0 md:text-[200%]  font-extrabold p-5 opacity-30`,
          classText
        )}
      >
        {textBG.toUpperCase()}
      </h1>
      <div className={twMerge(`relative p-1`, classIcons)}>
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
      className={`md:text-[180%] text-2xl m-[2%] z-50 ${
        name === textBG ? "border-blue-600 text-blue-500 shadow" : ""
      }`}
    >
      {icon}
    </motion.button>
  );
};

export const ProjectDisplay2 = ({
  contentData,
  moreData,
  moreState,
  setMoreState,
  openModal,
}) => {
  const [fullData, setFullData] = useState(() => [
    ...(contentData || []),
    ...(moreData || []),
  ]);
  const [showMore, setShowMore] = useState(moreState);
  const containerRef = useRef();

  const handleShowMore = (moreBool) => {
    setShowMore(moreBool);
    setMoreState(moreBool);
  };

  return (
    <motion.div
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
      <div className="flex w-[100%] max-w-[1400px] max-h-[60%] z-10 ">
        <div
          className={`flex w-[100%] h-[90%] m-[1%] lg:grid lg:grid-cols-1 lg:grid-rows-1 grid-rows-1 grid-cols-1
          `}
        >
          <div className="block">
            <MainCards
              data={contentData}
              moreData={moreData}
              showMore={showMore}
              setShowMore={handleShowMore}
              containerRef={containerRef}
              openModal={openModal}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const MainCards = (props) => {
  const { data, moreData, showMore, setShowMore, containerRef, openModal } =
    props;

  return (
    <>
      <div
        ref={containerRef}
        className={`m-1 lg:col-span-1 lg:row-span-2 lg:grid-cols-4 lg:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-2 col-span-2 grid-cols-4 grid-rows-1 "
          `}
      >
        {data.map((data, key) => (
          <Card1
            key={key}
            index={key}
            data={data}
            containerRef={containerRef}
            openModal={openModal}
            className={`col-span-1 row-span-1 p-2 w-[100%] h-[100%] `}
          />
        ))}
      </div>
      {/* MAIN CARDS */}
      {moreData ? (
        <div className="w-full justify-center hidden lg:flex">
          {showMore ? (
            <div>
              <div
                ref={containerRef}
                className={`m-1 lg:col-span-1 lg:row-span-2 lg:grid-cols-4 lg:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-2 col-span-2 grid-cols-4 grid-rows-1 `}
              >
                {moreData.map((data, key) => (
                  <Card1
                    key={key}
                    index={key + 4}
                    data={data}
                    containerRef={containerRef}
                    openModal={openModal}
                    className={`col-span-1 row-span-1 p-2 w-[100%] h-[100%]`}
                  />
                ))}
              </div>
              <div className="w-full hidden md:flex  justify-center ">
                <button
                  onClick={() => {
                    setShowMore(false);
                  }}
                  className="p-4 bg-gray-600 rounded-md "
                >
                  Show Less...
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full hidden md:flex justify-center">
              <button
                onClick={() => {
                  setShowMore(true);
                }}
                className="p-4 bg-gray-600 rounded-md m-5"
              >
                More Projects...
              </button>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export const MobileModal = ({
  setProjModalVisible,
  projModalContent,
  setProjModalKey,
  contentData,
}) => {
  return (
    <div className="fixed md:hidden overflow-hidden top-0 justify-items-center left-0 z-50 rounded-xl size-[100%] bg-transparent backdrop-blur-3xl p-2">
      <button
        className=" border-white border-[1px] gb-black text-2xl m-2 p-2"
        onClick={() => {
          setProjModalVisible(false);
        }}
      >
        <FaWindowClose />
      </button>
      <div className="flex flex-col size-full p-1">
        <div className="flex flex-col px-2">{projModalContent.element}</div>
        <div className="flex flex-col items-center">
          <div className="">{projModalContent.element2}</div>

          <h1 className="text-xl">Role: {projModalContent.role}</h1>
          <p
            className={`bg-slate-950 text-white text-xs hover:bg-black transition rounded-xl duration-500 hover:border m-2 p-5 `}
          >
            {projModalContent.description}
          </p>
          <IconBox1
            data={projModalContent.icons}
            title="Tech Stack"
            className="w-full relative"
            classText="absolute right-0"
            classIcons="static left-0 m-2 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export const DesktopModal = ({
  setProjModalVisible,
  projModalContent,
  setProjModalContent,
  projModalKey,
  setProjModalKey,
  contentData,
}) => {
  const handleBack = () => {
    if (projModalKey > 0) {
      setProjModalKey(projModalKey - 1);
    }
    setProjModalContent(contentData[projModalKey]);
  };

  const handleForward = () => {
    if (projModalKey < contentData.length - 1) {
      setProjModalKey(projModalKey + 1);
    }
    setProjModalContent(contentData[projModalKey]);
  };

  return (
    <div className=" max-w-[1400px]">
      <motion.div
        className="place-content-end w-[99%] m-3 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.8 }}
        key="box"
      >
        <div className="flex bg-zinc-600  rounded-xl my-2 ">
          <button
            id="navbutton"
            className=" border-white text-xl m-2"
            onClick={() => {
              setProjModalVisible(false);
            }}
          >
            <FaWindowClose />
          </button>
          <div className="flex justify-center w-[100%]">
            <h1
              className={` md:text-3xl sm:text-md font-semibold m-2  rounded-md bg-zinc-900 text-gray-200`}
            >
              {projModalContent.title}
            </h1>
          </div>

          <div className="flex justify-end ">
            <button
              onClick={handleBack}
              id="navbutton"
              className=" border-white text-2xl m-2"
            >
              <FaChevronDown className="text-white text-xl cursor-pointer group-hover:text-blue-400 rotate-90" />
            </button>

            <button
              onClick={handleForward}
              id="navbutton"
              className=" border-white text-2xl m-2"
            >
              <FaChevronDown className="text-white text-xl cursor-pointer group-hover:text-blue-400 rotate-[-90deg]" />
            </button>
          </div>
        </div>

        <motion.div className="hidden col-span-2 row-span-2 md:grid grid-cols-3 w-full p-2 bg-zinc-600  rounded-xl ">
          <div className="row-span-1 col-span-2 items-center p-4 max-w-95%">
            {projModalContent.element}
          </div>

          <div className="flex-col col-span-1 w-full items-center justify-items-start ">
            <h1 className=" text-xl font-semibold  p-4">
              <b>Role:</b> {projModalContent.role}
            </h1>
            <MotionP
              className={`row-span-2 transition rounded-xl duration-500 border p-5 m-3 mt-0`}
            >
              {projModalContent.description}
            </MotionP>
            <div className="px-1"> {projModalContent.element2}</div>
            <IconBox1
              data={projModalContent.icons}
              title="Stack"
              className="row-span-1 h-[30%] md:max-w-[100%] w-[95%] max-h-40"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
