package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Admin;
import com.example.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository repository;
	
	public Admin getById(int id) {
	Optional<Admin> optional=this.repository.findById(id);
		if(optional.isPresent())
			return optional.get();
		return null;
		
	}

	public Admin addAdmin(Admin admin) {
		return this.repository.save(admin);
	}
	
	public List<Admin> getAll(){
		return this.repository.findAll();
	}
	
	public boolean validateAdmin(String username) {
	Admin admin =this.repository.findByUserName(username);
	if(admin.getUserName().equalsIgnoreCase(username)) {
		return true;
	}
	return false;
	}
	
	public Admin findByName(String username) {
	Admin admin =this.repository.findByUserName(username);
	if(admin.getUserName().equalsIgnoreCase(username)) {
		return admin;
	}
	return null;
	}
	
	public Admin adminById(int id) {
		Optional<Admin> optional=this.repository.findById(id);
		if(optional.isPresent())
			return optional.get();
		return null;
	}
}
