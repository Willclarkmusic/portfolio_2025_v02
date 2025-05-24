import React, { useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import {
  moreGamesData,
  GamesData,
  ProjectsData,
  FrontEndIcons,
  BackEndIcons,
  OtherTechIcons,
  OtherOtherIcons,
  MobileSkillIcons,
  EventsData,
  moreProjectsData,
  WorkExperiences,
} from "../components/Content";
import {
  IconBox1,
  ProjectDisplay2,
  MotionH1,
  TitleBar,
  Accordian1,
  Accordian2,
  SocialIcons,
} from "../components/ElementTemps";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLocationDot, FaCircleDot } from "react-icons/fa6";

import Menu from "../components/Menu.jsx";

function HomePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const gamesRef = useRef(null);
  const eventsRef = useRef(null);
  const refArray = [homeRef, aboutRef, projectsRef, gamesRef, eventsRef];

  return (
    <div
      id="scrollSnapContainer"
      className="flex flex-col items-center overflow-hidden bg-zinc-800 bg-opacity-90 "
    >
      <Menu refArray={refArray} />

      <div ref={homeRef}>
        <HomeSection />
      </div>
      <div ref={aboutRef} className="">
        <AboutSection />
      </div>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={gamesRef}>
        <RTGameSection />
      </div>
      <div ref={eventsRef}>
        <EventSection />
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;

const Section = (props) => {
  const { children, className } = props;
  return (
    <div className={`mb-[10em] min-w-screen`}>
      <motion.section
        className={twMerge(
          `px-[2%] flex flex-col justify-center items-center z-10 h-[100%] w-[100%] lg:h-[90%] lg:w-full`,
          className
        )}
      >
        {children}
      </motion.section>
    </div>
  );
};

const HomeSection = () => {
  const container = useRef();
  return (
    <div className="w-screen h-screen">
      <Section className="">
        <div
          className="absolute top-40 left-10 md:top-[35%] md:left-[20%]"
          ref={container}
        >
          <motion.h1
            drag
            dragConstraints={container}
            className="backdrop-blur-xl text-6xl font-extrabold leading-snug"
          >
            Hi, I'm
            <br />
          </motion.h1>
          <motion.h1
            drag
            dragConstraints={container}
            className="bg-white text-6xl md:text-6xl font-extrabold py-5 lg:text-7xl text-black accent-black italic"
          >
            Will Clark
          </motion.h1>
          <motion.div drag>
            <motion.p
              drag
              dragConstraints={container}
              className="backdrop-blur-xl text-md lg:text-xl text-gray-200 mt-4"
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
              Welcome to my Software Engineering Portfolio
            </motion.p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef();
  const aboutContainer = useRef();
  const skillsContainer = useRef();
  const workContainer = useRef();

  return (
    <div className="z-10">
      <Section className="pt-6">
        <TitleBar title="About Me" blur={true}>
          <span className="flex justify-center items-center p-2">
            <FaLocationDot /> <h2>San Francisco, CA</h2>
          </span>
        </TitleBar>
        <div
          className={`w-[100%] min-h-[80%] bg-opacity-25 rounded-b-xl max-w-[1200px] z-10 lg:grid lg:grid-cols-2`}
        >
          <div className="w-full col-span-1 py-4">
            <div ref={aboutContainer} className="justify-items-center">
              <MotionH1 container={aboutContainer}>I am...</MotionH1>

              <Accordian1
                title={"...a Full-Stack Software Engineer"}
                open={true}
              >
                with a specialty in signal processing and data science. I am
                rapidly advancing my knowledge with multi-tiered web
                applications and am hungry for more oportunities to flex these
                skills.
              </Accordian1>

              <Accordian1 title={"...a Digital Media Artist"}>
                I spent the past 15 years as an accomplished Video and Lighting
                designer for Live-Music performances and as a technician in the
                Digital-Art-Gallery space. Having done over 1000 shows, I have
                probably performed along-side your favorite artist!
              </Accordian1>

              <Accordian1 title={"...a Video Game Developer"}>
                with strong foundation in Unity, Unreal and many other real-time
                3d engines. I am a frequent participant in game jams as a
                programmer and as a technical sound designer. I love making a
                playing games. Real Time Strategy is my favorite genre. Lets
                play some StarCraft!
              </Accordian1>

              <Accordian1 title={"...Learning About"}>
                dev ops, machine learning and networking infrastructure. I am
                always excited about new technologies and learning constantly.
              </Accordian1>
            </div>
          </div>
          <div
            ref={workContainer}
            className="w-full col-span-1 py-4 justify-items-center"
          >
            <MotionH1 container={workContainer}>Experience</MotionH1>
            <Accordian2 data={WorkExperiences[0]} open={true} />
            <Accordian2 data={WorkExperiences[1]} />
            <Accordian2 data={WorkExperiences[2]} />
            <Accordian2 data={WorkExperiences[3]} />
          </div>
        </div>
        <div className="block lg:hidden mb-10 ml-5">
          <IconBox1
            className={"h-[45vh] w-full gap-y-10 "}
            classIcons="pt-24"
            title={"Skills"}
            data={MobileSkillIcons}
            drag={false}
          />
        </div>

        <div
          ref={skillsContainer}
          className={`justify-items-center lg:block col-span-2 p-2 pt-[2em]  max-w-[900px] hidden`}
        >
          <MotionH1 container={skillsContainer} className={"items-center"}>
            Skills
          </MotionH1>
          <div className="grid grid-rows-2 grid-cols2 grid-flow-col mb-5">
            <IconBox1
              className={"row-span-1 hover:bg-black min-h-[200px]"}
              title={"BACK-END"}
              data={BackEndIcons}
              drag={false}
            />
            <IconBox1
              className={" row-span-1 hover:bg-black"}
              title={"OTHER TECH"}
              data={OtherTechIcons}
              drag={false}
            />
            <IconBox1
              className={"row-span-1 hover:bg-black"}
              classIcons={""}
              title={"FRONT-END"}
              data={FrontEndIcons}
              drag={false}
            />
            <IconBox1
              className={"row-span-1 hover:bg-black"}
              title={""}
              data={OtherOtherIcons}
              drag={false}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <>
      <Section className="justify-start">
        <TitleBar title="Programming Projects"></TitleBar>
        <ProjectDisplay2
          contentData={ProjectsData}
          moreData={moreProjectsData}
        />
      </Section>
    </>
  );
};

const RTGameSection = () => {
  return (
    <>
      <Section className="justify-start">
        <TitleBar title="Real-Time & Game Dev" />
        <ProjectDisplay2 contentData={GamesData} moreData={moreGamesData} />
      </Section>
    </>
  );
};

const EventSection = () => {
  return (
    <>
      <Section className="justify-start">
        <TitleBar title="Event Tech" />
        <ProjectDisplay2 contentData={EventsData} />
      </Section>
    </>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-row px-5 md:justify-center items-end bg-black border-t-2 w-screen h-[11em] z-10">
      <SocialIcons className="" />
      <span className="absolute justify-center items-end mb-8 ">
        <h2 className="inline font-extralight">Will Clark Web Design | 2025</h2>
        <AiOutlineCopyright className="inline justify-start items-start text-xl" />
      </span>
    </div>
  );
};
