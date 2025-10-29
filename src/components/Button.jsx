export default function Button({ children, variant = "primary", onClick }) {
  const baseStyles =
    "px-4 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary: "bg-pink-500 hover:bg-pink-600 text-white shadow-md",
    secondary: "bg-white text-pink-600 border border-pink-400 hover:bg-pink-100",
    danger: "bg-red-400 hover:bg-red-500 text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
