import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { twMerge } from "tailwind-merge";
import { FaWindowClose } from "react-icons/fa";

import { MobileParams } from "../components/ScrollManager";
import ParticleSystem from "../components/ParticlesScene";
import { ParticleLighting, RenderFX } from "../components/RenderManager";
import {
  ArtTechData,
  ProjectsData,
  FrontEndIcons,
  BackEndIcons,
  OtherTechIcons,
  OtherOtherIcons,
  MobileSkillIcons,
} from "../components/Content";
import { Card1, IconBox1 } from "../components/ElementTemps";

const { isTablet, isMobile } = MobileParams();

function HomePage() {
  const [modalContent, setModalContent] = useState(ArtTechData[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="flex flex-col items-center w-[100%] overflow-hidden">
      <div className="w-full h-full fixed overflow-hidden">
        <Canvas
          flat
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: false }}
          camera={
            isMobile
              ? { position: [0, -40, 60], fov: 28, near: 5, far: 200 }
              : { position: [0, 0, 45], fov: 17.5, near: 10, far: 100 }
          }
        >
          <ParticleSystem />
          <ParticleLighting />
          <RenderFX />
        </Canvas>
      </div>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ArtSection />
    </div>
  );
}
export default HomePage;

const Section = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`${
        isMobile ? "min-h-screen" : "h-screen w-screen"
      } bg-transparent`}
    >
      <motion.section
        className={twMerge(
          ` p-[2%] flex flex-col justify-center items-start z-10 select-none ${
            isMobile ? "h-[100%] w-[100%]" : "h-[90%] w-[90%]"
          }`,
          className
        )}
        initial={
          isMobile
            ? { opacity: 0 }
            : {
                opacity: 0,
                y: 10,
              }
        }
        whileInView={
          isMobile
            ? {
                opacity: 1,
                transition: {
                  staggerChildren: 0.25,
                  duration: 1.5,
                  delay: 0.2,
                },
              }
            : {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.25,
                  duration: 1.5,
                  delay: 0.2,
                },
              }
        }
      >
        {children}
      </motion.section>
    </div>
  );
};

