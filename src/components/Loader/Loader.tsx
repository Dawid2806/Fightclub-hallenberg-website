import Image from "next/image";
import React from "react";

export const Loader = () => {
  return (
    <div className="bg-black fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
      <Image
        src={"/image/logo_website.jpg"}
        alt="logo"
        width={300}
        height={300}
        className="animation"
      />
    </div>
  );
};
