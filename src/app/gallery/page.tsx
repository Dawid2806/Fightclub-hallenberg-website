import { Header } from "@/components/Header/Header";
import { SectionLayout } from "@/components/sectionLayout/SectionLayout";
import React from "react";

export default function Gallery() {
  return (
    <div>
      <Header hasVideo={false} url="/image/young-woman-boxer-training-gym.jpg">
        <>
          <h1 className="text-7xl text-center ">unsere</h1>
          <span className="text-8xl  customInnerShadow text-secondary  ">
            Gallery
          </span>
        </>
      </Header>
      <SectionLayout>
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
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
