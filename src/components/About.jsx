import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#9DE0EB] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-8xl font-black text-[#203368]">about.</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold text-[#03045E]">
            <h1 class="w-full text-3xl font-semibold sm:text-center pl-15 pb-14">
              Hi, my name is Matthias and I am based in Canada.
            </h1>
            <p class="w-full text-xl font-semibold block sm:text-left pl-4 pb-10 content-center">
              I am a highschool student passionate about technology. My
              accomplishments to date include building a computer and designing,
              developing, and launching multiple websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
