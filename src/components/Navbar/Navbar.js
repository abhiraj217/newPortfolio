import { useState, useContext } from "react";
import ThemeContext from "../../utils/ThemeContext";
import {
  HiMenu,
  HiX
} from "react-icons/hi";

import {
  HiMoon,
  HiSun
} from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { themeValue, setThemebtn } =
    useContext(ThemeContext);

  const changeTheme = () => {
    themeValue === "Dark"
      ? setThemebtn("Light")
      : setThemebtn("Dark");
  };

  const navItems = [
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav
      className="
      sticky top-0 z-50
      px-6 md:px-10 lg:px-16 py-5
      bg-white
      dark:bg-black
      border-b border-gray-200
      dark:border-zinc-900
      transition-all duration-300
      "
    >
      <div className="flex justify-between items-center">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center text-2xl font-semibold"
        >
          <span className="text-slate-500 dark:text-slate-400">
            &lt;
          </span>

          <span
            className="
            font-signature
            px-2
            text-2xl md:text-3xl
            text-black
            dark:text-white
            "
          >
            Abhiraj
          </span>

          <span className="text-slate-500 dark:text-slate-400">
            /&gt;
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-3">

          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="
                text-lg
                text-gray-700
                dark:text-zinc-200
                px-5 py-3
                rounded-lg
                transition-all duration-300

                hover:bg-violet-700
                hover:text-white
                dark:hover:bg-violet-700
                "
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Theme Button */}
          <li>
            <button
              onClick={changeTheme}
              className="
              bg-violet-700
              hover:bg-violet-800
              text-white
              px-6 py-3
              rounded-2xl
              transition-all duration-300
              font-medium
              shadow-lg
              "
            >
            <div className="flex items-center justify-center gap-2">
            {themeValue === "Dark" ? (
                 <>
                <HiSun className="text-xl" />
                Light Theme
                </>
            ) : (
                <>
                <HiMoon className="text-xl" />
                Dark Theme
                </>
            )}
            </div>
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="
          lg:hidden
          text-4xl
          text-black
          dark:text-white
          "
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[500px] mt-5"
            : "max-h-0"
        }`}
      >
        <ul
          className="
          flex flex-col
          gap-5
          text-center
          bg-gray-50
          dark:bg-[#111827]
          rounded-2xl
          p-6
          shadow-xl
          border
          border-gray-200
          dark:border-slate-700
          "
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                block
                py-3
                rounded-lg
                text-black
                dark:text-white
                hover:bg-violet-700
                hover:text-white
                transition-all duration-300
                "
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Mobile Theme Button */}
          <li>
            <button
              onClick={changeTheme}
              className="
              w-full
              bg-violet-700
              hover:bg-violet-800
              text-white
              px-5 py-3
              rounded-xl
              transition-all duration-300
              "
            >
            <div className="flex items-center justify-center gap-2">
            {themeValue === "Dark" ? (
                 <>
                <HiSun className="text-xl" />
                Light Theme
                </>
            ) : (
                <>
                <HiMoon className="text-xl" />
                Dark Theme
                </>
            )}
            </div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;