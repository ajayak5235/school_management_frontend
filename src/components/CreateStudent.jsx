import React, { useState } from 'react';
import { postStudent } from '../services/api';
import { useNavigate } from 'react-router-dom';
const CreateStudent = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    grade: '',

  });

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
        await postStudent(form);
        alert('Student Create successful!');
    
    } catch (error) {
      alert('Student failed to Create.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
      }}
    >
        
      
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>User Form</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ margin: '10px', padding: '10px', width: '300px' }}
        />
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          style={{ margin: '10px', padding: '10px', width: '300px' }}
        />
        <input
          type="text"
          placeholder="Grade"
          onChange={(e) => setForm({ ...form, grade: e.target.value + "th" })}
          style={{ margin: '10px', padding: '10px', width: '300px' }}
        />
        
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
          Create Student
        </button>
      </form>
    </div>
  );
};

export default CreateStudent;
