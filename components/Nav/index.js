import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
function Nav() {
  return (
    <div className="px-6 pt-10 pb-4 flex flex-col items-center">
      <div className="text-fuchsia-100 mb-6">
        <>
          <Link href={"/"}>
            <h1 className="cursor-pointer text-center mx-auto font-sans w-48 sm:w-64 md:w-80">
              <Image
                src={`/logo.svg`}
                alt="FrontendQuiz"
                width={724}
                height={125}
              />
            </h1>
          </Link>
          <span className="block md:text-lg text-white tracking-wide">
            Frontend-Tech Interview Questions
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
