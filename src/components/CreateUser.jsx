import React, { useState } from 'react';
import { createUser } from '../services/api';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    schoolId:''
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(form);
      toast.success('User created successfully!');
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'An error occurred.';
      toast.error(errorMessage);
    }
  };



  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <ToastContainer
      position="top-center" 
      autoClose={3000} 
      hideProgressBar={false} 
      newestOnTop={false} 
      closeOnClick 
      rtl={false} 
      pauseOnFocusLoss 
      draggable 
      pauseOnHover 
      
      />

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '5px' }}>User Form</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ margin: '7px', padding: '5px', width: '300px' }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ margin: '7px', padding: '5px', width: '300px' }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ margin: '7px', padding: '5px', width: '300px' }}
        />
        <select
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          style={{ margin: '7px', padding: '5px', width: '315px' }}
        >
          <option value="">Select Role</option>
          <option value="superadmin">superadmin</option>
          <option value="schooladmin">schooladmin</option>
        </select>
        <input
          type="text"
          placeholder="schoolId"
          onChange={(e) => setForm({ ...form, schoolId: e.target.value })}
          style={{ margin: '10px', padding: '5px', width: '300px' }}
        />
        <button
          type="submit"
          style={{
            marginTop: '5px',
            padding: '5px 10px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
