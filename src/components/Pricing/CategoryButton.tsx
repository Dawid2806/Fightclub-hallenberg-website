import React from "react";

interface categoryButtonProps {
  name: string;
  onClick: () => void;

  isSelected: boolean;
}

export const CategoryButton = ({
  name,
  onClick,
  isSelected,
}: categoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`uppercase rounded-md py-2 px-8 text-xl ${
        isSelected ? "bg-secondary " : " bg-red-950 text-primary"
      }`}
      aria-label={name}
    >
      {name}
    </button>
  );
};
