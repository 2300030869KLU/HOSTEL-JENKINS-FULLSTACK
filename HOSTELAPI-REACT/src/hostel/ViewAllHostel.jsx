import { useEffect, useState } from 'react';
import config from '../../config'; 
import './hostel.css';

export default function ViewAllHostel() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    try {
      const response = await fetch(`${config.url}/hostel/viewall`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div className="center-container">
      <h3 style={{ color: "black", fontWeight: "bolder" }}>All Hostel Students</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>STUDENT ID</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>AGE</th>
            <th>ROOM NO</th>
            <th>ROOM TYPE</th>
            <th>HOSTEL FEE</th>
            <th>MOBILE NO</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
                <td>{student.roomNo}</td>
                <td>{student.roomType}</td>
                <td>{student.hostelFee}</td>
                <td>{student.mobileno}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No students found in hostel.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}