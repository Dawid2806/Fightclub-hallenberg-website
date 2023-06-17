"use client";

import React, { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";
import { SectionLayout } from "../sectionLayout/SectionLayout";
import { HeroHeading } from "../HeroHeading/HeroHeading";
import { Pricing } from "../Pricing/Pricing";
import { TrainingsTable } from "../TrainingZeitList/TrainingsTable";
import { Gallery } from "../Gallery/Gallery";
import { ContactForm } from "../ContactForm/ContactForm";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header url="/video/home_header_video.mp4" hasVideo={true}>
            <>
              <h1 className="text-7xl text-center ">
                fight<span className="text-secondary">club</span>
              </h1>
              <span className="text-8xl  customInnerShadow  ">hallenberg</span>
            </>
          </Header>
          <SectionLayout sectionID="uberuns">
            <HeroHeading
              title="Willkommen beim Fightclub Hallenberg."
              description="Gegründet von mir, Christian Schnettler. Meine Reise begann im Jahr 2000 mit Judo und führte mich 2018 zum MMA, was mich völlig faszinierte. Mit dem Wunsch, meine Kenntnisse und Erfahrungen weiterzugeben, habe ich diesen Club ins Leben gerufen. Hier können wir gemeinsam lernen und wachsen."
              url="/image/6.jpg"
              isReverse={false}
              hasVideo={false}
            />
            <HeroHeading
              hasVideo={false}
              title="DISZIPLIN - RESPEKT - SELBSTVERTRAUEN"
              description="Im Fightclub Hallenberg leben wir nach einem einfachen Prinzip: Kampfsport und Gemeinschaft stehen im Vordergrund. Der Kampfsport stärkt nicht nur den Körper, sondern auch den Geist. Der Fightclub Hallenberg ist ein Ort, an dem Respekt und Willenskraft herrschen und wo wir lernen, zwischen Kampfsport und Gewalt zu unterscheiden."
              url="/image/logo_website.jpg"
              isReverse={true}
            />
          </SectionLayout>
          <SectionLayout sectionTitle="preise" sectionID="preise">
            <Pricing />
          </SectionLayout>
          <SectionLayout
            sectionTitle="Trainingszeiten"
            sectionID="trainingszeiten"
          >
            <TrainingsTable />
          </SectionLayout>
          <SectionLayout sectionTitle="Gallery" sectionID="gallery">
            <Gallery />
          </SectionLayout>
          <SectionLayout sectionTitle="Kontakt" sectionID="kontakt">
            <ContactForm />
          </SectionLayout>
        </>
      )}
    </>
  );
};
