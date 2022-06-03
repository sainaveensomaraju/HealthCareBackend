package com.example.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Appointment;
import com.example.repository.AppointmentRepository;
import com.example.service.AppointmentService;
@Service
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmentRepository repository;
	@Override
	public Appointment addAppointment(Appointment appointment) {
		
		return this.repository.save(appointment);
	}

	@Override
	public List<Appointment> viewAllAPpointments(String patientName) {
		List<Appointment> resulAppointments=new ArrayList<>();
		List<Appointment> listOfAppointments=this.getAllAppointment();
		for (Appointment appointment : listOfAppointments) {
			if(appointment.getPatient().getFirstName().equalsIgnoreCase(patientName)) {
				resulAppointments.add(appointment);
			}
		}
		return resulAppointments;
	}

	@Override
	public Appointment viewAppointment(int id) {
		
		Optional<Appointment>optional= this.repository.findById(id);
		if(optional.isPresent())
			return optional.get();
		return null;
	}

	@Override
	public Appointment updateAppointment(Appointment appointment) {
		
		return this.repository.save(appointment);
	}

	@Override
	public List<Appointment> getAppointmentList(int centerId, int status) {
		
		return null;
	}

	@Override
	public boolean removeAppointment(int id) {
		
		Appointment appointment =this.viewAppointment(id);
		if(appointment !=null) {
			this.repository.deleteById(id);
			return true;	
		}
		return false;
	}

	@Override
	public List<Appointment> getAllAppointment() {
		
		return this.repository.findAll();
	}

	
	
}
