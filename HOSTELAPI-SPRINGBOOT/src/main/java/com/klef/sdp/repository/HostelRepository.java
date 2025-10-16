package com.klef.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.sdp.model.Hostel;

@Repository
public interface HostelRepository extends JpaRepository<Hostel, Integer> {
}