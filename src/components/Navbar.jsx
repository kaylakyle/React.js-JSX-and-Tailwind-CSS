import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeClasses =
    theme === "dark"
      ? "bg-gray-900 text-gray-100 border-b border-gray-700"
      : "bg-pink-200 text-pink-700 border-b border-pink-300";

  return (
    <nav
      className={`shadow-md p-4 flex justify-between items-center transition-all duration-300 ${themeClasses}`}
    >
      <h1 className="text-2xl font-bold tracking-wide">
        GirlyApp
      </h1>

      <div className="flex gap-6 items-center">
        <Link
          to="/"
          className="hover:underline font-medium transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline font-medium transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="/users"
          className="hover:underline font-medium transition-colors duration-300"
        >
          Users
        </Link>

        {/*  Global Theme Toggle */}
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === "light" ? " Dark " : " Light "}
        </Button>
      </div>
    </nav>
  );
}
