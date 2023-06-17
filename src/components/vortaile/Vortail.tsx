import React from "react";

interface VortailProps {
  url: string;
  title: string;
}

export const Vortail = ({ title, url }: VortailProps) => {
  return (
    <div className="relative flex w-[98vw] h-[200px] max-w-[1920px] md:h-[500px] video items-center justify-center overflow-hidden">
      <div className="bg-black w-full h-full absolute top-0 left-0 z-20 opacity-50"></div>
      <div className="absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 uppercase font-ddc">
        <span className="text-2xl text-primary md:text-6xl">{title}</span>
      </div>
      <video autoPlay loop muted className="absolute z-10 ">
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};
