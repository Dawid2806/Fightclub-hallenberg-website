"use client";
import React, { useState } from "react";
import { FaqItem } from "./FaqItem";
import faqData from "./faqData.json";

export const Faq = () => {
  const [activeId, setActiveId] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const showHandler = (id: string) => {
    if (id === activeId) {
      setShowAnswer(!showAnswer);
    } else {
      setActiveId(id);
      setShowAnswer(true);
    }
  };

  return (
    <div className="flex flex-col w-full px-4 md:w-3/4 mx-auto my-20 ">
      {faqData.map((item) => (
        <FaqItem
          key={item.id}
          onClick={() => showHandler(String(item.id))}
          active={String(item.id) === String(activeId) && showAnswer}
          title={item.question}
          content={item.answer}
        />
      ))}
    </div>
  );
};
