package com.example.bean;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Embedded
	private Patient patient;
	@Embedded
	private Pathology pathology;
	@Embedded
	private Doctor doctor;
	@Embedded
	private Admin admin;
	
	private LocalDate admitDate;
	
	private String reason;
	@Embedded
	private List<DiagnosticTest> tests;

	
	
	
	

	public List<DiagnosticTest> getTests() {
		return tests;
	}

	public void setTests(List<DiagnosticTest> tests) {
		this.tests = tests;
	}

	public LocalDate getAdmitDate() {
		return admitDate;
	}

	public void setAdmitDate(LocalDate admitDate) {
		this.admitDate = admitDate;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}


	private String testRessult;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Pathology getPathology() {
		return pathology;
	}

	public void setPathology(Pathology pathology) {
		this.pathology = pathology;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	

	public String getTestRessult() {
		return testRessult;
	}

	public void setTestRessult(String testRessult) {
		this.testRessult = testRessult;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", patient=" + patient + ", pathology=" + pathology + ", doctor=" + doctor
				+ ", admin=" + admin + ", admitDate=" + admitDate + ", reason=" + reason
				+ ", testRessult=" + testRessult + "]";
	}

	public Appointment(int id, Patient patient, Pathology pathology, Doctor doctor, Admin admin, LocalDate admitDate,
			String reason, String testRessult) {
		super();
		this.id = id;
		this.patient = patient;
		this.pathology = pathology;
		this.doctor = doctor;
		this.admin = admin;
		this.admitDate = admitDate;
		this.reason = reason;
		this.admitDate = LocalDate.now();
		this.testRessult = testRessult;
	}

	public Appointment() {
		super();
		this.admitDate=LocalDate.now();
	}

	public Appointment(int id) {
		super();
		this.id = id;
		this.admitDate=LocalDate.now();
	}

	
	

}
