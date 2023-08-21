/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { TypeAnimation } from "react-type-animation";
import Timeline from "./components/home/timeline";
import About from "./components/home/about";
import Languages from "./components/home/languages";
import Github from "./components/shared/icons/github";
import LinkedIn from "./components/shared/icons/linkedIn";
import Twitter from "./components/shared/icons/twitter";
import Footer from "./components/shared/footer";
import Projects from "./components/home/projects";

export default function Home() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="group/spotlight relative" onMouseMove={handleMouseMove}>
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              550px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 50%
            )
          `,
        }}
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute md:block hidden"
      ></motion.div>
      <div className="mx-auto min-h-screen max-w-screen-xl flex justify-between flex-col">
        <div className="lg:flex lg:justify-between lg:gap-4 px-6 pt-12 md:px-12 md:pt-20 lg:px-24 lg:pt-0">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
            <div>
              <div className="group relative cursor-pointer">
                <div className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl flex items-center relative">
                  {"Biandré Streso".split("").map((letter, index) => (
                    <h1
                      key={index}
                      className="origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
                      style={{ transitionDelay: `${index * 75}ms` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </h1>
                  ))}
                  <div className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl flex items-center absolute bottom-0">
                    {"Biandré Streso".split("").map((letter, index) => (
                      <h1
                        key={index}
                        className="origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
                        style={{ transitionDelay: `${index * 75}ms` }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="mt-3 h-8 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                <TypeAnimation
                  sequence={[
                    "Front End Developer",
                    200,
                    "Back End Developer",
                    200,
                    "Full Stack Developer at CompRSA",
                  ]}
                  speed={50}
                  deletionSpeed={75}
                />
              </h2>
              <p className="mt-4 max-w-sm leading-normal text-justify">
                I'm a software dev based in South Africa. I enjoy building
                things that live on the internet, whether that be websites,
                applications, or anything in between. My goal is to always build
                products that provide pixel-perfect, performance experiences.
              </p>
            </div>
            <ul className="flex items-center gap-6 ml-1 mt-12">
              <li className="text-xs">
                <a
                  href="https://github.com/biandrestreso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li className="text-xs">
                <a
                  href="https://www.linkedin.com/in/biandrestreso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100"
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkedIn className="h-6 w-6" />
                </a>
              </li>
              <li className="text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://twitter.com/biandrestreso"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>
          <main className="pt-12 lg:pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-12 lg:scroll-mt-24 "
            >
              <About />
            </section>
            <section
              id="languages"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-12 lg:scroll-mt-24 "
            >
              <Languages />
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-12 lg:scroll-mt-24"
            >
              <Timeline />
            </section>
          </main>
        </div>
        {/* <div className="lg:gap-4 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <Projects />
        </div> */}
        <Footer />
      </div>
    </div>
  );
}
