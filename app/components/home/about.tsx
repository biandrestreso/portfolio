export default function About() {
  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:mx-auto lg:w-full lg:px-0 lg:py-2 lg:hidden block">
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
          About Me
        </h2>
      </div>
      <div>
        <p className="mb-4 max-w-sm leading-normal">
          It all started in Primary School for me when I started experimenting
          with game mods and custom maps. I loved the idea of being able to
          create something from nothing.
        </p>
        <p className="mb-4 max-w-sm leading-normal">
          Although High school was the true starting point of my coding journey.
          It was during this time that I delved into the realms of HTML, CSS,
          JavaScript, and Lua. As I geared up for university, I eagerly embraced
          the challenges of learning C#. I was also fascinated by the idea of
          being able to create something that could be used by anyone in the
          world.
        </p>
      </div>
    </div>
  );
}
