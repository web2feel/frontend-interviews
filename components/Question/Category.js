import React from "react";

function Category({ category }) {
  const tech = (category) => {
    switch (category) {
      case "HTML":
        return "text-orange-600";
        break;
      case "CSS":
        return "text-blue-500";
        break;
      case "JS":
        return "text-yellow-400";
        break;
      case "ReactJS":
        return "text-purple-600";
        break;
      default:
        return "";
        break;
    }
  };
  return (
    <p className={`text-gray-300 text-sm font-bold ${tech(category)}`}>
      {category}
    </p>
  );
}

export default Category;
