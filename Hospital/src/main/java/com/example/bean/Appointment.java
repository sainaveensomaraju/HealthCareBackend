package com.example.bean;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.Transient;

@Embeddable
public class Appointment {
	
	@Column(name="appointment_id")
	int id;
	@Transient
	private Patient patient;
	@Transient
	private Pathology pathology;
	@Transient
	private Doctor doctor;
	@Embedded
	private Admin admin;
	@Transient
	private LocalDate admitDate;
	@Transient
	private String reason;
	@Transient
	private List<DiagnosticTest> tests;

}
