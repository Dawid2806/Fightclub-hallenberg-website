import { Faq } from "@/components/Faq/Faq";
import { Header } from "@/components/Header/Header";
import { HeroHeading } from "@/components/HeroHeading/HeroHeading";
import { SectionLayout } from "@/components/sectionLayout/SectionLayout";
import { Vortail } from "@/components/vortaile/Vortail";
import Head from "next/head";
import React from "react";

export const TrainingsTempleted = () => {
  return (
    <div>
      <Head>
        <title>Trainings</title>
      </Head>
      <Header
        hasVideo={true}
        url="video/training_header.mp4"
        urlMp4="video/training_header.mp4"
        urlWebm="video/training_header.webm"
      >
        <>
          <h1 className="text-7xl text-center ">Unser</h1>
          <span className="text-8xl   text-secondary  ">Training</span>
        </>
      </Header>
      <SectionLayout sectionID="#about">
        <HeroHeading
          hasVideo={true}
          urlWebm="video/mma.webm"
          url="video/mma.mp4"
          description="Willkommen in der aufregenden Welt des MMA! Mixed Martial Arts, oder MMA, ist eine Vollkontaktsportart, die eine Vielzahl von Kampftechniken und -fähigkeiten aus verschiedenen Kampfsportarten und Kampfkünsten kombiniert. Von Boxen über Jiu-Jitsu bis hin zu Wrestling und Muay Thai, MMA bietet eine einzigartige Plattform für Athleten, um ihre Fähigkeiten in einem dynamischen und herausfordernden Umfeld zu demonstrieren. MMA ist mehr als nur ein Sport, es ist eine Lebenseinstellung, die Disziplin, Ausdauer und ständige Verbesserung erfordert
          "
          isReverse={false}
          title="Mixed Martial Arts
          "
        ></HeroHeading>
        <HeroHeading
          hasVideo={true}
          urlWebm="video/thaiboxen.webm"
          url="video/thaiboxen.mp4"
          description="Tauchen Sie ein in die Welt des Thaiboxens, auch bekannt als Muay Thai. Dieser antike Kampfsport, der seine Wurzeln in Thailand hat, ist bekannt für seine kraftvollen Schläge und Tritte, sowie für den Einsatz von Ellenbogen und Knien. Thaiboxen ist nicht nur ein effektiver Selbstverteidigungssport, sondern auch eine hervorragende Möglichkeit, Fitness und Ausdauer zu verbessern. Es fördert Disziplin, Respekt und Selbstvertrauen, und ist eine spannende und herausfordernde Art, in Form zu bleiben.
          "
          isReverse={true}
          title="Thaiboxen"
        ></HeroHeading>
        <HeroHeading
          hasVideo={true}
          urlWebm="video/womentainigns.webm"
          url="video/womentainigns.mp4"
          description="Kampfkunst ist nicht nur für Männer. Immer mehr Frauen entdecken die Vorteile des Kampfkunsttrainings. Es bietet nicht nur eine effektive Methode zur Selbstverteidigung, sondern auch eine Möglichkeit, körperliche Fitness, Selbstvertrauen und geistige Stärke zu verbessern. Egal, ob Sie sich für Karate, Jiu-Jitsu, Kickboxen oder eine andere Kampfkunst entscheiden, Sie werden eine Gemeinschaft von gleichgesinnten Frauen finden, die sich gegenseitig unterstützen und ermutigen.
          "
          isReverse={false}
          title="Ladytraining"
        ></HeroHeading>
        <HeroHeading
          hasVideo={true}
          urlWebm="video/child-trainigns.webm"
          url="video/child-trainigns.mp4"
          description="Kampfkunsttraining ist eine hervorragende Möglichkeit für Kinder, ihre körperliche Fitness zu verbessern, Selbstvertrauen aufzubauen und wichtige Werte wie Respekt, Disziplin und Durchhaltevermögen zu lernen. Durch das Training lernen sie, wie sie sich selbst verteidigen können, und entwickeln gleichzeitig eine positive Einstellung und einen starken Charakter. Egal, ob Ihr Kind sich für Karate, Judo, Taekwondo oder eine andere Kampfkunst interessiert, es wird eine sichere und unterstützende Umgebung finden, in der es wachsen und lernen kann.
          "
          isReverse={true}
          title="Kindertraining"
        ></HeroHeading>
      </SectionLayout>
      <SectionLayout sectionTitle="Faq" sectionID="#faq">
        <Faq />
      </SectionLayout>

      <Vortail
        url="video/Selbstverteidigung.mp4"
        title="Selbstverteidigung"
        urlWebm="video/Selbstverteidigung.webm"
      />
      <Vortail
        url="video/fit.mp4"
        title="Fit zu sein"
        urlWebm="video/fit.webm"
      />
    </div>
  );
};
