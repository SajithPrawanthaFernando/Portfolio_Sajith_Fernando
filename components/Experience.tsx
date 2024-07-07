import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="skills">
      <h1 className="heading">
        My <span className="text-blue-500">Skills</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="0.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(0.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-6 gap-2 justify-center">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 h-16"
              />
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-white-100 mt-2 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
