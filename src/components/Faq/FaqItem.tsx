import React from "react";
interface FaqItemProps {
  title: string;
  content: string;
  active: boolean;
  onClick: () => void;
}
export const FaqItem = ({ title, content, active, onClick }: FaqItemProps) => {
  return (
    <div className="my-3">
      <div className="flex text-secondary">
        <span className="mr-4 text-lg">{!active ? "+" : "-"}</span>
        <div>
          <h6 onClick={onClick} className="text-2xl text-left  font-[300]">
            {title}
          </h6>
          <div className="my-4 text-lg text-primary">{active && content}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};
