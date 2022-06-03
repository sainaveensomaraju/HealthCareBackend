package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bean.Patient;


@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {

	public Patient findByUserName(String name);
}
