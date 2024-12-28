



// import { useState, useEffect } from "react";
// import { getUsers, deleteUser, editUser } from "../services/api";

// const GetUsers = () => {
//   const [getusers, setGetusers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await getUsers();
//         console.log(res.data); // Debugging: Logs the fetched data
//         setGetusers(res.data);
//       } catch (err) {
//         console.error("Error fetching users", err);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteUser(id);
//       alert("User deleted successfully");
//       // Refresh the user list after deletion
//       setGetusers((prevUsers) => prevUsers.filter((user) => user.id !== id));
//     } catch (err) {
//       console.error("Error deleting user", err);
//     }
//   };

//   const handleEdit = async (id) => {
//     const newName = prompt("Enter the new name for the user:");
//     if (newName) {
//       try {
//         await editUser(id, { name: newName });
//         alert("User updated successfully");
//         // Refresh the user list after editing
//         setGetusers((prevUsers) =>
//           prevUsers.map((user) =>
//             user.id === id ? { ...user, name: newName } : user
//           )
//         );
//       } catch (err) {
//         console.error("Error updating user", err);
//       }
//     }
//   };

//   return (
//     <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'60px'}}>
//       <h1>Users List</h1>
//       {getusers.length > 0 ? (
//         <table border="1" style={{ width: "80%", }}>
//           <thead style={{backgroundColor:'red'}}>
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>School ID</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody style={{border: '1px solid #ccc',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           backgroundColor: '#f9f9f9',}}>
//             {getusers.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index+1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.role}</td>
//                 <td>{user.schoolId}</td>
//                 <td>
//                   <button onClick={() => handleEdit(user._id)} style={{margin:'1px', backgroundColor:'green'}}>Edit</button>
//                   <button onClick={() => handleDelete(user._id)} style={{margin:'1px',backgroundColor:'red'}}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };

// export default GetUsers;




import { useState, useEffect } from "react";
import { getUsers, deleteUser, editUser } from "../services/api";

const GetUsers = () => {
  const [getusers, setGetusers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      console.log(res.data); // Debugging: Logs the fetched data
      setGetusers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      alert("User deleted successfully");
      setGetusers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  const handleEdit = async (id) => {
    const userToEdit = getusers.find((user) => user._id === id);
    if (!userToEdit) return;

    const updatedUser = {
      name: prompt("Enter the new name:", userToEdit.name) || userToEdit.name,
      email: prompt("Enter the new email:", userToEdit.email) || userToEdit.email,
      role: prompt("Enter the new role:", userToEdit.role) || userToEdit.role,
      schoolId: prompt("Enter the new School ID:", userToEdit.schoolId) || userToEdit.schoolId,
    };

    try {
      await editUser(id, updatedUser);
      alert("User updated successfully");
      setGetusers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, ...updatedUser } : user
        )
      );
    } catch (err) {
      console.error("Error updating user", err);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "60px" }}>
      <h3>Users List</h3>
      {getusers.length > 0 ? (
        <table border="1" style={{ width: "80%" }}>
          <thead style={{ backgroundColor: "darkgreen" }}>
            <tr style={{color:'white'}}>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>School ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
            }}
          >
            {getusers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.schoolId}</td>
                <td>
                  <button
                    onClick={() => handleEdit(user._id)}
                    style={{ margin: "1px", backgroundColor: "green" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    style={{ margin: "1px", backgroundColor: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default GetUsers;
