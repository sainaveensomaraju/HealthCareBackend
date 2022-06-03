package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bean.Admin;
@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	public Admin findByUserName(String name);

}
