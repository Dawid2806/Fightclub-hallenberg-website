import React from "react";

interface PricingCardProps {
  trainingTitle: string;
  price: string;
  children: React.ReactNode;
}
export const PricingCard = ({
  children,
  price,
  trainingTitle,
}: PricingCardProps) => {
  return (
    <div className="flex flex-col  bg-black shadow-2xl shadow-slate-500 max-w-[300px] rounded-tl-3xl rounded-br-3xl text-center text-primary">
      <h4 className=" uppercase font-ddc text-6xl px-10 py-4 mt-8">
        {trainingTitle}
      </h4>
      <span className="text-secondary text-3xl font-[900] p-4">
        €{price}/mtl.
      </span>
      <div className="flex flex-col text-lg">{children}</div>
      <a
        href="https://fightclub-hallenberg.pronummus.com/"
        className="bg-secondary w-2/4 mx-auto py-2 rounded-lg my-8 uppercase text-white"
      >
        anmelden
      </a>
    </div>
  );
};