const HomeSection = () => {
  return (
    <div className={`${isMobile ? "pt-20" : ""}`}>
      <Section>
        <h1 className="backdrop-blur-md text-6xl font-extrabold leading-snug ">
          Hi, I'm
          <br />
          <span className=" bg-white text-black accent-black px-1 italic">
            Will Clark
          </span>
        </h1>
        <motion.div drag>
          <motion.p
            drag
            className="backdrop-blur-md text-md lg:text-xl text-gray-200 mt-4"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 1.5,
            }}
          >
            Welcome to my Software Developer Portfolio
          </motion.p>
        </motion.div>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef();

  const MotionP = (props) => {
    const { children, container } = props;
    return (
      <motion.div
        drag={!isMobile}
        dragConstraints={container}
        className="max-w-xl m-[2%]"
      >
        <motion.p
          className={`${
            isMobile
              ? "p-[1em] text-sm"
              : isTablet
              ? "p-[1.5em] text-md"
              : "p-[1em] text-md"
          }    backdrop-blur-3xl text-white-200 hover:bg-black transition rounded-xl duration-500 border `}
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

  const MotionH1 = (props) => {
    const { children, container } = props;
    return (
      <motion.div
        drag={!isMobile}
        dragConstraints={container}
        className="max-w-60 m-[2%]"
      >
        <motion.h1
          className={`${
            isMobile
              ? "p-[1em] text-lg"
              : isTablet
              ? "p-[1.5em] text-lg"
              : "p-[0.5em] text-2xl"
          }    backdrop-blur-3xl text-white-200 hover:bg-black transition duration-500 border-b `}
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

  return (
    <div>
      <Section className="justify-start">
        <div className="flex backdrop-blur-3xl w-screen border-y overflow-hidden">
          <h1 className="text-4xl p-5 ">About Me</h1>
        </div>

        <div
          className={`${
            isMobile ? "" : "grid grid-cols-2"
          } border border-t-0 w-[100%] h-[90%] max-w-[1500px] `}
        >
          <div ref={containerRef} className="w-full col-span-1  p-2">
            <MotionH1 container={containerRef}>I am...</MotionH1>
            <MotionP container={containerRef}>
              ...a <b>Full-Stack Software Developer</b> from San Francisco, CA,
              I love to create satisfying, interactive experiences and using the
              most cutting edge technology available.
            </MotionP>
            <MotionP container={containerRef}>
              ...a <b>Digital Media Artist</b>. I spent the past 15 years as an
              accomplished Video and Lighting operator for Live-Music
              performances and as a technician in the Digital-Art-Gallery space.
              Having done over 1000 shows, I have probably performed along-side
              your favorite artist! (Amon Tobin, Bonobo, Little Dragon, Diplo,
              Kaskade, Snoop Dawg, Parlament Funk and more...)
            </MotionP>
            <MotionP container={containerRef}>
              ...a <b>Student</b>. I am currently earning an additional
              Bachelor's of Engineering degree in Computer Science from Oregon
              State University ((Go Beavers!)) This is in addition to my
              Bachelor in Music from the San Francisco Conservatory of Music,
              and my Master in Music Technology from Berklee College of Music. I
              love to learn new things!
            </MotionP>
            <MotionP>
              <b>NOT like the other candidates...</b> I am unmatched in my
              abilities to troubleshoot complex technological issues and bring
              together nearly impossible visions. My unique background as a
              <b> Classical Musician</b> gives me extreme discipline, my
              background as a <b> Digital Artist</b> allows me to problem solve
              creativly, my experiences as an <b>Event technician</b> gives me a
              cool head under pressure. Now that I am upgrading my career path
              to developer, I am an extremely valuable person to have on your
              team.
            </MotionP>
          </div>
          <div className={`${isMobile ? "h-screen" : "col-span-1"}  p-2`}>
            {!isMobile ? (
              <>
                <MotionH1>Skill Stacks</MotionH1>
                <IconBox1
                  className={"hover:bg-black"}
                  title={"FRONT-END"}
                  data={FrontEndIcons}
                />
                <IconBox1
                  className={"hover:bg-black"}
                  title={"BACK-END"}
                  data={BackEndIcons}
                />
                <IconBox1
                  className={"hover:bg-black"}
                  title={"OTHER TECH"}
                  data={OtherTechIcons}
                />
                <IconBox1
                  className={"hover:bg-black"}
                  data={OtherOtherIcons}
                  title={""}
                />
              </>
            ) : (
              <IconBox1
                className={"h-[80vh] "}
                title={"Skills"}
                data={MobileSkillIcons}
              />
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

const ProjectsSection = () => {
  const [projModalContent, setProjModalContent] = useState(ProjectsData[0]);
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
    <>
      <Section className="justify-start">
        <div className="flex backdrop-blur-3xl w-screen border-y">
          <h1 className="text-4xl p-5">Programming Projects</h1>
        </div>
        <div className="border border-t-0 w-[100%] h-[97%] max-w-[1500px]">
          <div
            className={`size-[100%] m-[1%] h-full ${
              isMobile ? "" : "grid grid-cols-4 grid-rows-2"
            } `}
          >
            <div
              ref={containerRef}
              className={` m-1 ${
                isMobile
                  ? "size-full"
                  : "size-[95%] col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 "
              }`}
            >
              {ProjectsData.map((data, key) => (
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
            {isMobile ? (
              !projModalVisible ? (
                <></>
              ) : (
                <div className="fixed top-[5%] left-0 backdrop-blur-3xl h-full ">
                  <div className="z-50 rounded-xl size-[98%] backdrop-blur-3xl ">
                    <button
                      className="m-5 border-white"
                      onClick={() => {
                        setProjModalVisible(false);
                      }}
                    >
                      <FaWindowClose />
                    </button>
                    <div className="mt-5">{projModalContent.element}</div>
                    <div>
                      <p
                        className={`backdrop-blur-3xl text-white hover:bg-black transition rounded-xl duration-500 border p-5 `}
                      >
                        {projModalContent.description}
                      </p>
                      <h1 className="p-5 text-xl">
                        Role: {projModalContent.role}
                      </h1>
                    </div>
                    <IconBox1
                      data={projModalContent.icons}
                      title="Tech Stack"
                      className="row-span-1 h-[20%]"
                      classIcons="mt-[6rem]"
                    />
                  </div>
                </div>
              )
            ) : (
              <div className="col-span-2 row-span-2 grid grid-rows-7 border-2 rounded-xl w-[90%] h-[95%] backdrop-blur-3xl">
                <div className="row-span-4 max-w-xl">
                  {projModalContent.element}
                </div>
                <IconBox1
                  data={projModalContent.icons}
                  title="Stack"
                  className="row-span-1 h-[80%]"
                />
                <div>
                  <h1 className="text-xl font-semibold px-5 py-2">
                    <b>Role:</b> {projModalContent.role}
                  </h1>
                  <p
                    className={`backdrop-blur-3xl text-white hover:bg-black transition rounded-xl duration-500 border p-5 m-3 mt-0`}
                  >
                    {projModalContent.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

const ArtSection = () => {
  const containerRef = useRef();
  const [artModalContent, setArtModalContent] = useState(ArtTechData[0]);
  const [artTechModalVisible, setArtTechModalVisible] = useState(false);

  useEffect(() => {
    if (artTechModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow if the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [artTechModalVisible]);

  return (
    <>
      <Section className="justify-start">
        <div className="flex backdrop-blur-3xl w-screen border-y">
          <h1 className="text-4xl p-5">&#40;ART&#41; =&gt; &#123;TECH&#125;</h1>
        </div>
        <div
          ref={containerRef}
          className="border border-t-0 w-[100%] h-[97%] max-w-[1500px]"
        >
          <div
            className={`size-[100%] m-[1%] h-full ${
              isMobile ? "" : "grid grid-cols-4 grid-rows-2"
            } `}
          >
            <div
              className={` m-1 ${
                isMobile
                  ? "size-full"
                  : "size-[95%] col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 "
              }`}
            >
              {ArtTechData.map((data, key) => (
                <Card1
                  key={key}
                  data={data}
                  containerRef={containerRef}
                  setModalContent={setArtModalContent}
                  setModalVisible={setArtTechModalVisible}
                  className={`col-span-1 row-span-1 w-[100%] h-[100%]`}
                />
              ))}
            </div>
            {isMobile ? (
              !artTechModalVisible ? (
                <></>
              ) : (
                <div className="fixed top-[5%] z-50 left-0 backdrop-blur-3xl h-full">
                  <div className="rounded-xl size-[98%] backdrop-blur-3xl">
                    <button
                      className="m-5 border-white"
                      onClick={() => {
                        setArtTechModalVisible(false);
                      }}
                    >
                      <FaWindowClose />
                    </button>
                    <div className="mt-5">{artModalContent.element}</div>
                    <div>
                      <p
                        className={`backdrop-blur-3xl text-white hover:bg-black transition rounded-xl duration-500 border p-5 `}
                      >
                        {artModalContent.description}
                      </p>
                      <h1 className="p-5 text-xl">
                        <b>Role: </b> {artModalContent.role}
                      </h1>
                    </div>
                    <IconBox1
                      data={artModalContent.icons}
                      title="Skills"
                      className="row-span-1 h-[20%]"
                      classIcons="mt-[6rem]"
                    />
                  </div>
                </div>
              )
            ) : (
              <div className="col-span-2 row-span-2 grid grid-rows-7 border-2 rounded-xl w-[90%] h-[95%] backdrop-blur-3xl">
                <div className="row-span-4 max-w-xl">
                  {artModalContent.element}
                </div>
                <IconBox1
                  data={artModalContent.icons}
                  title="Stack"
                  className="row-span-1 h-[80%]"
                />
                <div>
                  <h1 className="text-xl font-semibold px-5 py-2">
                    <b>Role:</b> {artModalContent.role}
                  </h1>
                  <p
                    className={`backdrop-blur-3xl text-white hover:bg-black transition rounded-xl duration-500 border p-5 m-3 mt-0`}
                  >
                    {artModalContent.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

// <div className="col-span-2 row-span-2 grid grid-rows-7 border-2 rounded-xl w-[90%] h-[95%] backdrop-blur-3xl">
// <div className="row-span-4 max-w-xl">
//   {projModalContent.element}
// </div>
// <IconBox1
//   data={projModalContent.icons}
//   title="Stack"
//   className="row-span-1 h-[80%]"
// />
