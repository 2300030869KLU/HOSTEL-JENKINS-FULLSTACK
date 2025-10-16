import { useState } from 'react';
import axios from 'axios';
import config from '../../config'; 
import './hostel.css';

export default function UpdateHostel() {
  const [studentId, setStudentId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    gender: 'MALE',
    age: '',
    roomNo: '',
    roomType: 'AC',
    hostelFee: 'PAID',
    mobileno: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [found, setFound] = useState(false);

  const handleIdChange = (e) => {
    setStudentId(e.target.value);
    setFound(false);
    setMessage('');
    setError('');
  };

  const fetchStudent = async () => {
    setMessage('');
    setError('');
    try {
      const response = await axios.get(`${config.url}/hostel/viewbyid`, { params: { sid: studentId } });
      if (response.data) {
        setFormData({
          name: response.data.name,
          gender: response.data.gender,
          age: response.data.age,
          roomNo: response.data.roomNo,
          roomType: response.data.roomType,
          hostelFee: response.data.hostelFee,
          mobileno: response.data.mobileno
        });
        setFound(true);
        setError('');
      } else {
        setError('Student not found.');
        setFound(false);
      }
    } catch (err) {
      setError('Error fetching student.');
      setFound(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const payload = {
        id: parseInt(studentId),
        ...formData
      };
      const response = await axios.put(`${config.url}/hostel/update`, payload);
      setMessage(response.data);
      setFound(false);
      setStudentId('');
      setFormData({
        name: '',
        gender: 'MALE',
        age: '',
        roomNo: '',
        roomType: 'AC',
        hostelFee: 'PAID',
        mobileno: ''
      });
    } catch (err) {
      if (err.response && typeof err.response.data === 'string') {
        setError(err.response.data);
      } else {
        setError('Failed to update student.');
      }
    }
  };

  return (
    <div className="center-container">
      <div className="form-box">
        <h3 className="form-title">Update Student</h3>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <div style={{ marginBottom: '16px' }}>
          <label>Enter Student ID</label>
          <input
            type="number"
            value={studentId}
            onChange={handleIdChange}
            placeholder="Student ID"
            required
          />
          <button
            className="fetch-button"
            type="button"
            onClick={fetchStudent}
            disabled={!studentId}
          >
            Fetch
          </button>
        </div>
        {found && (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select id="gender" value={formData.gender} onChange={handleChange} required>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div>
              <label>Age</label>
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Room No</label>
              <input
                type="text"
                id="roomNo"
                value={formData.roomNo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Room Type</label>
              <select id="roomType" value={formData.roomType} onChange={handleChange} required>
                <option value="AC">AC</option>
                <option value="NON-AC">NON-AC</option>
                <option value="DELUX">DELUX</option>
              </select>
            </div>
            <div>
              <label>Hostel Fee</label>
              <select id="hostelFee" value={formData.hostelFee} onChange={handleChange} required>
                <option value="PAID">PAID</option>
                <option value="DUE">DUE</option>
              </select>
            </div>
            <div>
              <label>Mobile No</label>
              <input
                type="text"
                id="mobileno"
                value={formData.mobileno}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">UPDATE STUDENT</button>
          </form>
        )}
      </div>
    </div>
  );
}