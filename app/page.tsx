/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import AnimatedTextLetter from "./components/animated-text-letter";

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const item = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
      },
    };
  },
};

export default function Home() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="group/spotlight relative" onMouseMove={handleMouseMove}>
      <motion.div style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }} className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></motion.div>
      <div className="mx-auto min-h-screen max-w-screen-xl flex justify-between flex-col">
        <div className="lg:flex lg:justify-between lg:gap-4 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Biandré Streso
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer at CompRSA - {getFlagEmoji("za")}
              </h2>
              <p className="mt-4 max-w-sm leading-normal">
                I'm a software engineer based in South Africa. I enjoy building
                things that live on the internet, whether that be websites,
                applications, or anything in between. My goal is to always build
                products that provide pixel-perfect, performant experiences.
              </p>
            </div>
          </header>
          <main className="pt-12 lg:pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-12 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:mx-auto lg:w-full lg:px-0 lg:py-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4 max-w-sm leading-normal">
                  It all started in Primary School for me when I started
                  experimenting with game mods and custom maps. I loved the idea
                  of being able to create something from nothing.
                </p>
                <p className="mb-4 max-w-sm leading-normal">
                  Although High school was the true starting point of my coding
                  journey. It was during this time that I delved into the realms
                  of HTML, CSS, JavaScript, and Lua. As I geared up for
                  university, I eagerly embraced the challenges of learning C#.
                  I was also fascinated by the idea of being able to create
                  something that could be used by anyone in the world.
                </p>
              </div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-12 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:mx-auto lg:w-full lg:px-0 lg:py-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
                  <AnimatedTextLetter text="Experience" />
                </h2>
              </div>
              <div>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-8 lg:gap-16"
                >
                  <motion.li variants={item} custom={1}>
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2022 - Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="text-lg font-semibold text-slate-200">
                          CompRSA - Software Engineer
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          I'm currently working on the development of new web
                          applications for the company, and I'm also responsible
                          for the maintenance and development of the company's
                          existing web applications.
                        </p>
                        <ul
                          className="mt-2 text-sm flex flex-wrap gap-1 text-slate-300"
                          aria-label="Technologies used"
                        >
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              C#
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              .NET
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              ASP.NET MVC
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              SQL
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              Angular
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              React
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              Xamarin
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              WordPress
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              Python
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              VBA
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.li>
                  <motion.li variants={item} custom={2}>
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2020 - 2022
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="text-lg font-semibold text-slate-200">
                          Nelson Mandela University - Diploma Software Dev
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          I completed my Diploma in Information Technology
                          (Software Development) at Nelson Mandela University in
                          2022, graduating Cum Laude.
                        </p>
                        <ul
                          className="mt-2 text-sm flex flex-wrap gap-1 text-slate-300"
                          aria-label="Technologies used"
                        >
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              C#
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              .NET
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              ASP.NET MVC
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              SQL
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              Python
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.li>
                  <motion.li variants={item} custom={3}>
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2014 - 2018
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="text-lg font-semibold text-slate-200">
                          D.F. Malherbe High School
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          I completed my high school career at D.F. Malherbe in
                          2018.
                        </p>
                        <ul
                          className="mt-2 text-sm flex flex-wrap gap-1 text-slate-300"
                          aria-label="Technologies used"
                        >
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              HTML
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              CSS
                            </div>
                          </li>
                          <li>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50">
                              Javascript
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </section>
          </main>
        </div>
        <footer className="flex flex-col gap-4 items-center justify-center w-full h-24">
          <ul className="flex items-center gap-6">
            <li className="text-xs">
              <a
                href="https://github.com/biandrestreso"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-100"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className=" h-6 w-6"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </li>
            <li className="text-xs">
              <a
                href="https://www.linkedin.com/in/biandr%C3%A9-streso-0b8435259/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-100"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 248 204"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    id="white_background"
                    d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="text-sm text-center text-slate-200">
            <p>Made by Biandré Streso</p>
            <p>twentytwentythree</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
