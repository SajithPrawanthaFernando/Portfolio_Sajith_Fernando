import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <section className="services py-20" id="services">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        My <span className="text-blue-500">Services</span>
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="dark:bg-black-100 rounded-2xl shadow-md p-6 border-2 border-blue-500 transition duration-500 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center text-center">
          <FontAwesomeIcon
            icon={faCode}
            className="text-5xl md:text-6xl text-blue-500 mb-4 transition-opacity duration-300 ease-in-out opacity-100"
          />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Web Development
          </h3>
          <p className="text-white text-sm">
            I create websites that look great on any device. Whether you need a
            unique design or better search engine visibility, I'll help you
            create a website that attracts and keeps customers engaged.
          </p>
        </div>

        <div className="dark:bg-black-100 rounded-2xl shadow-md p-6 border-2 border-blue-500 transition duration-500 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:bg-transparent flex flex-col items-center justify-center text-center">
          <FontAwesomeIcon
            icon={faPalette}
            className="text-5xl md:text-6xl text-blue-500 mb-4 transition-opacity duration-300 ease-in-out opacity-100"
          />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            UI/UX Design
          </h3>
          <p className="text-sm text-white">
            I create visually appealing interfaces that are highly functional,
            ensuring seamless user experiences. My designs feature intuitive
            layouts and engaging interactions to maximize user satisfaction.
          </p>
        </div>

        <div className="dark:bg-black-100 rounded-2xl shadow-md p-6 border-2 border-blue-500 transition duration-500 ease-in-out transform hover:scale-105 hover:border-blue-500 flex flex-col items-center justify-center text-center">
          <FontAwesomeIcon
            icon={faAndroid}
            className="text-5xl md:text-6xl text-blue-500 mb-4 transition-opacity duration-300 ease-in-out opacity-100"
          />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            App Development
          </h3>
          <p className="text-white text-sm">
            I develop user-friendly Android mobile apps with custom designs,
            seamless functionality, and continuous support to help your app
            stand out and attract users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
