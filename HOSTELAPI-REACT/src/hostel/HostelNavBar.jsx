import { Route, Routes, Link, Navigate } from 'react-router-dom'
import AddHostel from './AddHostel'
import ViewAllHostel from './ViewAllHostel'
import DeleteHostel from './DeleteHostel'
import UpdateHostel from './UpdateHostel'
import './hostel.css'

export default function HostelNavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-title">HOSTEL MANAGEMENT SYSTEM</div>
        <div className="navbar-buttons">
          <button><Link to="/addhostel">ADD STUDENT</Link></button>
          <button><Link to="/viewallhostel">VIEW ALL STUDENTS</Link></button>
          <button><Link to="/updatehostel">UPDATE STUDENT</Link></button>
          <button><Link to="/deletehostel">DELETE STUDENT</Link></button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/addhostel" replace />} />
        <Route path="/addhostel" element={<AddHostel />} />
        <Route path="/viewallhostel" element={<ViewAllHostel />} />
        <Route path="/deletehostel" element={<DeleteHostel />} />
        <Route path="/updatehostel" element={<UpdateHostel />} />
      </Routes>
    </div>
  );
}