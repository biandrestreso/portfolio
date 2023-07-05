const programmingLanguages = [
  "C#",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "Lua",
];

export default function Languages() {
  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:mx-auto lg:w-full lg:px-0 lg:py-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
          <p>Languages I speak</p>
        </h2>
      </div>
      <div>
        <ul className="flex flex-wrap gap-2 justify-center">
          {programmingLanguages.map((language) => (
            <li key={language}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-700/50 text-cyan-300">
                {language}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
