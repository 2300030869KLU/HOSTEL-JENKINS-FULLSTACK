package com.klef.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.sdp.model.Hostel;
import com.klef.sdp.repository.HostelRepository;

@Service
public class HostelServiceImpl implements HostelService {

    @Autowired
    private HostelRepository hostelRepository;

    @Override
    public String addStudent(Hostel hostel) {
        // Check if student with same ID already exists
        if (hostelRepository.existsById(hostel.getId())) {
            return "Student with ID " + hostel.getId() + " already exists!";
        }
        
        // Check if mobile number already exists
        List<Hostel> existingStudents = hostelRepository.findAll();
        for (Hostel existing : existingStudents) {
            if (existing.getMobileno().equals(hostel.getMobileno())) {
                return "Mobile number already registered!";
            }
        }
        
        hostelRepository.save(hostel);
        return "Student Added Successfully";
    }

    @Override
    public List<Hostel> viewAllStudents() {
        return hostelRepository.findAll();
    }

    @Override
    public String deleteStudent(int sid) {
        Optional<Hostel> student = hostelRepository.findById(sid);
        
        if (student.isPresent()) {
            hostelRepository.deleteById(sid);
            return "Student Deleted Successfully";
        } else {
            return "Student ID Not Found";
        }
    }

    @Override
    public String updateStudent(Hostel hostel) {
        Optional<Hostel> existingStudent = hostelRepository.findById(hostel.getId());
        if (existingStudent.isPresent()) {
            // Check if mobile number is being changed and if it conflicts with others
            Hostel currentStudent = existingStudent.get();
            if (!currentStudent.getMobileno().equals(hostel.getMobileno())) {
                List<Hostel> allStudents = hostelRepository.findAll();
                for (Hostel s : allStudents) {
                    if (s.getId() != hostel.getId() && s.getMobileno().equals(hostel.getMobileno())) {
                        return "Mobile number already registered to another student!";
                    }
                }
            }
            
            hostelRepository.save(hostel);
            return "Student updated successfully!";
        } else {
            return "Student not found!";
        }
    }

    @Override
    public Hostel viewStudentById(int sid) {
        return hostelRepository.findById(sid).orElse(null);
    }
}