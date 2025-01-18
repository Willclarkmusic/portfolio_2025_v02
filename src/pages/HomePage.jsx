import React, { useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import {
  ArtTechData,
  ProjectsData,
  FrontEndIcons,
  BackEndIcons,
  OtherTechIcons,
  OtherOtherIcons,
  MobileSkillIcons,
} from "../components/Content";
import {
  IconBox1,
  ProjectDisplay,
  MotionP,
  MotionH1,
  TitleBar,
  Accordian1,
  SocialIcons,
} from "../components/ElementTemps";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLocationDot, FaCircleDot } from "react-icons/fa6";

import Menu from "../components/Menu.jsx";
import { MobileParams } from "../components/ScrollManager";

const { isTablet, isMobile } = MobileParams();

// const [isMobile, setIsMobile] = useState(MobileParams.isMobile);

function HomePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const artRef = useRef(null);
  const refArray = [homeRef, aboutRef, projectsRef, artRef];

  return (
    <div
      id="scrollSnapContainer"
      className="flex flex-col items-center overflow-hidden bg-zinc-900 bg-opacity-90 "
    >
      <Menu refArray={refArray} />

      <div ref={homeRef}>
        <HomeSection />
      </div>
      <div ref={aboutRef} className="mt-10">
        <AboutSection />
      </div>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={artRef}>
        <ArtSection />
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;

const Section = (props) => {
  const { children, className } = props;
  return (
    <div className={`min-h-screen shrink-0 min-w-screen`}>
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
  return (
    <div>
      <Section className="">
        <div className="absolute top-40 left-10 md:top-[35%] md:left-[20%]">
          <h1 className="backdrop-blur-xl text-6xl font-extrabold leading-snug">
            Hi, I'm
            <br />
          </h1>
          <h1 className="bg-white text-6xl md:text-6xl font-extrabold py-5 lg:text-7xl text-black accent-black italic">
            Will Clark
          </h1>
          <motion.div drag>
            <motion.p
              drag
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
              Welcome to my Software Developer Portfolio
            </motion.p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef();

  return (
    <div className="z-10">
      <Section className="">
        <TitleBar title="About Me">
          <span className="flex justify-center items-center p-2">
            <FaLocationDot /> <h2>San Francisco, CA</h2>
          </span>
        </TitleBar>
        <div
          ref={containerRef}
          className={`w-[100%] min-h-[80%] bg-gray-600 bg-opacity-25 rounded-b-xl max-w-[1200px] bg-stone- z-10 lg:grid lg:grid-cols-2`}
        >
          <div ref={containerRef} className="w-full lg:col-span-1  p-4">
            <MotionH1 container={containerRef}>I am...</MotionH1>

            <Accordian1
              title={"...a Full-Stack Software Developer"}
              open={true}
            >
              with a specialty in signal processing and data science. I am
              rapidly advancing my skills with multi-tiered web applications and
              am hungry for more oportunities to flex these skills.
            </Accordian1>

            <Accordian1 title={"...a Digital Media Artist"}>
              I spent the past 15 years as an accomplished Video and Lighting
              designer for Live-Music performances and as a technician in the
              Digital-Art-Gallery space. Having done over 1000 shows, I have
              probably performed along-side your favorite artist!
            </Accordian1>

            {/* <Accordian1 title={"...interested in"}>
              dev ops, machine learning and networking infrastructure. I am
              always excited about new technologies and learning constantly.
            </Accordian1> */}

            {/* <Accordian1 title={"...a Student"}>
              Currently earning an additional Bachelor's of Engineering degree
              in Computer Science from Oregon State University ((Go Beavers!))
              This is in addition to my Bachelor in Music from the San Francisco
              Conservatory of Music, and my Master in Music Technology from
              Berklee College of Music. I love to learn new things!
            </Accordian1> */}

            {/* <Accordian1 title={"NOT like the other candidates..."}>
              I am unmatched in my abilities to troubleshoot complex
              technological issues and bring together nearly impossible visions.
              My unique background as a<b> Classical Musician</b> gives me
              extreme discipline, my background as a <b> Digital Artist</b>{" "}
              allows me to problem solve creativly, my experiences as an{" "}
              <b>Event technician</b> gives me a cool head under pressure. Now
              that I am upgrading my career path to developer, I am an extremely
              valuable person to have on your team.
            </Accordian1> */}
          </div>
          <div className={`hidden lg:block col-span-1 p-2 w-[100%]`}>
            <MotionH1 container={containerRef}>Skills</MotionH1>
            <div className="grid grid-rows-4 grid-flow-col mb-5">
              <IconBox1
                className={"row-span-1 hover:bg-black lg:h-[90%]"}
                classIcons={""}
                title={"FRONT-END"}
                data={FrontEndIcons}
                drag={false}
              />
              <IconBox1
                className={"row-span-1 hover:bg-black lg:h-[90%]"}
                title={"BACK-END"}
                data={BackEndIcons}
                drag={false}
              />
              <IconBox1
                className={" row-span-1 hover:bg-black lg:h-[90%]"}
                title={"OTHER TECH"}
                data={OtherTechIcons}
                drag={false}
              />
              <IconBox1
                className={"row-span-1 hover:bg-black h-full"}
                title={""}
                data={OtherOtherIcons}
                drag={false}
              />
            </div>
          </div>
          <div className="block lg:hidden mb-20">
            <IconBox1
              className={"h-[40vh] w-full gap-y-10 "}
              classIcons="pt-24"
              title={"Skills"}
              data={MobileSkillIcons}
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
        <TitleBar title="Programming Projects">
          <span className="flex justify-center items-center p-2 ">
            <FaCircleDot className="text-green-500 text-xl" />{" "}
            <h2>Open to work</h2>
          </span>
        </TitleBar>
        <ProjectDisplay contentData={ProjectsData} />
      </Section>
    </>
  );
};

const ArtSection = () => {
  return (
    <>
      <Section className="justify-start">
        <TitleBar title="&#40;ART&#41; =&gt; &#123;TECH&#125;" />
        <ProjectDisplay contentData={ArtTechData} />
      </Section>
    </>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-row px-5 md:justify-center items-end bg-zinc-900 border-t-2 w-screen h-[11em] z-10">
      <SocialIcons className="" />
      <span className="absolute justify-center items-end mb-8 ">
        <h2 className="inline font-extralight">
          WIll Clark Web Design | 2025{" "}
        </h2>
        <AiOutlineCopyright className="inline justify-center items-center text-xl" />
      </span>
    </div>
  );
};
