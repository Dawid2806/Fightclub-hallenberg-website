import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useRef } from "react";

export const Gallery = () => {
  return (
    <div className="my-20">
      <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></Script>
      <iframe
        src="https://cdn.lightwidget.com/widgets/e08cf5cfb40053c5804268f7ae3ddfc0.html"
        className="lightwidget-widget"
        style={{
          width: "100%",
          border: 0,
          overflow: "hidden",
          height: "100vh",
        }}
      />
      <div>
        <Link href={"/gallery"} legacyBehavior>
          <a className="bg-secondary py-2 px-4 block w-fit mx-auto mt-10 font-ddc  text-2xl">
            Alle Bilder{" "}
          </a>
        </Link>
      </div>
    </div>
  );
};
