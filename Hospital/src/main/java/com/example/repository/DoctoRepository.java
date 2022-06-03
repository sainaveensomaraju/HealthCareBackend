package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bean.Doctor;
@Repository
public interface DoctoRepository extends JpaRepository<Doctor, Integer>{
	
	public Doctor findByUserName(String username);

}