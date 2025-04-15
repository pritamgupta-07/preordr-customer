"use client";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import { useState } from "react";

export default function AuthPage() {
  const [active, setActive] = useState("login");

  return (
    <div className={`flex flex-col justify-center items-center bg-surface-200 ${active === "login" ? "h-screen" : "h-auto"}`}>
      <div className="flex justify-center p-2 fixed top-1">
        <div className="relative inline-flex items-center p-1 bg-[var(--color-surface-500)] shadow-lg rounded-lg">
          {/* Background highlight */}
          <div
            className={`absolute top-1 bottom-1 w-[calc(50%-2px)] bg-[var(--color-primary-500)] rounded-md transition-all duration-300 ${
              active === "signup" ? "translate-x-[95%]" : "translate-x-1"
            }`}
            style={{
              left: "2px",
              right: "2px",
            }}
          />

          {/* Buttons */}
          <button
            className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-200 ${
              active === "login" ? "text-white" : "text-[var(--color-text-primary-600)]"
            }`}
            onClick={() => setActive("login")}>
            Login
          </button>
          <button
            className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-200 ${
              active === "signup" ? "text-white" : "text-[var(--color-text-primary-600)]"
            }`}
            onClick={() => setActive("signup")}>
            Sign Up
          </button>
        </div>
      </div>
      <div className="max-w-[500px] mx-auto mt-16">
        {active === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}
