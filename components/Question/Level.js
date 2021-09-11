import React from "react";

function Level({ level }) {
  const getLevel = (level) => {
    switch (level) {
      case 1:
        return "Easy";
        break;
      case 2:
        return "Intermediate";
        break;
      case 3:
        return "Advanced";
        break;
      default:
        return "General";
        break;
    }
  };
  return <p className="text-gray-300 text-sm font-bold">{getLevel(level)}</p>;
}

export default Level;
