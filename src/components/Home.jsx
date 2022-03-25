import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#9DE0EB]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#0A2E50] text-2xl">
          <strong>Hello, I’m Matthias,</strong>
        </p>
        <h1 className="text-4xl sm:text-8xl font-black text-[#0A2E50] pt-2 ">
          My
        </h1>
        <h2 className="text-4xl sm:text-8xl font-black text-[#0A2E50] pb-2">
          Portfolio.
        </h2>
        <p className="text-[#0A2E50] py-4 max-w-[700px]">
          <strong>based in Canada.</strong>
        </p>
        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center transition ease-in-out hover:bg-white hover:border-white hover:text-black hover:scale-110 hover:rounded-lg"
            onclic
          >
            <a href="https://bit.ly/37I2Xli" target="_blank">
              Resume
            </a>
            <span className="group-hover:rotate-180 duration-300">
              <HiArrowNarrowRight className="ml-3 pr-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
