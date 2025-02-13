import { useLocation } from "@remix-run/react";
import NavLink from "./NavLink";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const navRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      navRef?.current?.classList.remove("relative");
      navRef?.current?.classList.add("fixed", "top-14", "left-4", "md:left-1/2", "md:-translate-x-1/2", "shadow-md",);

    } else {
      navRef?.current?.classList.remove("fixed", "top-14", "left-4", "md:left-1/2", "md:-translate-x-1/2", "shadow-md");
      navRef?.current?.classList.add("relative");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="transition-all backdrop-blur-md bg-opacity-50 duration-300 z-999 border-[0.1px] relative text-zinc-600 border-zinc-300 md:mx-auto p-1 rounded-3xl w-max"
    >
      <span
        className={`absolute block bg-zinc-200 w-[100px] -z-5 p-5 rounded-[20px] text-center top-1/2 -translate-y-1/2 transition-all duration-300 ${pathname === "/projects" ?
            "left-1/2 -translate-x-1/2" :
            pathname === "/blog"
              ? "left-[99%] -translate-x-[100%]"
              : "left-1"
          }`}
      />
      <div className=" flex justify-between gap-1">
        <NavLink
          href="/"
          className="block p-2 rounded-[20px] w-[100px] text-center h-full"
          name="home"
        />
        <NavLink
          href="/projects"
          className="block p-2 rounded-[20px] w-[100px] text-center h-full"
          name="projects"
        />
        <NavLink
          href="/blog"
          className="block p-2 rounded-[20px] w-[100px] text-center h-full"
          name="blog"
        />
      </div>
    </nav>
  );
}

// for when i have home, projects and blog only 


// pathname === "/projects"
//             ? "left-[158px] -translate-x-1/2"
//             : pathname === "/blog"
//               ? "left-[316px] -translate-x-[100%]"
//               : pathname === "/contact"
//                 ? "left-[464px] -translate-x-[150px]"
//                 : "left-1"