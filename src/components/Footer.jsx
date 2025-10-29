import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const footerClasses =
    theme === "dark"
      ? "bg-gray-900 text-gray-300 border-t border-gray-700"
      : "bg-pink-100 text-pink-700 border-t border-pink-300";

  const linkClasses =
    theme === "dark"
      ? "text-gray-400 hover:text-gray-200"
      : "text-pink-600 hover:text-pink-800";

  return (
    <footer
      className={`text-center py-4 mt-10 transition-all duration-300 ${footerClasses}`}
    >
      <p>
        © {new Date().getFullYear()} GirlyApp | Made with Love 
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className={`${linkClasses} hover:underline`}>
          Privacy
        </a>
        <a href="#" className={`${linkClasses} hover:underline`}>
          Terms
        </a>
        <a href="#" className={`${linkClasses} hover:underline`}>
          Support
        </a>
      </div>
    </footer>
  );
}
