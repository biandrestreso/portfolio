import { motion } from "framer-motion";

const timelineItem = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: any) => {
    const delay = i * 0.3;
    return {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
      },
    };
  },
};

const timelineItems = [
  {
    title: "CompRSA",
    role: "Full Stack Developer",
    description:
      "I'm currently working on the development of new web applications for the company, and I'm also responsible for the maintenance and development of the company's existing web applications.",
    technologies: [
      "C#",
      ".NET",
      "ASP.NET MVC",
      "SQL",
      "Angular",
      "React",
      "Next.js",
      "Xamarin",
      "WordPress",
      "Python",
      "VBA",
    ],
    date: "2022 - Present",
  },
  {
    title: "Nelson Mandela University",
    role: "Diploma Software Development",
    description:
      "I completed my Diploma in Information Technology (Software Development) at Nelson Mandela University in 2022, graduating Cum Laude.",
    technologies: ["C#", ".NET", "ASP.NET MVC", "SQL", "Python"],
    date: "2020 - 2022",
  },
  {
    title: "D.F. Malherbe",
    role: "High School",
    description: "I completed my high school career at D.F. Malherbe in 2018.",
    technologies: ["HTML", "CSS", "Javascript"],
    date: "2014 - 2018",
  },
];

export default function Timeline() {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 lg:gap-16"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:mx-auto lg:w-full lg:px-0 lg:py-2 lg:hidden block">
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
          My Experience
        </h2>
      </div>
      {timelineItems.map((item, index) => (
        <motion.li key={index} variants={timelineItem} custom={index - 0.6}>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {item.date}
            </header>
            <div className="z-10 sm:col-span-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-md">
              <h3 className="text-lg font-semibold text-slate-200">
                {item.title} - {item.role}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{item.description}</p>
              <ul
                className="mt-2 text-sm flex flex-wrap gap-1 text-slate-300"
                aria-label="Technologies used"
              >
                {item.technologies.map((technology, i) => (
                  <li key={i}>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-700/50 text-cyan-300">
                      {technology}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
