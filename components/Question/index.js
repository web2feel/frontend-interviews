import React from "react";
import Title from "./Title";
import Meta from "./Meta";
import Content from "./Content";

function Question({
  question: {
    slug,
    content: answer,
    frontmatter: { level, category, title },
  },
}) {
  const tech = (category) => {
    switch (category) {
      case "HTML":
        return "border-orange-600";
        break;
      case "CSS":
        return "border-blue-500";
        break;
      case "JS":
        return "border-yellow-400";
        break;
      case "ReactJS":
        return "border-purple-600";
        break;
      default:
        return "border-green-600";
        break;
    }
  };
  return (
    <div
      className={`mb-8 shadow bg-black  p-6 rounded border-t-4 border-opacity-80 ${tech(
        category
      )} bg-opacity-40  `}
    >
      <Meta level={level} category={category} />
      <Title title={title} slug={slug} />
      <Content answer={answer} category={category} title={title} slug={slug} />
    </div>
  );
}

export default Question;
