export default function Card({ title, description, children }) {
  return (
    <div
      className="p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105
      bg-white dark:bg-gray-800 dark:text-gray-100 border border-pink-200 dark:border-gray-700"
    >
      <h2 className="text-xl font-semibold mb-2 text-pink-700 dark:text-pink-300">{title}</h2>
      {description && <p className="mb-4 text-sm">{description}</p>}
      {children}
    </div>
  );
}
