import { useState } from 'react';
import axios from 'axios';
import config from '../../config'; 
import './hostel.css'

export default function AddHostel() {
  const [formData, setFormData] = useState({
    id: '',
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

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
        const response = await axios.post(`${config.url}/hostel/add`, formData);
        if (response.status === 200) {
            setMessage(response.data);
            setFormData({
                id: '',
                name: '',
                gender: 'MALE',
                age: '',
                roomNo: '',
                roomType: 'AC',
                hostelFee: 'PAID',
                mobileno: ''
            });
        }
    } catch (error) {
      if(error.response) {
        // Handle different types of error responses
        if (typeof error.response.data === 'string') {
          setError(error.response.data);
        } else if (error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError('Failed to add student. Please try again.');
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  
  return (
    <div className="center-container">
      <div className="form-box">
        <h3 className="form-title">Add Student to Hostel</h3>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Student ID</label>
            <input type="number" id="id" value={formData.id} onChange={handleChange} required />
          </div>
          <div>
            <label>Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
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
            <input type="number" id="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div>
            <label>Room No</label>
            <input type="text" id="roomNo" value={formData.roomNo} onChange={handleChange} required />
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
            <input type="text" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
          </div>
          <button type="submit">ADD STUDENT</button>
        </form>
      </div>
    </div>
  );
}