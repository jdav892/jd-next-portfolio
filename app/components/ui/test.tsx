"use client";
import React from "react";
import Link from "next/link";
import { projects } from "@/app/data";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        List of <span className="text-aqua">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <Link
            key={id}
            href={link}
            className="lg:min-h-[32.5rem] h-[25rem] sm:w-96 w-[80vw] flex items-center justify-center
                       transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex flex-col items-center justify-between w-full h-full rounded-2xl overflow-hidden bg-zinc-900 shadow-lg p-4">
              {/* Top Image */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] mb-6">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-black object-cover">
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 object-fill h-full w-full"
                />
              </div>

              {/* Title + Description */}
              <h1 className="font-bold lg:text-xl md:text-md text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2 text-center">
                {des}
              </p>

              {/* Icons + CTA */}
              <div className="flex items-center justify-between w-full mt-6">
                <div className="flex items-center gap-2">
                  {iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="border bg-black border-white/20 rounded-xl flex justify-center items-center lg:h-9 lg:w-9 w-8 h-8"
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <p className="flex lg:text-md md:text-xs text-sm text-white">
                    Click for more
                  </p>
                  <FaLocationArrow className="ms-3" color="aqua" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;