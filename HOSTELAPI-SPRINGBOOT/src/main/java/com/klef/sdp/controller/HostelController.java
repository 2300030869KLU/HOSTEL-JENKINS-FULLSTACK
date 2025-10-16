package com.klef.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klef.sdp.model.Hostel;
import com.klef.sdp.service.HostelService;

@RestController
@RequestMapping("/hostel")
@CrossOrigin("*")
public class HostelController {

    @Autowired
    private HostelService hostelService;

    @GetMapping("/")
    public String home() {
        return "Hostel Management System";
    }

    @PostMapping("/add")
    public ResponseEntity<String> addStudent(@RequestBody Hostel hostel) {
        try {
            String output = hostelService.addStudent(hostel);
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Adding Student Failed: " + e.getMessage());
        }
    }

    @GetMapping("/viewall")
    public ResponseEntity<List<Hostel>> viewAllStudents() {
        List<Hostel> students = hostelService.viewAllStudents();
        return ResponseEntity.ok(students);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteStudent(@RequestParam int sid) {
        try {
            String output = hostelService.deleteStudent(sid);
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to Delete Student ... !!");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateStudent(@RequestBody Hostel hostel) {
        try {
            String output = hostelService.updateStudent(hostel);
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to Update Student ... !!");
        }
    }

    @GetMapping("/viewbyid")
    public ResponseEntity<Hostel> viewStudentById(@RequestParam int sid) {
        Hostel student = hostelService.viewStudentById(sid);
        if (student != null) {
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}