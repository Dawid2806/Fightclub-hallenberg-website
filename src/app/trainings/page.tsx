import { Faq } from "@/components/Faq/Faq";
import { Header } from "@/components/Header/Header";
import { HeroHeading } from "@/components/HeroHeading/HeroHeading";
import { SectionLayout } from "@/components/sectionLayout/SectionLayout";
import Image from "next/image";
import React from "react";

const Trainings = () => {
  return (
    <div>
      <Header hasVideo={true} url="/video/training_header.mp4">
        <>
          <h1 className="text-7xl text-center ">unsere</h1>
          <span className="text-8xl   text-secondary  ">Trainings</span>
        </>
      </Header>
      <SectionLayout sectionID="#about">
        <HeroHeading
          hasVideo={true}
          url="video/mma.mp4"
          description="Willkommen in der aufregenden Welt des MMA! Mixed Martial Arts, oder MMA, ist eine Vollkontaktsportart, die eine Vielzahl von Kampftechniken und -fähigkeiten aus verschiedenen Kampfsportarten und Kampfkünsten kombiniert. Von Boxen über Jiu-Jitsu bis hin zu Wrestling und Muay Thai, MMA bietet eine einzigartige Plattform für Athleten, um ihre Fähigkeiten in einem dynamischen und herausfordernden Umfeld zu demonstrieren. MMA ist mehr als nur ein Sport, es ist eine Lebenseinstellung, die Disziplin, Ausdauer und ständige Verbesserung erfordert
          "
          isReverse={false}
          title="Mixed Martial Arts
          "
        ></HeroHeading>
        <HeroHeading
          hasVideo={true}
          url="video/thaiboxen.mp4"
          description="Tauchen Sie ein in die Welt des Thaiboxens, auch bekannt als Muay Thai. Dieser antike Kampfsport, der seine Wurzeln in Thailand hat, ist bekannt für seine kraftvollen Schläge und Tritte, sowie für den Einsatz von Ellenbogen und Knien. Thaiboxen ist nicht nur ein effektiver Selbstverteidigungssport, sondern auch eine hervorragende Möglichkeit, Fitness und Ausdauer zu verbessern. Es fördert Disziplin, Respekt und Selbstvertrauen, und ist eine spannende und herausfordernde Art, in Form zu bleiben.
          "
          isReverse={true}
          title="Thaiboxing"
        ></HeroHeading>
        <HeroHeading
          hasVideo={true}
          url="video/womentainigns.mp4"
          description="Kampfkunst ist nicht nur für Männer. Immer mehr Frauen entdecken die Vorteile des Kampfkunsttrainings. Es bietet nicht nur eine effektive Methode zur Selbstverteidigung, sondern auch eine Möglichkeit, körperliche Fitness, Selbstvertrauen und geistige Stärke zu verbessern. Egal, ob Sie sich für Karate, Jiu-Jitsu, Kickboxen oder eine andere Kampfkunst entscheiden, Sie werden eine Gemeinschaft von gleichgesinnten Frauen finden, die sich gegenseitig unterstützen und ermutigen.
          "
          isReverse={false}
          title="Ladytraining"
        ></HeroHeading>
        <HeroHeading
          hasVideo={true}
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

      <div className="relative flex items-center justify-center  overflow-hidden">
        <div className="bg-black w-full h-full absolute top-0 left-0  z-20 opacity-70"></div>
        <div className="absolute z-30 bottom-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 uppercase font-ddc  "></div>
        <Image
          src="/image/young-woman-boxer-training-gym.jpg"
          alt=""
          width={1920}
          height={220}
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default Trainings;
