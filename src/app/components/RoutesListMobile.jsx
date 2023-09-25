"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
const RoutesListMobile = ({ routes }) => {
  const [isShowing, setShowing] = useState(false);
  const currentPath = usePathname();

  return (
    <>
      <div
        className={`${
          isShowing ? "min-w-full" : ""
        } flex h-5 w-5  cursor-pointer items-center justify-center overflow-hidden border border-sky-300 bg-sky-100 transition-all  hover:bg-sky-400  `}
        onClick={() => setShowing(!isShowing)}
      >
        <IoReorderThree />
      </div>
      <div
        className={`${
          isShowing ? "w-full p-1" : "w-0 overflow-hidden"
        } min-h-full  border-r border-sky-300 bg-sky-100 transition-all`}
      >
        {routes.map((route) => (
          <div key={route.url} className="flex ">
            <Link
              href={route.url}
              className={`${
                currentPath === route.url
                  ? "border-sky-300 bg-sky-300"
                  : "border-neutral-300 bg-white"
              } m-1 w-full rounded-md border bg-opacity-30 p-2 text-sm shadow-sm hover:bg-sky-200`}
            >
              {route.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoutesListMobile;
