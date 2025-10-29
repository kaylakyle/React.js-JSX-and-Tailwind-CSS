import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  const aboutClasses =
    theme === "dark"
      ? "bg-gray-800 text-gray-100"
      : "bg-pink-50 text-gray-700";

  return (
    <div
      className={`text-center py-10 min-h-screen transition-all duration-300 ${aboutClasses}`}
    >
      <h2 className="text-3xl font-semibold mb-4">
        About GirlyApp
      </h2>
      <p className="max-w-2xl mx-auto px-4">
        GirlyApp is a React + Tailwind project built to demonstrate component architecture,
        routing, dark mode, and a soft aesthetic for people who love pink vibes 
      </p>
    </div>
  );
}
