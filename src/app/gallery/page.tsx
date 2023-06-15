import { Header } from "@/components/Header/Header";
import { SectionLayout } from "@/components/sectionLayout/SectionLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Gallery</title>
      </Head>
      <Header hasVideo={false} url="/image/young-woman-boxer-training-gym.jpg">
        <>
          <h1 className="text-7xl text-center ">unsere</h1>
          <span className="text-8xl  customInnerShadow text-secondary  ">
            Gallery
          </span>
        </>
      </Header>
      <SectionLayout>
        <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></Script>
        <iframe
          src="//lightwidget.com/widgets/aa53e8e015f05746b1e44b4e6418a30d.html"
          className="lightwidget-widget py-4"
          style={{
            width: "100%",
            border: 0,
            overflow: "hidden",
            height: "100vh",
          }}
        ></iframe>
      </SectionLayout>
    </div>
  );
}
