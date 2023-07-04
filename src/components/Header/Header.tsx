import Image from "next/image";
import React, { ReactNode } from "react";

interface HeaderProps {
  url?: string;
  children: ReactNode;
  hasVideo: boolean;
  urlMp4?: string;
  urlWebm?: string;
}

export const Header = ({
  url,
  urlWebm,
  urlMp4,
  children,
  hasVideo,
}: HeaderProps) => {
  return (
    <header
      className="relative flex items-center justify-center h-screen  overflow-hidden"
      id="header"
    >
      <div className="bg-black w-full h-full absolute top-0 left-0  z-20 opacity-70"></div>
      <div className="absolute z-20 bottom-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 uppercase font-ddc  ">
        {children}
      </div>
      {hasVideo ? (
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none  "
          title={"header video"}
        >
          <source src={urlMp4} type="video/mp4" />
          <source src={urlWebm} type="video/webm" />
        </video>
      ) : (
        <Image
          src={url!}
          alt=""
          className="w-screen h-screen"
          loading="lazy"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      )}
    </header>
  );
};
