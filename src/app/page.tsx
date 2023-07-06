import { Home } from "@/components/template/Home";
import Head from "next/head";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FightClub-Hallenberg</title>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-939WT6M10E" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-939WT6M10E');
        `}
        </Script>
      </Head>
      <Home />
    </>
  );
}
