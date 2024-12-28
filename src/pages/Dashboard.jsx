import React, { useState } from 'react';
import CreateUser from '../components/CreateUser';
import CreateSchool from '../components/CreateSchool';
import GetUsers from '../components/GetUsers';
import GetSchool from '../components/getSchools';
import GetClass from '../components/GetClass';
import CreateClass from '../components/CreateClass';
import GetStudents from '../components/GetStudent';
import CreateStudent from '../components/createStudent';

import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null); // Tracks the active component
  const navigate = useNavigate();

  const logoutHandler = () =>{
    localStorage.removeItem('token')
    navigate('/login');
  }
  


  return (
    <div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
        <h3>Dashboard Super Admin</h3>
        <button onClick={logoutHandler} style={{height:'50px', margin:'5px', backgroundColor:'red'}}>School Admin</button>
        <button  onClick={logoutHandler} style={{height:'50px', margin:'5px', backgroundColor:'red'}}>Logout</button>
        </div>
      

      <div style={{ display: 'flex', flexDirection: 'row', margin:'15px',justifyContent: 'space-between', marginBottom: '15px' }}>
        <button onClick={() => setActiveComponent('CreateUser')}>Create User</button>
        <button onClick={() => setActiveComponent('GetUsers')}>Get User</button>
        <button onClick={() => setActiveComponent('CreateSchool')}>Create School</button>
        <button onClick={() => setActiveComponent('GetSchool')}>Get Schools</button>
        <button onClick={() => setActiveComponent('GetClass')}>Get Class</button>
        <button onClick={() => setActiveComponent('CreateClass')}>Create Class</button>
        <button onClick={() => setActiveComponent('GetStudents')}>Get Students</button>
        <button onClick={() => setActiveComponent('CreateStudent')}>Create Students</button>
      </div>
      <div>
        {activeComponent === 'CreateUser' && <CreateUser />}
        {activeComponent === 'CreateSchool' && <CreateSchool />}
        {activeComponent === 'GetUsers' && <GetUsers />}
        {activeComponent === 'GetSchool' && <GetSchool />}
        {activeComponent === 'GetClass' && <GetClass />}
        {activeComponent === 'CreateClass' && <CreateClass />}
        {activeComponent === 'GetStudents' && <GetStudents />}
        {activeComponent === 'CreateStudent' && <CreateStudent />}
      </div>
    </div>
  );
};

export default Dashboard;
