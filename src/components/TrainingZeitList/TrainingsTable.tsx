import React from "react";
import { TrainingDay } from "./TrainingDay";
import { Training } from "./Training";
import Link from "next/link";

export const TrainingsTable = () => {
  return (
    <div>
      <div className="flex flex-col items-center lg:items-start lg:flex-row mx-auto px-4 lg:justify-between  my-20 ">
        <TrainingDay day="montag">
          <Training time="16:00-17:00" training="Kinder-Training" />
            <Training time="17:00-18:15" training="Lady-Training" />
          <Training time="18:30-19:45" training="Thaiboxen" />
          <Training time="20:00-21:15" training="MMA" />
        </TrainingDay>
                <TrainingDay day="dienstag"/>

        <TrainingDay day="mittwoch">
          <Training time="16:00-17:00" training="Kinder-Training" />
          <Training time="17:00-18:15" training="Lady-Training" />
          <Training time="18:30-19:45" training="Thaiboxen" />
          <Training time="20:00-21:15" training="MMA" />
        </TrainingDay>
                        <TrainingDay day="Donnerstag"/>

        <TrainingDay day="freitag">
                    <Training time="16:00-17:00" training="Kinder-Training" />
                    <Training time="17:00-18:15" training="Lady-Training" />
          <Training time="18:30-19:45" training="Thaiboxen" />
          <Training time="20:00-21:15" training="MMA" />
        </TrainingDay>
                                <TrainingDay day="samstag"/>

        <TrainingDay day="sonntag">
          <Training time="nach vereinbarung" training="Offene Matte" />
        </TrainingDay>
      </div>
      <div>
        <Link href={"/trainings"} legacyBehavior>
          <a className="bg-secondary py-2 px-4 block w-fit mx-auto mt-10 font-ddc  text-2xl">
            Unser Training
          </a>
        </Link>
      </div>
    </div>
  );
};
