import React from "react";
import Category from "./Category";
import Level from "./Level";
function Meta({ category, level }) {
  return (
    <div className="flex justify-between items-center mb-3 ">
      <Level level={level} />
      <Category category={category} />
    </div>
  );
}

export default Meta;
