import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-[#03045E] bg-[#9DE0EB]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-8xl font-black inline text-[#203368] content-center">
            projects.
          </p>
          <p className="py-4 font-semibold text-xl">
            Check out some of my projects:
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols md:grid-cols gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#7e8fa5] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="transition duration-500 opacity-0 group-hover:opacity-100">
              <span className="transition duration-500 text-2xl font-bold text-white tracking-wider">
                Todoist Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://todoist-clone-teal.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/imreset/todoist-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Container */}
          <div className="grid sm:grid-cols md:grid-cols gap-4">
            {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${realEstate})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="transition duration-500 opacity-0 group-hover:opacity-100">
                <span className="transition duration-500 text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://tesla-clone-gamma-orcin.vercel.app/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/imReset/tesla-clone"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
