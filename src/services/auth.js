export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function signup(email, password) {
  const users = getUsers();

  const exists = users.find((user) => user.email === email);

  if (exists) return { success: false, message: "User already exists" };

  users.push({ email, password });

  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
}

export function login(email, password) {
  const users = getUsers();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) return { success: false, message: "Invalid credentials" };

  localStorage.setItem("currentUser", email);

  return { success: true };
}

export function logout() {
  localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
  return localStorage.getItem("currentUser");
}
