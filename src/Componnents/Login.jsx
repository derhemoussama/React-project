import { useState } from 'react';
import axios from 'axios';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`http://localhost:3000/api/auth/login`, { email, password });
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., redirect, save token, etc.)
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
