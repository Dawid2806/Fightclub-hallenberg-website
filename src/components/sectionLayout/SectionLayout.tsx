import React from "react";

export const SectionLayout = ({
  children,
  sectionTitle,
  sectionID,
}: {
  children: React.ReactNode;
  sectionTitle?: string;
  sectionID: string;
}) => {
  return (
    <section
      className="max-w-[1200px] flex flex-col mx-auto mt-10 "
      id={sectionID}
    >
      <div>
        <h4 className="text-6xl md:text-7xl font-ddc text-center  text-secondary">
          {sectionTitle}
        </h4>
      </div>
      {children}
    </section>
  );
};
