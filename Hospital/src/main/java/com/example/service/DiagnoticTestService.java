package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.DiagnosticTest;
import com.example.repository.DiagnoticTestRepository;

@Service
public class DiagnoticTestService {
	
	@Autowired
	private DiagnoticTestRepository repository;
	
	public DiagnosticTest addTest(DiagnosticTest diagnosticTest) {
		return this.repository.save(diagnosticTest);
	}
	
	public List<DiagnosticTest> viewAllTests(){
		return this.repository.findAll();
	}
	
	public boolean removeTest(int id) {
		DiagnosticTest diagnosticTest=this.getById(id);
		if(diagnosticTest != null) {
			this.repository.deleteById(id);
			return true;
		}
		return false;
	}
	
	public DiagnosticTest getById(int id) {
		Optional<DiagnosticTest> optional=this.repository.findById(id);
		if(optional.isPresent())
			return optional.get();
					
		return null;
	}
	
	

}
