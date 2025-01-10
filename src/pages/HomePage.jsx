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
} from "../components/ElementTemps";
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
      className="flex flex-col items-center overflow-hidden"
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
          <h1 className="backdrop-blur-xl text-6xl font-extrabold leading-snug ">
            Hi, I'm
            <br />
            <span className="bg-white text-6xl md:text-6xl lg:text-7xl text-black accent-black italic">
              Will Clark
            </span>
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
    <div className=" z-10">
      <Section className="">
        <TitleBar title="About Me" />

        <div
          className={`w-[100%] min-h-[80%] max-w-[1200px] bg-black z-10 lg:grid lg:grid-cols-2`}
        >
          <div ref={containerRef} className="w-full lg:col-span-1  p-4">
            <MotionH1 container={containerRef}>I am...</MotionH1>

            <Accordian1
              title={"...a Full-Stack Software Developer"}
              open={true}
            >
              from San Francisco, CA, I love to create satisfying, interactive
              experiences and using the most cutting edge technology available.
            </Accordian1>

            <Accordian1 title={"...a Digital Media Artist"}>
              I spent the past 15 years as an accomplished Video and Lighting
              designer for Live-Music performances and as a technician in the
              Digital-Art-Gallery space. Having done over 1000 shows, I have
              probably performed along-side your favorite artist!
            </Accordian1>

            <Accordian1 title={"...a Student"}>
              Currently earning an additional Bachelor's of Engineering degree
              in Computer Science from Oregon State University ((Go Beavers!))
              This is in addition to my Bachelor in Music from the San Francisco
              Conservatory of Music, and my Master in Music Technology from
              Berklee College of Music. I love to learn new things!
            </Accordian1>

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
            <MotionH1>Skill Stacks</MotionH1>
            <div className="grid grid-rows-4 grid-flow-col">
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
        <TitleBar title="Programming Projects" />
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
    <div className="flex bg-zinc-900 border-t-2 w-screen h-[10em] z-10"></div>
  );
};
