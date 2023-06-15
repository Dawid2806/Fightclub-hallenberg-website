"use client";

import { Nav } from "@/components/Nav/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader/Loader";

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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="de" className="bg-black">
      <body
        className={`${DDC_Hardware.variable} ${roboto.className} text-primary max-w-[1920px] mx-auto relative top-0`}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <Nav />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
