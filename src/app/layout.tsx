import { Nav } from "@/components/Nav/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer/Footer";

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
