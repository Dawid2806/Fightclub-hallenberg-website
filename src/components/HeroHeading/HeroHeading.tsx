import Image from "next/image";
import React from "react";

interface HeroHeadingProps {
  title: string;
  description: string;
  url: string;
  isReverse: boolean;
  hasVideo: boolean;
}

export const HeroHeading = ({
  description,
  title,
  url,
  isReverse,
  hasVideo,
}: HeroHeadingProps) => {
  return (
    <div
      className={`flex ${
        isReverse
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      }    p-10 gap-6 `}
    >
      <div className="flex-1">
        <h2 className="text-secondary font-ddc text-4xl  md:text-6xl mb-10">
          {title}
        </h2>
        <p className="text-xl ">{description}</p>
      </div>
      <div className="flex-1">
        {hasVideo ? (
          <video
            autoPlay
            loop
            muted
            className="object-contain mt-10 mx-auto w-full h-full "
          >
            <source src={url} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={url}
            alt=""
            width={400}
            height={400}
            className="object-contain mt-10 mx-auto "
          />
        )}
      </div>
    </div>
  );
};
