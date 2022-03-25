import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#9DE0EB] text-[#03045E]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-8xl font-black inline text-[#203368] content-center">
            skills.
          </p>
          <p className="py-4 font-semibold text-xl">
            Here are some of the technologies I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 ">
          <div className="shadow-md shadow-[#fdbcbc] hover:scale-110 duration-500 rounded-xl cursor-pointer hover:bg-white">
            <img className="w-20 mx-auto " src={HTML} alt="HTML icon" />
            <p className="my-4">
              <strong>HTML</strong>
            </p>
          </div>
          <div className="shadow-md shadow-[#eaffd1] hover:scale-110 duration-500 rounded-xl cursor-pointer hover:bg-white">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">
              <strong>JAVASCRIPT</strong>
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-xl cursor-pointer hover:bg-white">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">
              <strong>GITHUB</strong>
            </p>
          </div>
          <div className="shadow-md shadow-[#7488fa] hover:scale-110 duration-500 rounded-xl cursor-pointer hover:bg-white">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">
              <strong>CSS</strong>
            </p>
          </div>
          <div className="shadow-md shadow-[#ffffff] hover:scale-110 duration-500 rounded-xl cursor-pointer hover:bg-white">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">
              <strong>REACT</strong>
            </p>
          </div>
          <div className="shadow-md shadow-[#006400] hover:scale-110 duration-500 rounded-xl cursor-pointer hover:bg-white">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">
              <strong>NODE JS</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
