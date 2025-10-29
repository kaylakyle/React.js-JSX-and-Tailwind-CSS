export const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
}
