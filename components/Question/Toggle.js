import React, { useContext } from "react";
import { SmoothScrollContext } from "../../context/SmootScroll.context";
function Toggle({ show, setShow, category }) {
  const tech = (category) => {
    switch (category) {
      case "HTML":
        return "hover:bg-orange-600";
        break;
      case "CSS":
        return "hover:bg-blue-500";
        break;
      case "JS":
        return "hover:bg-yellow-500";
        break;
      case "ReactJS":
        return "hover:bg-purple-600";
        break;
      default:
        return "hover:bg-green-600";
        break;
    }
  };
  const { scroll } = useContext(SmoothScrollContext);
  const handleShow = () => {
    setShow((show) => (show = !show));
    setTimeout(() => {
      scroll.update();
    }, 200);
  };
  return (
    <button
      onClick={handleShow}
      className={`ml-auto px-4 font-bold py-2 text-sm rounded transform duration-300 text-gray-300 border border-opacity-30 ${tech(
        category
      )}`}
    >
      {show ? "Hide Answer" : "Show Answer"}
    </button>
  );
}

export default Toggle;
