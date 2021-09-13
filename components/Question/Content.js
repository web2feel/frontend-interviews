import React, { useState } from "react";
import marked from "marked";
import Toggle from "./Toggle";
import Share from "./Share";
function Content({ answer, category, title, slug }) {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-4">
      {show && (
        <div
          className={`pt-2 leading-relaxed text-gray-300 prose max-w-none border-t border-indigo-600 border-opacity-30`}
        >
          <div dangerouslySetInnerHTML={{ __html: marked(answer) }}></div>
        </div>
      )}
      <div className="flex mt-6 justify-between items-center">
        <Share title={title} slug={slug} />
        <Toggle show={show} setShow={setShow} category={category} />
      </div>
    </div>
  );
}

export default Content;
