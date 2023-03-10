import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Record from "../data.json";
import Image from "next/image";

const works = Record.map((project) => {
  return project;
});

export default function Gallery() {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewProject = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: works[i], i: i + 1 });
    }
    if (action === "prev-img") {
      setData({ img: works[i - 2], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  function up() {
    const element = document.getElementById("contents");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="contents">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 sm:block md:hidden" />
      {data.img && (
        <div className="w-full overflow-hidden relative pb-20 ">
          {/* 버튼 */}
          <div className="w-full flex justify-between align-center ">
            <button className="" onClick={() => imgAction()}>
              Index ⇡
            </button>
            <div>
              <button className="px-2" onClick={() => imgAction("prev-img")}>
                ⇠ Previous
              </button>
              <button
                className="pr-6 pl-2"
                onClick={() => imgAction("next-img")}
              >
                Next ⇢
              </button>
            </div>
          </div>

          {/* 프로젝트 내용 */}

          {works &&
            works.map((project, key) => {
              if (project.id == data.i) {
                return (
                  <>
                    <div className="py-6" key={key}>
                      <div className="flex pb-12 pr-6  ">
                        <div className="w-2/6 pr-4 ">
                          <h2 className="text-2xl pb-2 font-light">
                            {project.title}
                          </h2>
                          <a
                            href={project.href}
                            target="_blank"
                            className="text-sm italic"
                          >
                            [바로가기]
                          </a>
                        </div>
                        <p className="w-4/6">{project.description}</p>
                      </div>
                      <Image
                        alt="project img"
                        width={400}
                        height={400}
                        src={project.mainImg}
                        // src="/108-2.png"
                        className="w-auto max-w-full h-auto max-h-full"
                      />
                    </div>
                    <p className="text-zinc-500 text-xs pb-20">
                      Update {project.updateDate}
                    </p>
                  </>
                );
              }
            })}

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="  bg-white   dark:bg-[#121212] absolute px-3 -translate-x-1/2  left-1/2    text-zinc-400 text-2xl font-light ">
              Index
            </span>
          </div>
        </div>
      )}

      <div className="p-10px">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="20px">
            {works.map((img, key) => (
              <div key={key}>
                <Image
                  width={400}
                  height={400}
                  alt="project img"
                  src={img.mainImg}
                  // src="/108-2.png"
                  style={{
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    viewProject(img, key + 1), up();
                  }}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
