"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://127.0.0.1:8000/api/create/", {
        username: formData.username,
        password: formData.password,
      });

      alert("Sign-up successful! Redirecting to login...");

      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      console.error("Sign-up failed:", error);
      alert("Sign-up failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#efdcac]">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md overflow-hidden animate-slide-in">
        <div className="bg-[#92b423] p-6 text-center">
          <h1 className="text-white text-2xl font-cursive m-0">Sign Up here!</h1>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <h2 className="text-[#654321] text-center text-xl font-cursive mb-6">
            Sign up
          </h2>

          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-[#654321] font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Username"
              required
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e97451] transition-all"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[#654321] font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Password"
              required
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e97451] transition-all"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 bg-[#92b423] text-white rounded-full text-lg transition-transform duration-300 ease-in-out hover:bg-[#d65f3a] hover:-translate-y-1 ${
              isSubmitting && "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
