import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
function Menu() {
  const menu = ["CSS", "HTML", "JS", "ReactJS"];
  const router = useRouter();
  const {
    query: { category },
  } = router;

  const active = (item) => {
    return item === category
      ? " bg-gradient-to-tr from-fuchsia-500 to-fuchsia-600 text-white"
      : "";
  };

  return (
    <ul className="flex gap-x-4 text-fuchsia-300">
      {menu.map((item, i) => {
        return (
          <Link key={i} href={`/category/${item}`}>
            <li
              className={` hover:text-white cursor-pointer transform duration-300 px-3 py-1 rounded ${active(
                item
              )}`}
            >
              {item}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Menu;
