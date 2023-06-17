"use client";
import React, { useState } from "react";
import { CategoryButton } from "./CategoryButton";
import { PricingCard } from "./PricingCard";

export const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState("männer");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const renderCards = () => {
    switch (selectedCategory) {
      case "frauen":
        return (
          <div className="grid items-center mx-auto  gap-10 lg:grid-cols-2 row-span-1 my-20">
            <PricingCard price="39,90" trainingTitle="Lady Training">
              <span>Lady-Training</span>
            </PricingCard>
            <PricingCard price="74,90" trainingTitle="Lady All in one">
              <span>Lady-Training</span>
              <span>Mixed Martial Arts</span>
              <span>Thaiboxen</span>
            </PricingCard>
          </div>
        );
      case "männer":
        return (
          <div className="grid items-center mx-auto  gap-10 lg:grid-cols-3 row-span-1 my-20">
            <PricingCard price="54,90" trainingTitle="mma">
              <span>Mixed Martial Arts</span>
            </PricingCard>
            <PricingCard price="69,90" trainingTitle="All in one">
              <span>Mixed Martial Arts</span>
              <span>Thaiboxen</span>
            </PricingCard>
            <PricingCard price="54,90" trainingTitle="Thaiboxen">
              <span>Thaiboxen</span>
            </PricingCard>
          </div>
        );
      case "kinder":
        return (
          <div className="grid items-center mx-auto  gap-10 lg:grid-cols-1 row-span-1 my-20">
            <PricingCard price="39,90" trainingTitle="Kinder Training">
              <span>Kinder-training</span>
            </PricingCard>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col my-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-2xl w-full  ">
        <CategoryButton
          name={"frauen"}
          onClick={() => handleCategoryClick("frauen")}
          isSelected={selectedCategory === "frauen"}
        />
        <CategoryButton
          name="männer"
          onClick={() => handleCategoryClick("männer")}
          isSelected={selectedCategory === "männer"}
        />
        <CategoryButton
          name="kinder"
          onClick={() => handleCategoryClick("kinder")}
          isSelected={selectedCategory === "kinder"}
        />
      </div>
      {renderCards()}
      <div className="flex flex-col items-center text-primary text-4xl md:text-5xl uppercase font-ddc">
        <h3>probetraining?</h3>
        <span>melden sie sich bei uns</span>
        <span className="text-secondary">01520/1494800</span>
      </div>
    </div>
  );
};
