package com.example.service;

import java.util.List;

import com.example.bean.Appointment;

public interface AppointmentService {

	
	public Appointment addAppointment(Appointment appointment);
	
	public List<Appointment> viewAllAPpointments(String patientName);
	
	public Appointment viewAppointment(int id);
	
	public Appointment updateAppointment(Appointment appointment);
	
	public List<Appointment> getAppointmentList(int centerId,int status);
	
	public boolean removeAppointment(int id);
	
	public List<Appointment> getAllAppointment();
;}
