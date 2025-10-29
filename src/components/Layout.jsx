import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-pink-50 text-gray-800"
      }`}
    >
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
