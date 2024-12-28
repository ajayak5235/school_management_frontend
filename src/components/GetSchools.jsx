import { useState, useEffect } from "react";
import { getSchools } from "../services/api";

const GetSchool = () => {
  const [getschool, setGetschool] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await getSchools();
        console.log(res.data); // Debugging: Logs the fetched data
        setGetschool(res.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
    fetchSchools();
  }, []);

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'60px'}}>
      <h3>Schools List</h3>
      {getschool.length > 0 ? (
        <table border="1" style={{ width: "80%", }}>
          <thead style={{backgroundColor:'darkgreen', color:'white'}}>
            <tr>
                <th>Sr.No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
            
            </tr>
          </thead>
          <tbody style={{border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',}}>
            {getschool.map((school, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{school.name}</td>
                <td>{school.address}</td>
                <td>{school.contact}</td>
            
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Schools found</p>
      )}
    </div>
  );
};

export default GetSchool;
