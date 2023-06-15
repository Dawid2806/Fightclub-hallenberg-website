import { Nav } from "@/components/Nav/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

const roboto = Roboto({
  weight: ["300", "700", "900"],

  subsets: ["greek"],
});
const DDC_Hardware = localFont({
  src: "../../public/fonts/DDCHardware-Compressed.ttf",
  variable: "--DDC_Hardware",
});
export const metadata = {
  title: "Fightclub Hallenberg",
  description: "fightclub Hallenberg ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="bg-black">
      <Head>
        <meta
          name="description"
          content="Entdecken Sie den Fightclub Hallenberg, die erste Kampfsportschule in Hallenberg, gegründet von MMA-Experte Christian Schnettler. Hier fördern wir Gemeinschaft und persönliches Wachstum durch Kampfsport, mit besonderem Fokus auf Respekt, Willenskraft und die Unterscheidung zwischen Kampfsport und Gewalt. Tritt bei und stärke Körper und Geist in unserer unterstützenden Gemeinschaft."
        />
        <meta
          name="keywords"
          content="Kampfsportschule, Hallenberg, Christian Schnettler, Judo, MMA, Fightclub Hallenberg, Kampfsport, Gemeinschaft, Körpertraining, Geistestraining, Respekt, Willenskraft, Gewaltprävention, körperliche Fitness, geistige Stärke, Selbstverteidigung, Kampfkunst, Selbstbewusstsein, Training, Fitness-Community, persönliche Entwicklung, professionelles Coaching, sportliche Herausforderung, körperliche Gesundheit, geistige Gesundheit, Kampfsporttraining, Kampfsportklub, Kampfsportschule in Hallenberg, MMA Training, Judo Training, Kampfsport Gemeinschaft"
        />

        <meta property="og:title" content="FightClub-Hallenberg" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FightClub-Hallenberg" />
      </Head>
      <body
        className={`${DDC_Hardware.variable} ${roboto.className} text-primary max-w-[1920px] mx-auto relative top-0`}
      >
        <>
          <Nav />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
