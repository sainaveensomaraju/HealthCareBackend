package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Role;
import com.example.repository.RoleRepository;

@Service
public class RoleService {
	@Autowired
	private RoleRepository repository;
	
	public Role addRole(Role role) {
		return this.repository.save(role); 
	}

	public List<Role> getAllRoles(){
		return this.repository.findAll();
	}
	public  Role getRoleById(int id) {
		Optional<Role> optional= this.repository.findById(id);
		if(optional.isPresent())
			return optional.get();
		return null;
	}
}
