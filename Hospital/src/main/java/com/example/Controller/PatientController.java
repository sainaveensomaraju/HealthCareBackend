package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bean.Patient;

import com.example.service.PatientService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PatientController {

	@Autowired
	private PatientService service;
	@PostMapping("/admin/addPatient")
	public Patient addPatient(@RequestBody Patient patient) {
		return this.service.addPatientAppointment(patient);
	}
	@GetMapping("/amdin/getAllPatients")
	public List<Patient> getAllPatient(){
		return this.service.listAll();
	}
	@GetMapping("/admin/getbyid/{id}")
	public Patient getPatientById(@PathVariable (name="id") int id) {
		return this.service.findPatient(id);
	}
	@GetMapping("/admin/getbyname/{name}")
	public Patient getPatientByName(@PathVariable (name="name") String name) {
		return this.service.getPatientByName(name);
	}
	
	@DeleteMapping("/admin/delete/{id}")
	public boolean delete(@PathVariable(name="id")int id) {
		return this.service.deletePatient(id);
	}

	

	
}
