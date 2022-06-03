package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Patient;
import com.example.repository.PatientRepository;

@Service
public class PatientService {
	@Autowired
	private PatientRepository repo;

	public List<Patient> listAll() {
		return this.repo.findAll();
	}

	public Patient addPatientAppointment(Patient patient) {
		return repo.save(patient);
	}

	public Patient findPatient(int id) {
		Optional<Patient> optional = this.repo.findById(id);
		if (optional.isPresent())
			return optional.get();
		else
			return null;
	}

	public Patient updatePatientAppointment(Patient patient) {
		return this.repo.save(patient);

	}

	public boolean deletePatient(int  id) {
		Patient patient2=this.findPatient(id);
		if(patient2 != null) {
			this.repo.deleteById(id);
			return true;
		}
			
		return false;
	}

	public Patient getPatientByName(String name) {
		return this.repo.findByUserName(name);
	}
	
}
