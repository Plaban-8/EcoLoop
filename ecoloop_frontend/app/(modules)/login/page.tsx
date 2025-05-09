"use client";
import { FormEvent } from "react";
import "./login.css";

import Link from "next/link";
import { LoginDTO } from "./model";
import { login } from "./service";
import Cookies from "js-cookie";

export default function LoginPage() {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: LoginDTO = {
      email: (e.target as any).email.value,
      password: (e.target as any).password.value,
    };
    try {
      const response = await login(data);
      Cookies.set("token", response.token, { expires: 1 });
      window.location.href = "/";
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>EcoLoop ♻️</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <div className="signup-link">
          Don't have an account? <Link href="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
}
