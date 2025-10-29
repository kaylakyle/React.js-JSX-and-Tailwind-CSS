// src/pages/Users.jsx
import { useEffect, useState, useRef } from "react";
import Card from "../components/Card";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const observerRef = useRef();

  const usersPerPage = 4;

  // Fetch all users (only once)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
        setVisibleUsers(data.slice(0, usersPerPage));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Search filter
  useEffect(() => {
    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
    setVisibleUsers(filtered.slice(0, page * usersPerPage));
  }, [search, users]);

  // Infinite scroll using Intersection Observer
  useEffect(() => {
    if (loading || error) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const last = entries[0];
        if (last.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [loading, error]);

  // Load more users as page increases
  useEffect(() => {
    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
    const next = filtered.slice(0, page * usersPerPage);
    setVisibleUsers(next);
  }, [page, users, search]);

  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6"> Lovely Users</h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search by name..."
          className="rounded-full px-4 py-2 w-2/3 sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-800 border border-pink-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* User grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleUsers.map((user) => (
          <Card
            key={user.id}
            title={user.name}
            description={`Email: ${user.email}\nCity: ${user.address.city}`}
          />
        ))}
      </div>

      {/* Loading spinner */}
      {loading && (
        <p className="text-center text-pink-600 mt-6 animate-pulse">Loading more users...</p>
      )}

      {/* Intersection observer target */}
      <div ref={observerRef} className="h-10 mt-10"></div>
    </div>
  );
}
