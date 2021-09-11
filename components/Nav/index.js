import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
function Nav() {
  return (
    <div className="px-6 pt-10 pb-4 flex flex-col md:flex-row items-center justify-between">
      <div className="text-fuchsia-100 mb-6 md:mb-0 ">
        <>
          <Link href={"/"}>
            <h1 className="cursor-pointer font-sans w-56 mx-auto md:mx-0 ">
              <Image
                src={`/logo.svg`}
                alt="FrontendQuiz"
                width={724}
                height={125}
              />
            </h1>
          </Link>
          <span className="block text-sm text-white tracking-wide">
            Frontend Interview Questions
          </span>
        </>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default React.memo(Nav);
