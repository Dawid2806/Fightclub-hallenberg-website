import React from "react";

interface TrainingProps {
  time: string;
  training: string;
}

export const Training = ({ time, training }: TrainingProps) => {
  return (
    <div className="flex flex-col text-center py-2  text-primary">
      <span>{time}</span>
      <span>{training}</span>
    </div>
  );
};
