import Image from "next/image";
import React from "react";

export const Loader = () => {
  return (
    <div className="bg-black absolute top-0 left-0 w-screen h-screen flex items-center justify-center z-40">
      <Image
        src={"/image/logo_website.png"}
        alt="logo"
        width={500}
        height={500}
      />
    </div>
  );
};
