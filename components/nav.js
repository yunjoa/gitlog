import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";

export default function Nav() {
  return (
    <>
      <div className="p-6 md:pr-10 w-full sm:w-2/5  sm:fixed sm:top-0 sm:h-screen md:w-2/5 lg:w-1/5">
        <Link href="/">
          <h1>Git Log ─ Portfolio</h1>
        </Link>
        <p className="pt-6 pb-8">
          hello, I am looking for a job. I used to work in editorial design. I
          like to make new things. Also I like to look around the new website.
          In my free time, I read books or watch LCK.
        </p>
        {/* <ul className="pb-6">
          {works &&
            works.map((project, i) => {
              return (
                <li
                  className="projects hover:underline underline-offset-4 pb-2"
                  key={i}
                  id={project.id}
                  onClick={onClcik}
                >
                  {project.title}
                  <br />
                </li>
              );
            })}
        </ul> */}

        <a
          href="https://github.com/yunjoa/"
          target="_blank"
          className="pb-2 block hover:underline underline-offset-4"
        >
          git
        </a>
        <DarkModeToggleButton />
      </div>
    </>
  );
}
