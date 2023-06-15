import React, { ReactNode } from "react";

interface TrainingDayProps {
  day: string;
  children: ReactNode;
}

export const TrainingDay = ({ day, children }: TrainingDayProps) => {
  return (
    <div className="flex flex-col   py-4 ">
      <span className="text-4xl text-secondary font-ddc  ">{day}</span>
      <div>{children}</div>
    </div>
  );
};
