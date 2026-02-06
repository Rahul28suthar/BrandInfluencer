import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, setCurrentUser } from "../utils/storage";

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = getUsers();

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password,
    );

    if (!user) {
      alert("Invalid credentials!");
      return;
    }

    setCurrentUser(user);

    alert("Login Successful!");

    if (user.role === "brand") navigate("/brands");
    else navigate("/influencers");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-teal-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-[400px]"
      >
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
          Login
        </h2>

        <input
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-teal-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
export default SignIn;
