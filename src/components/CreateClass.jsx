import React, { useState } from 'react';
import { postClass } from '../services/api';
import { useNavigate } from 'react-router-dom';
const CreateClass = () => {
  const [form, setForm] = useState({
    name: '',
    schoolId: '',
    capacity: '',
    resources: '',
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       
        await postClass(form);
        alert('Class Create successful!');
        
    } catch (error) {
      alert('Class Creation failed.');
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
        <h2 style={{ textAlign: 'center', marginBottom: '5px' }}>Class Form</h2>
        <input
          type="text"
          placeholder="Class Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ margin: '7px', padding: '5px', width: '300px' }}
        />
        <input
          type="text"
          placeholder="School ID"
          onChange={(e) => setForm({ ...form, schoolId: e.target.value })}
          style={{ margin: '7px', padding: '5px', width: '300px' }}
        />
        <input
          type="text"
          placeholder="capacity"
          onChange={(e) => setForm({ ...form, capacity: e.target.value })}
          style={{ margin: '7px', padding: '5px', width: '300px' }}
        />
        <input
          type="text"
          placeholder="Resources"
          onChange={(e) => setForm({ ...form, resources: e.target.value })}
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
          Create Class
        </button>
      </form>
    </div>
  );
};

export default CreateClass;
