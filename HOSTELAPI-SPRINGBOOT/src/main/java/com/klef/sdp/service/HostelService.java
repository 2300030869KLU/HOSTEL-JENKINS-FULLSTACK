package com.klef.sdp.service;

import java.util.List;
import com.klef.sdp.model.Hostel;

public interface HostelService {
    public String addStudent(Hostel hostel);
    public List<Hostel> viewAllStudents();
    public String deleteStudent(int sid);
    public String updateStudent(Hostel hostel);
    public Hostel viewStudentById(int sid);
}