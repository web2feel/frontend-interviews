import React, { useContext } from "react";
import { SmoothScrollContext } from "../../context/SmootScroll.context";
import Link from "next/link";
import { useRouter } from "next/router";
function Menu() {
  const { scroll } = useContext(SmoothScrollContext);
  const handleClick = () => {
    setTimeout(() => {
      scroll.update();
    }, 300);
  };
  const menu = ["CSS", "HTML", "JS", "ReactJS"];
  const router = useRouter();
  const {
    query: { category },
  } = router;

  const active = (item) => {
    return item === category ? " border-opacity-40 text-white" : "";
  };

  return (
    <>
      <ul className="flex gap-x-2 text-indigo-300">
        {menu.map((item, i) => {
          return (
            <Link key={i} href={`/category/${item}`}>
              <li
                onClick={handleClick}
                className={` border border-opacity-0 hover:text-white cursor-pointer transform duration-300 px-3 py-1 rounded ${active(
                  item
                )}`}
              >
                {item}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
