"use client";

import Link from "next/link";
import "./signup.css"
import { FormEvent } from "react";
import { RegisterDTO } from "./model";
import { singup } from "./service";

export default function SignUp() {

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: RegisterDTO = {
      name: (e.target as any).name.value,
      phone: (e.target as any).phone.value,
      email: (e.target as any).email.value,
      password: (e.target as any).password.value,
    }
    try {
      await singup(data);
      window.location.href = "/login";
    } catch (error) {
      alert("Registration failed");
    }
  }

  return (
    <div className="signup-container">
      <h2>EcoLoop ♻️</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Mobile" required />
        </div>
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
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        <div className="login-link">
          Already have an account? <Link href="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
