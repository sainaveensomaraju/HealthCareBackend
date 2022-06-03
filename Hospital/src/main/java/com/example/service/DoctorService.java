package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Doctor;
import com.example.repository.DoctoRepository;


@Service
public class DoctorService {

	@Autowired
	private DoctoRepository repo;

	public List<Doctor> listAll() {
		return this.repo.findAll();
	}

	public Doctor save(Doctor doctoradd) {
		return this.repo.save(doctoradd);
	}

	public Doctor getById(int id) {
	Optional<Doctor> optional=this.repo.findById(id);
	if(optional.isPresent())
		return optional.get();
	
	return null;
				
	}

	public void delete(int id) {
		repo.deleteById(id);
	 
	}
	
	public Doctor getbyUserName(String username) {
		return this.repo.findByUserName(username);
	}
	
	public void deleteById(int id) {
		this.repo.deleteById(id);
	}
	


}