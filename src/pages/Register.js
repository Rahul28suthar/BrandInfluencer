import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "../utils/storage";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "brand",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = getUsers();

    // Check if email exists
    if (users.find((u) => u.email === form.email)) {
      alert("User already exists!");
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      ...form,
    };

    users.push(newUser);
    saveUsers(users);

    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-teal-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-[400px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-teal-700">
          Create Account
        </h2>

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="brand">Brand</option>
          <option value="influencer">Influencer</option>
        </select>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-teal-600 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Register;
