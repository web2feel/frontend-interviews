import React from "react";
import marked from "marked";
import Link from "next/link";
function Title({ title, slug }) {
  return (
    <div className="flex">
      <div className="w-6 mr-2">
        <Link href={`/question/${slug}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-1 text-fuchsia-500 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </Link>
      </div>
      <h2
        className="prose text-xl text-indigo-200 "
        dangerouslySetInnerHTML={{ __html: marked(title) }}
      />
    </div>
  );
}

export default Title;
