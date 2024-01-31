import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col  mx-auto gap-6 md:flex-row md:mx-0 justify-around mt-20 my-10">
      <div className="mx-auto md:mx-0">
        <Image src="/image/logo_website.jpg" alt="" width={150} height={150} />
      </div>

      <div className="flex flex-col  gap-0.5">
        <p className="font-ddc text-center text-4xl text-secondary">
          {" "}
          Fightclub Hallenberg
        </p>
        <ul className="text-center  text-xl">
          <li>Grundringhausen 15</li>
          <li>59969 Hallenberg</li>
          <li>fightclub-hallenberg@hotmail.com</li>
        </ul>
      </div>
      <div className="flex flex-col gap-0.5 ">
        <p className="font-ddc text-4xl text-center text-secondary">
          {" "}
          Pronummus GmbH
        </p>
        <ul className="text-center">
          <li>06028 3076440</li>
          <li>hotline@pronummus.de</li>
        </ul>
      </div>
    </footer>
  );
};
