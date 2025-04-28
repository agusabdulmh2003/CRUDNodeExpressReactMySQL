import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      setToken(res.data.token);
      setMessage("Login berhasil");
    } catch (error) {
      setMessage(error.response?.data?.msg || "Terjadi kesalahan");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" type="email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <button type="submit">Login</button>
      <p>{message}</p>
      {token && <p>Token: {token}</p>}
    </form>
  );
};

export default LoginForm;
