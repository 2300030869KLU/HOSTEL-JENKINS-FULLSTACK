package com.klef.sdp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hostel_table")
public class Hostel {

    @Id
    @Column(name = "student_id")
    private int id;
    
    @Column(name = "student_name", nullable = false)
    private String name;
    
    @Column(name = "student_gender", nullable = false)
    private String gender;
    
    @Column(name = "student_age", nullable = false)
    private int age;
    
    @Column(name = "room_no", nullable = false)
    private String roomNo;
    
    @Column(name = "room_type", nullable = false)
    private String roomType;
    
    @Column(name = "hostel_fee", nullable = false)
    private String hostelFee; // Changed from double to String
    
    @Column(name = "student_mobileno", nullable = false, unique = true)
    private String mobileno;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public String getHostelFee() { 
        return hostelFee;
    }

    public void setHostelFee(String hostelFee) { 
        this.hostelFee = hostelFee;
    }

    public String getMobileno() {
        return mobileno;
    }

    public void setMobileno(String mobileno) {
        this.mobileno = mobileno;
    }
}