import { useState, useContext } from "react";
import Button from "./Button";
import Card from "./Card";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeContext } from "../context/ThemeContext";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const themeClasses =
    theme === "dark"
      ? "bg-gray-900 text-gray-100 border-gray-700"
      : "bg-pink-50 text-gray-800 border-pink-200";

  return (
    <Card
      title="My Task Manager "
      description="Add, complete, and organize your tasks easily!"
    >
      <div className={`p-4 rounded-xl transition-colors duration-300 ${themeClasses}`}>
        <div className="flex gap-2 mb-4 justify-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task "
            className={`rounded-full px-4 py-2 w-2/3 focus:outline-none focus:ring-2 
              ${theme === "dark"
                ? "bg-gray-800 border border-gray-600 text-gray-100 focus:ring-pink-400"
                : "bg-white border border-pink-300 focus:ring-pink-400"
              }`}
          />
          <Button variant="primary" onClick={addTask}>Add</Button>
        </div>

        <div className="flex justify-center gap-2 mb-4">
          <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
          <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
          <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
        </div>

        <ul className="space-y-2">
          {filteredTasks.length > 0 ? (
            filteredTasks.map(task => (
              <li
                key={task.id}
                className={`flex justify-between items-center px-4 py-2 rounded-full transition-all duration-200 
                  ${theme === "dark"
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-pink-200"
                  }
                  ${task.completed ? "opacity-60" : ""}`}
              >
                <span
                  onClick={() => toggleTask(task.id)}
                  className={`cursor-pointer transition-colors duration-200 
                    ${task.completed
                      ? "line-through text-gray-500"
                      : theme === "dark"
                        ? "text-pink-300"
                        : "text-pink-700"
                    }`}
                >
                  {task.text}
                </span>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>🗑</Button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks yet </p>
          )}
        </ul>

        <div className="mt-6 text-center">
          <Button variant="secondary" onClick={toggleTheme}>
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </Button>
        </div>
      </div>
    </Card>
  );
}
