import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config'; 
import './hostel.css';

export default function DeleteHostel() {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    try {
      const response = await axios.get(`${config.url}/hostel/viewall`);
      setStudents(response.data);
    } catch (error) {
      setError('Error fetching students');
    }
  };

  const handleDelete = async (sid) => {
    setMessage('');
    setError('');
    try {
      const response = await axios.delete(`${config.url}/hostel/delete`, { params: { sid } });
      setMessage(response.data);
      fetchAllStudents();
    } catch (err) {
      if (err.response && typeof err.response.data === 'string') {
        setError(err.response.data);
      } else {
        setError('Failed to delete student.');
      }
    }
  };

  return (
    <div className="center-container">
      <h3 style={{ color: "black", fontWeight: "bolder" }}>Hostel Students</h3>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <table>
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
            <th>DELETE</th>
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
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No students found in hostel.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}