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
            <h1 class="w-full text-3xl font-semibold sm:text-center pl-15 pb-10">
              Hi Clint, make some noise, Please take a look around
            </h1>
            <p class="w-full text-xl font-semibold block sm:text-left pl-9 pb-10 content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corrupti delectus inventore officia sequi id cumque deleniti
              provident. Vel ipsum illo doloribus hic labore culpa dolorum,
              perspiciatis nulla quisquam atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
