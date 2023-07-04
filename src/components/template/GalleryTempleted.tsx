import Head from "next/head";
import React from "react";
import { Header } from "../Header/Header";
import { SectionLayout } from "../sectionLayout/SectionLayout";
import Script from "next/script";

export const GalleryTempleted = () => {
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
          src="https://cdn.lightwidget.com/widgets/e08cf5cfb40053c5804268f7ae3ddfc0.html"
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
};
