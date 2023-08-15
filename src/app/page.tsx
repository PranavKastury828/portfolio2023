"use client";
import "./globals.css";
import React from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import heroImage from "../../public/avatar.jpg";
import navImage from "../../public/wave.png";
import htmlImage from "../../public/html.png";
import cssImage from "../../public/css.png";
import jsImage from "../../public/js.png";
import reactImage from "../../public/react.png";
import webflowImage from "../../public/webflow.png";
import tailwindcssImage from "../../public/tailwindcss.png";
import bootstrapImage from "../../public/bootstrap.png";
import nextJSImage from "../../public/nextJS.png";
import sanityImg from "../../public/sanity.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import MutualMobile from "../../public/MutualMobile.png";
import Adunit from "../../public/adunit.png";
import zuddl from "../../public/zuddl.png";
import consulting from "../../public/consulting.png";
import { useState } from "react";
import ButtonHeader from "./ButtonHeader";
import favIcon from "../../public/favicon.ico";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [content, setContent] = useState("Initial content");
  const [text, count] = useTypewriter({
    words: ["Developer", "Gamer", "Coffee Drinker"],
    loop: true,
    delaySpeed: 2000,
  });
  const handleButtonClick = () => {
    setContent("New content on button click");
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-[#420fe7]/95 px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-slate-200">
              <Image
                className="hover:animate-spin"
                src={navImage}
                width={128}
                alt="Pranav Kastury portfolio"
              />
            </h1>
            {/* <div className='absolute border border-[#333] rounded-full w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] mt-52 animate-ping'/> */}
            {/* <div className='absolute border border-[#ffb800] rounded-full w-[150px] h-[150px] lg:h-[300px] lg:w-[300px] mt-52 animate-pulse'/> */}
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-slate-200"
                />
              </li>
              <ButtonHeader onClick={handleButtonClick} label="Click Me" />
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1shV_qe-bI5UiPEc2ge6R4MVmCNfk0-6z/view?usp=sharing"
                  target="_blank"
                >
                  {content}
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-slate-200 font-medium">
              Pranav Kastury
            </h2>
            <span className="text-2xl py-2 text-slate-400 min-h-[24px]">
              {" "}
              <span className="text-2xl py-2 text-slate-400">{text}</span>
            </span>
            <Cursor cursorColor="#f7ab0a" />

            <div className="space-y-2 px-0  lg:mt-[20px] md:mt-[20px]">
              <h4 className="text-4xl font-semibold text-slate-200">
                Here&#39;s a{" "}
                <span className="text-xl text-[#f7ab0a] relative underline decoration-[#0099cc]">
                  little
                </span>{" "}
                background
              </h4>
              <p className="md:text-2xl text-lg py-5 leading-8 text-slate-400 max-w-[700px] mx-auto">
                👋 Hi, I’m Pranav Kastury<br></br>
                <br></br>
                👀 I am a self-taught frontend developer with 3 years of
                experience in designing and building websites and web
                applications.<br></br>
                <br></br> 🌱I am passionate about creating visually appealing
                and user-friendly interfaces.<br></br>
                <br></br> 💪🏽With strong problem-solving skills and attention to
                detail, I deliver high-quality work. <br></br>
                <br></br>And yes, coffee is my fuel! ☕<br></br>
                <br></br>
                📫 You can reach me at{" "}
                <a
                  className="underline hover:line-through"
                  href="mailto:pranavkastury828@gmail.com"
                >
                  pranavkastury828@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a target="_blank" href="https://twitter.com/PranavKastury">
              <AiFillTwitterCircle color="white" className="icon-style" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/pranavkastury">
              <AiFillLinkedin className="icon-style" color="white" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@Grimmr57">
              <AiFillYoutube className="icon-style" color="white" />
            </a>
            <a target="_blank" href="https://github.com/PranavKastury828">
              <AiFillGithub className="icon-style" color="white" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image
              src={heroImage}
              alt="Pranav Kastury"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Second Section */}
        <section className="mx-auto max-w-[1440px] md:my-[6rem] my-[2rem]">
          <div>
            <h3 className="text-3xl py-1 font-bold text-center text-slate-200 md:mb-[2rem] mb-4 lg:mb-[4rem]">
              Skills & Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-[2rem] justify-center items-center mx-auto w-[60%]">
              <div className="flex flex-col justify-center align-center">
                <Image
                  className="self-center hover:animate-pulse cursor-pointer"
                  src={htmlImage}
                  height={100}
                  alt="HTML"
                />
              </div>
              <div className="flex flex-col justify-center align-center">
                <Image
                  className="self-center hover:animate-pulse cursor-pointer"
                  src={cssImage}
                  height={100}
                  alt="CSS"
                />
              </div>
              <div className="flex flex-col justify-center align-center">
                <Image
                  className="self-center hover:animate-pulse cursor-pointer"
                  src={jsImage}
                  height={100}
                  alt="Javascript"
                />
              </div>

              <div className="flex flex-col justify-center align-center">
                <Image
                  className="self-center hover:animate-pulse  cursor-pointer"
                  src={nextJSImage}
                  height={100}
                  alt="Next JS"
                />
              </div>

              <div className="flex flex-col justify-center align-center">
                <Image
                  className="self-center hover:animate-pulse  cursor-pointer"
                  src={reactImage}
                  height={100}
                  alt="React JS"
                />
              </div>
              <div className="flex flex-col justify-center align-center">
                <Image
                  className="self-center hover:animate-pulse  cursor-pointer"
                  src={webflowImage}
                  height={100}
                  alt="webflow"
                />
              </div>

              <div className="flex flex-col justify-center align-center">
                <Image
                  className="self-center hover:animate-pulse  cursor-pointer rounded-full"
                  src={sanityImg}
                  height={100}
                  alt="Bootstrap CSS"
                />
              </div>
              <div className="flex flex-col justify-center align-center">
                <Image
                  className="self-center hover:animate-pulse  cursor-pointer"
                  src={tailwindcssImage}
                  height={100}
                  alt="Tailwind CSS"
                />
              </div>
            </div>
            <div className="lg:grid block lg:grid-cols-2 justify-between align-center my-[24px] md:mt-[80px] md:mb-[40px] gap-x-[24px]">
              <div className="p-5 rounded hover:shadow-2xl">
                <h4 className="text-[2rem] text-left my-4 lg:min-h-[120px] text-slate-200">
                  Frontend Web Developer
                </h4>
                <p className="text-2xl py-2 leading-8 text-slate-400 lg:min-h-[360px]">
                  I am a self-taught frontend developer with 3 years of
                  experience in designing and building websites and web
                  applications. I am passionate about creating visually
                  appealing and user-friendly interfaces. With strong
                  problem-solving skills and attention to detail, I deliver
                  high-quality work. And yes, coffee is my fuel! ☕
                </p>
                <div className="flex flex-row justify-center align-center">
                  <Image className="" src={code} alt="frontend web developer" />
                </div>
              </div>

              <div className="p-5 rounded hover:shadow-2xl">
                <h4 className="text-[2rem] text-left my-4 lg:min-h-[120px] text-slate-200">
                  MarTech Web Developer
                </h4>
                <p className="text-2xl py-2 leading-8 text-slate-400 lg:min-h-[360px]">
                  As a Martech developer with 2 years of experience, I
                  specialized in leveraging Webflow, Google Analytics, Airtable,
                  Zapier, and other software to optimize marketing websites and
                  drive lead generation. My role involved developing a diverse
                  skill set that includes content writing, technical SEO, and
                  UI/UX design. With a deep understanding of marketing
                  strategies and proficiency in various Martech tools, I
                  excelled in creating seamless user experiences and maximizing
                  website performance. I am driven by a passion for merging
                  technology and marketing to achieve impactful results. 📈
                </p>
                <div className="flex flex-row justify-center align-center">
                  <Image
                    className=""
                    src={design}
                    alt="frontend web developer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </section>
        <section className="mx-auto max-w-[1440px] md:py-[6rem] py-[2rem]">
          <h3 className="font-bold text-slate-200 text-3xl py-1 text-center md:mb-[2rem] mb-4 lg:mb-[4rem]">
            Experience
          </h3>
          <div className=" mx-auto flex flex-col gap-y-[2rem]">
            <div className="shadow-lg p-10 rounded-xl md:flex md:flex-row md:justify-between md:items-center bg-slate-200">
              <div className="min-w-[25%]">
                <Image
                  className="md:max-w-[320px] h-auto"
                  src={MutualMobile}
                  alt="Mutual Mobile"
                />
                <h4 className="my-[1rem] text-2xl text-slate-600">
                  Frontend Developer
                </h4>
                <h5 className="mt-[1rem] text-base text-gray-500">
                  06/2021 &#8212; 04/2023
                </h5>
              </div>
              <div>
                <p className="text-2xl text-gray-700 leading-8 antialiased">
                  Developed front-end user interfaces for several complex web
                  applications with HTML, CSS, and JavaScript and Webflow.
                  <br></br>
                  <br></br>
                  Utilized React frameworks to create interactive, responsive,
                  and user-friendly web designs.<br></br>
                  <br></br>
                  Collaborated with web designers and back-end developers to
                  ensure web applications met customer requirements.
                </p>
              </div>
            </div>

            <div className="shadow-lg p-10 rounded-xl md:flex md:flex-row md:justify-between md:items-center bg-slate-200">
              <div className="min-w-[25%]">
                <Image
                  className="md:max-w-[320px] h-auto"
                  src={zuddl}
                  alt="Zuddl"
                />
                <h4 className="my-[1rem] text-2xl text-slate-600">
                  Martech Developer
                </h4>
                <h5 className="mt-[1rem] text-base text-gray-500">
                  05/2022 &#8212; 11/2022
                </h5>
              </div>
              <div>
                <p className="text-2xl text-gray-700 leading-8 antialiased">
                  Created, Updated, and Maintained any and all websites related
                  to the company using Webflow, Prefinery, Zapier, and more.{" "}
                  <br></br>
                  <br></br>
                  Ensured high Website Performance, strong Technical SEO, and
                  more using the latest practices.<br></br>
                  <br></br>
                  Performed A/B Testing with landing pages, integrate and
                  optimize third-party applications usage.
                </p>
              </div>
            </div>

            <div className="shadow-lg p-10 rounded-xl md:flex md:flex-row md:justify-between md:items-center bg-slate-200">
              <div className="min-w-[25%]">
                <Image
                  className="md:max-w-[320px] h-auto"
                  src={Adunit}
                  alt="Adunit"
                />
                <h4 className="my-[1rem] text-2xl text-slate-600">
                  Frontend Developer
                </h4>
                <h5 className="mt-[1rem] text-base text-gray-500">
                  05/2022 &#8212; 11/2022
                </h5>
              </div>
              <div>
                <p className="text-2xl text-gray-700 leading-8 antialiased">
                  Created and deployed scalable websites using the latest tech
                  stack and/or CMS. <br></br>
                  <br></br>
                  Created and authenticated databases using MySQL.<br></br>
                  <br></br>
                  Updated Websites and Webapps&#39; SEO, blogs, fixed bugs and
                  performed general maintenance
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[1440px] md:py-[6rem] py-[2rem]">
          <h3 className="font-bold text-slate-200 text-3xl py-1 text-center md:mb-[2rem] mb-4 lg:mb-[4rem]">
            Contact
          </h3>
          <div className=" mx-auto flex flex-col md:flex-row gap-y-[2rem] md:gap-x-[2rem] items-center justify-center">
            <a
              href="mailto:pranavkastury828@gmail.com"
              className="p-10  shadow transition-all duration-300 hover:shadow-2xl rounded-full bg-slate-100"
            >
              <AiOutlineMail className="icon-style" size={32} />
            </a>
            <a
              href="tel:+918121332200"
              className="p-10  shadow transition-all duration-300 hover:shadow-2xl rounded-full bg-slate-100"
            >
              <AiOutlinePhone className="icon-style" size={32} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
