"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const RoutesListDesktop = ({ routes }) => {
  const currentPath = usePathname();

  return (
    <div className="min-h-full min-w-full border-r border-sky-300 bg-sky-100 p-1 transition-all">
      {routes.map((route) => (
        <div key={route.url} className="flex ">
          <Link
            href={route.url}
            className={`${
              currentPath === route.url
                ? "border-sky-300 bg-sky-300"
                : "border-neutral-300 bg-white"
            } m-1 w-full rounded-md border bg-opacity-30 p-2 shadow-sm hover:bg-sky-200`}
          >
            {route.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RoutesListDesktop;
