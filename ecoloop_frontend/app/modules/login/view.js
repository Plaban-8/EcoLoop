import Head from 'next/head';
import { useState } from 'react';
import { handleLoginSubmit } from './controller';

export default function LoginView() {
  const [error, setError] = useState('');

  const onSuccess = (user) => {
    console.log('Logged in as:', user);
    window.location.href = '/profile';
  };

  const onError = (message) => {
    setError(message);
  };

  return (
    <>
      <Head>
        <title>EcoLoop - Login</title>
        <link rel="stylesheet" href="/styles/login.css" />
      </Head>
      <div className="login-container">
        <h2>EcoLoop ♻</h2>
        <form onSubmit={(e) => handleLoginSubmit(e, onSuccess, onError)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </>
  );
}
