import React from "react";
import ScrollTop from "./ScrollTop";
function Footer() {
  return (
    <>
      <ScrollTop />
      <div className="px-6 py-12 text-center text-gray-300 text-sm ">
        <p className="animate-pulse text-indigo-400 mb-8 text-lg">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/web2feel/frontend-interviews/blob/main/CONTRIBUTING.md"
          >
            Submit a Question
          </a>
        </p>
        <p>
          Developed by Jinson Abraham | Find me on{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/web2feel/frontend-interviews"
          >
            Github
          </a>{" "}
        </p>
        <p>
          Built with{" "}
          <a rel="noreferrer" target="_blank" href="https://nextjs.org/">
            NextJS
          </a>{" "}
          and{" "}
          <a rel="noreferrer" target="_blank" href="https://tailwindcss.com/">
            TailwindCSS
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
