import localFont from "next/font/local";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex flex-col capitalize text-center  font-ddc ">
      <span className=" text-2xl">
        fight
        <span className=" text-secondary ">club</span>
      </span>
      <span className="tracking-wide text-3xl	">hallenberg</span>
    </div>
  );
};
