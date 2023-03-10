import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import Record from "../data.json";

export default function Nav(li) {
  function onClcik(e) {
    console.log(e.target.textContent);
    // 이 값을 넘겨서 화면을 보여주게 하기
    console.log(e.target.id);
    // 이 값을 넘겨서 화면을 보여주게 하기
    let li = e.target.id;
    return li;
  }

  const works = Record.map((project) => {
    return project;
  });

  return (
    <>
      <div className="p-6 pr-10 sm:w-full">
        <Link href="/">
          <h1>Git Log ─ Portfolio</h1>
        </Link>
        <p className="pt-6 pb-8">
          hello, i am doing my work something like blah blah blah that's when
          did you eat? are you gonna go out to running?
        </p>
        <ul className="pb-6">
          {works &&
            works.map((project, i) => {
              return (
                <li
                  className="projects hover:underline underline-offset-4 pb-2"
                  key={i}
                  id={project.id}
                >
                  {project.title}
                  <br />
                </li>
              );
            })}
        </ul>

        <a href="https://github.com/yunjoa/" className="pb-2 block">
          git
        </a>
        <DarkModeToggleButton />
      </div>
    </>
  );
}
