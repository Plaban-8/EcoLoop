import Head from 'next/head';
import { useState } from 'react';
import { handleSignupSubmit } from './controller';

export default function SignupView() {
  const [message, setMessage] = useState('');

  return (
    <>
      <Head>
        <title>EcoLoop - Sign Up</title>
        <link rel="stylesheet" href="/styles/signup.css" />
      </Head>
      <div className="signup-container">
        <h2>EcoLoop ♻</h2>
        <form onSubmit={(e) => handleSignupSubmit(e, () => {
          setMessage('✅ Signup successful!');
          setTimeout(() => window.location.href = '/login', 1500);
        }, setMessage)}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="number" name="phone" placeholder="Mobile" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
          <div className="login-link">Already have an account? <a href="/login">Login</a></div>
          {message && <p style={{ textAlign: 'center' }}>{message}</p>}
        </form>
      </div>
    </>
  );
}
