import { useState, useEffect } from "react";
import { getStudents , deleteStudent, editStudent } from "../services/api";

const GetStudents = () => {
  const [getstudent, setGetstudent] = useState([]);
   
  useEffect(() => {
    fetchStudents();
  }, []);

  
    const fetchStudents = async () => {
      try {
        const res = await getStudents();
        console.log(res.data); // Debugging: Logs the fetched data
        setGetstudent(res.data.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
  

  const handleDelete = async (id) => {
      try {
        await deleteStudent(id);
        alert("User deleted successfully");
        fetchStudents();
        setGetusers((prevUsers) => prevUsers.filter((student) => student._id !== id));
      } catch (err) {
        console.error("Error deleting user", err);
      }
    };
  
    const handleEdit = async (id) => {
      const userToEdit = getstudent.find((student) => student._id === id);
      if (!userToEdit) return;
  
      const updatedStudent = {
        name: prompt("Enter the new name:", userToEdit.name) || userToEdit.name,
        age: prompt("Enter the new email:", userToEdit.age) || userToEdit.age,
        grade: prompt("Enter the new School ID:", userToEdit.grade) || userToEdit.grade,
        school: prompt("Enter the new role:", userToEdit.school) || userToEdit.school,
      };
  
      try {
        await editStudent(id, updatedStudent);
        alert("User updated successfully");
        fetchStudents();
        getStudents((prevUsers) =>
          prevUsers.map((student) =>
            student._id === id ? { ...student, ...updatedStudent } : student
          )
        );
      } catch (err) {
        console.error("Error updating user", err);
      }
    };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'60px'}}>
      <h3>Student List</h3>
      {getstudent.length > 0 ? (
        <table border="1" style={{ width: "80%", }}>
          <thead style={{backgroundColor:'darkgreen', color:'white'}}>
            <tr>
                <th>Sr.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>School</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{textAlign:'center',border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',}}>
            {getstudent.map((student, index) => (
              <tr key={student._id}>
                <td>{index+1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>{student.school}</td>
                <td>
                  <button
                    onClick={() => handleEdit(student._id)}
                    style={{ margin: "1px", marginRight:'8px', backgroundColor: "green" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student._id)}
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
        <p>No Student found</p>
      )}
    </div>
  );
};

export default GetStudents;
