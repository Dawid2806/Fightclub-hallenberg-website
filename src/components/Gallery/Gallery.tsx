import Link from "next/link";
import React, { useEffect, useRef } from "react";

export const Gallery = () => {
  return (
    <div className="my-20">
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe
        src="//lightwidget.com/widgets/d1a2b4be310c5ce38bc21c26014c39f1.html"
        className="lightwidget-widget"
        style={{
          width: "100%",
          border: 0,
          overflow: "hidden",
          height: "100vh",
        }}
      />
      <div>
        <Link href={"/trainings"} legacyBehavior>
          <a className="bg-secondary py-2 px-4 block w-fit mx-auto mt-10 font-ddc  text-2xl">
            Alle Bilder{" "}
          </a>
        </Link>
      </div>
    </div>
  );
};
