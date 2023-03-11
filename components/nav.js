import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import Record from "../data.json";
import { useState } from "react";

export default function Nav(li) {
  const [clickedProj, setClickedProj] = useState();

  const onClcik = (e) => {
    // console.log(e.target.textContent);
    // 이 값을 넘겨서 화면을 보여주게 하기
    // console.log(e.target.id);
    // 이 값을 넘겨서 화면을 보여주게 하기
    let setClickedProj = e.target.id;
    return setClickedProj;
  };

  const works = Record.map((project) => {
    return project;
  });

  return (
    <>
      <div className="p-6 md:pr-10 w-full sm:w-2/5  sm:fixed sm:top-0 sm:h-screen md:w-2/5 lg:w-1/5">
        <Link href="/">
          <h1>Git Log ─ Portfolio</h1>
        </Link>
        <p className="pt-6 pb-8">
          hello, i am doing my work something like blah blah blah thats when did
          you eat? are you gonna go out to running?
        </p>
        <ul className="pb-6">
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
        </ul>

        <a
          href="https://github.com/yunjoa/"
          target="_blank"
          className="pb-2 block"
        >
          git
        </a>
        <DarkModeToggleButton />
      </div>
    </>
  );
}
