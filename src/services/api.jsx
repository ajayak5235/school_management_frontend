import axios from 'axios';

const API_URL = 'https://school-system-phi.vercel.app/api';

const api = axios.create({
  baseURL: API_URL,
});

// User API
export const signup = (data) => api.post('/users/register', data);
export const login = (data) => api.post('/users/login', data);
// export const updateProfile = (data) => api.put('/users/profile', data);
export const createUser = (data) => {
  const token = localStorage.getItem('token'); 
  console.log('token:', token);
  return api.post('/users',data, {  
    headers: { Authorization: token },
  });
};


export const createSchool = (data) => {
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  console.log('token:', token);
  return api.post('/schools', data,{  // Use api.get instead of axios.get
    headers: { Authorization: token },
  });
};
// console.log(getUser)
// // Connection API
// export const requestConnection = (data) => api.post('/connections/request', data);

export const getUsers = () => {
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  console.log('token:', token);
  return api.get('/users', {  // Use api.get instead of axios.get
    headers: { Authorization: token },
  });
};

export const getSchools = () => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    console.log('token:', token);
    return api.get('/schools', {  // Use api.get instead of axios.get
      headers: { Authorization: token },
    });
  };
// export const requestConnectionAll = (data) => api.post('/connections/all', data);

export const deleteUser = (id) => {
    const token = localStorage.getItem('token');
      return api.delete(`/users/${id}`,{
        headers: { Authorization: token },
      });
  };
  
  export const editUser = (id, updatedData) => {
    const token = localStorage.getItem('token');
    return api.put(`users/${id}`, updatedData,{
        headers: { Authorization: token },
    });
  };

  export const getClass = () => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    console.log('token:', token);
    return api.get('/classrooms', {  // Use api.get instead of axios.get
      headers: { Authorization: token },
    });
  };

  export const postClass = (data) => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    console.log('token:', token);
    return api.post('/classrooms', data, {  // Use api.get instead of axios.get
      headers: { Authorization: token },
    });
  };

  export const deleteClass = (id) => {
    const token = localStorage.getItem('token');
      return api.delete(`/classrooms/${id}`,{
        headers: { Authorization: token },
      });
  };
  
  export const editClass = (id, updatedData) => {
    const token = localStorage.getItem('token');
    return api.put(`classrooms/${id}`, updatedData,{
        headers: { Authorization: token },
    });
  };

  export const getStudents = () => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    console.log('token:', token);
    return api.get('/students', {  // Use api.get instead of axios.get
      headers: { Authorization: token },
    });
  };

  export const postStudent = (data) => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    console.log('token:', token);
    return api.post('/students', data, {  // Use api.get instead of axios.get
      headers: { Authorization: token },
    });
  };

  export const deleteStudent = (id) => {
    const token = localStorage.getItem('token');
      return api.delete(`/students/${id}`,{
        headers: { Authorization: token },
      });
  };
  
  export const editStudent = (id, updatedData) => {
    const token = localStorage.getItem('token');
    return api.put(`students/${id}`, updatedData,{
        headers: { Authorization: token },
    });
  };