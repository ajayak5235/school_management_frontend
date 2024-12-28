import { useState, useEffect } from "react";
import { getClass , deleteClass, editClass } from "../services/api";

const GetClass = () => {
  const [getclass, setGetclass] = useState([]);
   
  useEffect(() => {
    fetchClass();
  }, []);

  
    const fetchClass = async () => {
      try {
        const res = await getClass();
        console.log(res.data); // Debugging: Logs the fetched data
        setGetclass(res.data.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
  

  const handleDelete = async (id) => {
      try {
        await deleteClass(id);
        alert("User deleted successfully");
        fetchClass();
        setGetusers((prevUsers) => prevUsers.filter((cla) => cla._id !== id));
      } catch (err) {
        console.error("Error deleting user", err);
      }
    };
  
    const handleEdit = async (id) => {
      const userToEdit = getclass.find((cla) => cla._id === id);
      if (!userToEdit) return;
  
      const updatedClass = {
        name: prompt("Enter the new name:", userToEdit.name) || userToEdit.name,
        capacity: prompt("Enter the new email:", userToEdit.capacity) || userToEdit.capacity,
        school: prompt("Enter the new role:", userToEdit.school) || userToEdit.school,
        resources: prompt("Enter the new School ID:", userToEdit.resources) || userToEdit.resources,
      };
  
      try {
        await editClass(id, updatedClass);
        alert("User updated successfully");
        fetchClass();
        setGetusers((prevUsers) =>
          prevUsers.map((cla) =>
            cla._id === id ? { ...cla, ...updatedClass } : cla
          )
        );
      } catch (err) {
        console.error("Error updating user", err);
      }
    };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'60px'}}>
      <h3>Schools List</h3>
      {getclass.length > 0 ? (
        <table border="1" style={{ width: "80%", }}>
          <thead style={{backgroundColor:'darkgreen', color:'white'}}>
            <tr>
                <th>Sr.No</th>
              <th>Name</th>
              <th>Capacity</th>
              <th>School</th>
              <th>Resources</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{textAlign:'center',border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',}}>
            {getclass.map((cla, index) => (
              <tr key={cla._id}>
                <td>{index+1}</td>
                <td>{cla.name}</td>
                <td>{cla.capacity}</td>
                <td>{cla.school}</td>
                <td>{cla.resources}</td>
                <td>
                  <button
                    onClick={() => handleEdit(cla._id)}
                    style={{ margin: "1px", marginRight:'8px', backgroundColor: "green" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cla._id)}
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
        <p>No Class found</p>
      )}
    </div>
  );
};

export default GetClass;
