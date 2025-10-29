import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

export default function App() {
  const { theme } = useContext(ThemeContext);

  const appThemeClasses =
    theme === "dark"
      ? "bg-gray-900 text-gray-100"
      : "bg-pink-50 text-gray-800";

  return (
    <div className={`min-h-screen transition-all duration-500 ${appThemeClasses}`}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </div>
  );
}
