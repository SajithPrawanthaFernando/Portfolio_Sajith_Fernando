"use client";
import React, { useEffect, useRef, useState, FormEvent } from "react";
import Typed from "typed.js";
import profileImg from "../public/profile2.jpg";
import { Spotlight } from "./ui/Spotlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import dynamic from "next/dynamic";

const Home = () => {
  const typedRef = useRef(null);
  const imageRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Frontend Development.",
        "Backend Development.",
        "Android Development.",
        "Web Development.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      if (imageRef.current) {
        ScrollReveal().reveal(imageRef.current, {
          distance: "80px",
          duration: 3000,
        });
      }
    };

    if (imageRef.current) {
      loadScrollReveal();
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleDownloadCV = (e: FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href =
        "https://drive.google.com/file/d/1OtFhDyJUGwISa5svIbiYZ0QCxOFihhBV/view?usp=drive_link";
    }
  };

  return (
    <div className="min-h-screen w-full relative grid grid-cols-1 md:grid-cols-2 gap-5 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] items-center justify-center p-8">
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative w-full flex flex-col justify-center items-center text-center p-8 z-10 ">
        <div className="absolute w-full  inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>

        <div className="relative flex flex-col justify-center items-center w-full">
          <h3 className="text-4xl font-bold mb-2">Hi,</h3>
          <h3 className="text-4xl font-bold mb-8">
            I&apos;m Sajith <span className="text-blue-500">Fernando</span>
          </h3>
          <h3 className="text-xl font-bold mb-4">
            I am into{" "}
            <span
              className="multiple-text text-blue-500 typed-text"
              ref={typedRef}
            ></span>
          </h3>
          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl w-full">
            Undergraduate Student at SLIIT
          </p>

          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://t.me/SajithPrawanthaFernando"
              className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-blue-500 rounded-full text-2xl text-blue-500 hover:bg-blue-500 hover:text-white transition-none"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a
              href="https://github.com/SajithPrawanthaFernando"
              className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-blue-500 rounded-full text-2xl text-blue-500 hover:bg-blue-500 hover:text-white transition-none"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.instagram.com/sajith__007/"
              className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-blue-500 rounded-full text-2xl text-blue-500 hover:bg-blue-500 hover:text-white transition-none"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com/in/sajith-fernando-384934265"
              className="inline-flex justify-center items-center w-16 h-16 bg-transparent border-2 border-blue-500 rounded-full text-2xl text-blue-500 hover:bg-blue-500 hover:text-white transition-none"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

          <a
            href="#"
            className="inline-block px-7 py-4 mt-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-500 ease-in-out w-full md:w-auto"
            onClick={handleDownloadCV}
          >
            Download CV
          </a>
        </div>
      </div>

      <div
        className={`flex justify-center items-center mt-8 md:mt-0 ${
          imageLoaded ? "animate-zoomIn" : ""
        }`}
        ref={imageRef}
      >
        <img
          src={profileImg.src}
          alt="profiledp"
          className="w-full md:w-[70vw] max-w-xs md:max-w-sm lg:max-w-md rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-[11px] border-blue-500 "
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default Home;
