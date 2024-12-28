import React, { useState } from 'react';
import { signup } from '../services/api';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert('Signup successful! Please login.');
      navigate('/Login')
    } catch (error) {
      alert('Signup failed.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95vh',
      }}
    >
      
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
        <p> Already have an account?<a href="/Login" style={{ marginBottom: '20px' }}>Login</a></p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ margin: '10px', padding: '10px', width: '300px' }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ margin: '10px', padding: '10px', width: '300px' }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ margin: '10px', padding: '10px', width: '300px' }}
        />
        <select
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          style={{ margin: '10px', padding: '10px', width: '320px' }}
        >
          <option value="">Select Role</option>
          <option value="superadmin">superadmin</option>
          <option value="schooladmin">schooladmin</option>
        </select>
        <button
          type="submit"
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
