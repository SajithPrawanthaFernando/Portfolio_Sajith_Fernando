"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "../components/ui/3d-pin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const RecentProjects = () => {
  return (
    <div className="py-18 mt-28" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-blue-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-4">
        {projects.map((item) => (
          <div
            className="sm:h-[30rem] lg:min-h-[24rem] h-[24rem] flex items-center justify-center sm:w-[400px] w-[70vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[350px] w-[70vw] overflow-hidden sm:h-[25vh] h-[20vh] mb-6">
                {/* <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="./bg.png" className="rounded-2xl" alt="bgimg" />
                </div> */}
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-2xl"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5 mb-2">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${4 * index}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-1" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    className="inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-blue-500 rounded-full text-2xl text-blue-500 hover:bg-blue-500 hover:text-white transition-none"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
