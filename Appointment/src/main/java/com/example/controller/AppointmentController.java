package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.bean.Admin;
import com.example.bean.Appointment;
import com.example.bean.Doctor;
import com.example.bean.InputAppointment;
import com.example.bean.OutputResponse;
import com.example.bean.Pathology;
import com.example.bean.Patient;
import com.example.service.AppointmentService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AppointmentController {
	@Autowired
	private AppointmentService service;
	static RestTemplate restTemplate = new RestTemplate();
	static String url="";
//===============================================ADD=========================================
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/{username}/add")
	public OutputResponse addAppointment(@RequestBody InputAppointment inputAppointment,@PathVariable(name="username")String adminName) {
		
		
		
		Appointment appointment=new Appointment();
		appointment.setReason(inputAppointment.getReason());
		
		
		url="http://localhost:9051/admin/getbyid/"+inputAppointment.getPatientId();
		Patient patient=restTemplate.getForObject(url,Patient.class);
		appointment.setPatient(patient);
		System.out.println(patient);
		
		url="http://localhost:9051/admin/findByUsername/"+adminName;
		Admin admin =restTemplate.getForObject(url, Admin.class);
		appointment.setAdmin(admin);
		System.out.println(admin);
		
		url="http://localhost:9051/"+adminName+"/searchid/"+inputAppointment.getDoctorId();
		Doctor doctor=restTemplate.getForObject(url, Doctor.class);
		appointment.setDoctor(doctor);
		System.out.println(doctor);
		
		url="http://localhost:9051/pathologybyid/"+inputAppointment.getPatientId();
		Pathology pathology=restTemplate.getForObject(url, Pathology.class);
		appointment.setPathology(pathology);
		System.out.println(pathology);
		
		this.service.addAppointment(appointment);
		
		//===============================================
		
		OutputResponse outputResponse=new OutputResponse();
		outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
		outputResponse.setPatientName(appointment.getPatient().getFirstName());
		outputResponse.setPatologyCenterName(appointment.getPathology().getName());
		outputResponse.setReason(appointment.getReason());
		outputResponse.setAdmitDate(appointment.getAdmitDate());
		outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
		
		return outputResponse;
		
	}
	
//============================================= get list of appointments==========================
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{username}/appointbypat")
	public List<Appointment> viewAppointmentsOfPatient(@PathVariable(name="username")String name){
		
		
		return this.service.viewAllAPpointments(name);
	}
	//======================================getAll with loading==============================
	public  List<Appointment> allAppointements(){
		List<Appointment> allAppointments=this.service.getAllAppointment();
		//List<OutputResponse>outputResponses=new ArrayList<OutputResponse>();
		
		
		for (Appointment appointment : allAppointments) {
			
			url="http://localhost:9051/admin/getbyid/"+appointment.getPatient().getId();
			Patient patient=restTemplate.getForObject(url,Patient.class);
			appointment.setPatient(patient);
			
			url="http://localhost:9051/admin/adminbyid//"+appointment.getAdmin().getId();
			Admin admin =restTemplate.getForObject(url, Admin.class);
			appointment.setAdmin(admin);
			
			url="http://localhost:9051/searchid/"+appointment.getDoctor().getId();
			Doctor doctor=restTemplate.getForObject(url, Doctor.class);
			appointment.setDoctor(doctor);
			
			url="http://localhost:9051/pathologybyid/"+appointment.getPathology().getId();
			Pathology pathology=restTemplate.getForObject(url, Pathology.class);
			appointment.setPathology(pathology);
			
			
		}
		return allAppointments;
	}
	//================get appointment for patient name======================
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/filterBypatient/{patienNmae}")
	public List<OutputResponse> filterByPatient(@PathVariable(name="patienNmae") String name){
//		url="http://localhost:9051/admin/getbyname/"+name;
//		Patient patient = restTemplate.getForObject(url, Patient.class);
//		
		List<Appointment> allAppointments=allAppointements();
		List<Appointment> filterList=new  ArrayList<Appointment>();
		
		for (Appointment appointment : allAppointments) {
			if(appointment.getPatient().getUserName().equalsIgnoreCase(name)) {
				filterList.add(appointment);
			}
				
			
		}
	List<OutputResponse> outputResponses=new ArrayList<OutputResponse>();
	for (Appointment appointment : filterList) {
		OutputResponse outputResponse=new OutputResponse();
		outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
		outputResponse.setPatientName(appointment.getPatient().getFirstName());
		outputResponse.setPatologyCenterName(appointment.getPathology().getName());
		outputResponse.setReason(appointment.getReason());
		outputResponse.setAdmitDate(appointment.getAdmitDate());
		outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
		outputResponses.add(outputResponse);
	}
		
		return outputResponses;
	}
	//=========================== filter by doctors patients==============================
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/filterByDoctor/{id}")
	public List<OutputResponse> filterByDoctor(@PathVariable(name="id") int id){
//		url="http://localhost:9051/admin/getbyname/"+name;
//		Patient patient = restTemplate.getForObject(url, Patient.class);
//		
		
		List<Appointment> allAppointments=this.allAppointements();
		List<Appointment> filterList=new  ArrayList<Appointment>();
		
		for (Appointment appointment : allAppointments) {
			
			if(appointment.getDoctor().getId()==id)
				filterList.add(appointment);
			
		}
	List<OutputResponse> outputResponses=new ArrayList<OutputResponse>();
	for (Appointment appointment : filterList) {
		OutputResponse outputResponse=new OutputResponse();
		outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
		outputResponse.setPatientName(appointment.getPatient().getFirstName());
		outputResponse.setPatologyCenterName(appointment.getPathology().getName());
		outputResponse.setReason(appointment.getReason());
		outputResponse.setAdmitDate(appointment.getAdmitDate());
		outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
		outputResponses.add(outputResponse);
	}
		
		return outputResponses;
	}
	//================================== filter by pathology appointments====================
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/filterByPathology/{id}")
	public List<OutputResponse> filterByLab(@PathVariable(name="id") int name){

		List<Appointment> allAppointments=this.allAppointements();
		List<Appointment> filterList=new  ArrayList<Appointment>();
		
		for (Appointment appointment : allAppointments) {
			
			if(appointment.getPathology().getId()==name)
				filterList.add(appointment);
			
		}
	List<OutputResponse> outputResponses=new ArrayList<OutputResponse>();
	for (Appointment appointment : filterList) {
		OutputResponse outputResponse=new OutputResponse();
		outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
		outputResponse.setPatientName(appointment.getPatient().getFirstName());
		outputResponse.setPatologyCenterName(appointment.getPathology().getName());
		outputResponse.setReason(appointment.getReason());
		outputResponse.setAdmitDate(appointment.getAdmitDate());
		outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
		outputResponses.add(outputResponse);
	}
		
		return outputResponses;
	}
	
	
	//================================================	UPADTE ================================
	@PutMapping("/update/{adminname}/{id}")
	public Appointment updateAppointment(@RequestBody InputAppointment inputAppointment,@PathVariable() int id,@PathVariable(name="adminname")String name) {
		Appointment appointment=this.service.viewAppointment(id);
		if(appointment !=null) {
			url="http://localhost:9051/admin/getbyid/"+inputAppointment.getPatientId();
			appointment.setReason(inputAppointment.getReason());
			
			Patient patient=restTemplate.getForObject(url,Patient.class);
			appointment.setPatient(patient);
			
			url="http://localhost:9051/findByUsername/"+name;
			Admin admin =restTemplate.getForObject(url, Admin.class);
			appointment.setAdmin(admin);
			
			url="http://localhost:9051/"+admin.getUserName()+"/searchid/"+inputAppointment.getDoctorId();
			Doctor doctor=restTemplate.getForObject(url, Doctor.class);
			appointment.setDoctor(doctor);
			
			url="http://localhost:9051/pathologybyid/"+inputAppointment.getPatientId();
			Pathology pathology=restTemplate.getForObject(url, Pathology.class);
			appointment.setPathology(pathology);
				
		}
		return null;
	}
	
	//====================================== DELETE =========================================
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/remove/{id}")
	public boolean removeAppointment(@PathVariable(name="id") int id) {
		
		return this.service.removeAppointment(id);
	}
	//====================================	Single appoitnement	===============================
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/view/{id}")
	public OutputResponse viewAppointmentById(@PathVariable(name="id") int byid) {
		
		
		Appointment appointment=this.service.viewAppointment(byid);
		
		url="http://localhost:9051/admin/getbyid/"+appointment.getPatient().getId();
		appointment.setReason(appointment.getReason());
		
		Patient patient=restTemplate.getForObject(url,Patient.class);
		appointment.setPatient(patient);
		
		url="http://localhost:9051/admin/adminbyid/"+appointment.getAdmin().getId();
		Admin admin =restTemplate.getForObject(url, Admin.class);
		appointment.setAdmin(admin);
		
		url="http://localhost:9051/searchid/"+appointment.getDoctor().getId();
		Doctor doctor=restTemplate.getForObject(url, Doctor.class);
		appointment.setDoctor(doctor);
		
		url="http://localhost:9051/pathologybyid/"+appointment.getPathology().getId();
		Pathology pathology=restTemplate.getForObject(url, Pathology.class);
		appointment.setPathology(pathology);
		
		OutputResponse outputResponse=new OutputResponse();
		outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
		outputResponse.setPatientName(appointment.getPatient().getFirstName());
		outputResponse.setPatologyCenterName(appointment.getPathology().getName());
		outputResponse.setReason(appointment.getReason());
		outputResponse.setAdmitDate(appointment.getAdmitDate());
		outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
		
		
		
		return outputResponse;
		
	}
	//==================================== view all only admin can see====================
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/viewAll")
	public List<OutputResponse> viewAllAppointments(){
		List<OutputResponse>list=new ArrayList<OutputResponse>();
		List<Appointment> appointments=this.allAppointements();
		System.out.println(appointments);
		for (Appointment appointment : appointments) {
		
			OutputResponse outputResponse=new OutputResponse();
			outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
			outputResponse.setPatientName(appointment.getPatient().getFirstName());
			outputResponse.setPatologyCenterName(appointment.getPathology().getName());
			outputResponse.setReason(appointment.getReason());
			outputResponse.setAdmitDate(appointment.getAdmitDate());
			outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
			list.add(outputResponse);
			
		}
		return list;
		
	}
	@GetMapping("/getByPathologyUserName/{centername}")
	public List<OutputResponse> getListOfAppointmentForCenter(@PathVariable(name="centername")String name){
		List<OutputResponse> outputResponses=new ArrayList<OutputResponse>();
		List<Appointment>appointments=this.allAppointements();
		for (Appointment appointment : appointments) {
			
			if(appointment.getPathology().getUserName().equalsIgnoreCase(name)) {
				OutputResponse outputResponse=new OutputResponse();
				outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
				outputResponse.setPatientName(appointment.getPatient().getFirstName());
				outputResponse.setPatologyCenterName(appointment.getPathology().getName());
				outputResponse.setReason(appointment.getReason());
				outputResponse.setAdmitDate(appointment.getAdmitDate());
				outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
				outputResponses.add(outputResponse);
				
			}
					
		}
		return outputResponses;
	}
	@GetMapping("/getByDoctorUserName/{doctorusername}")
	public List<OutputResponse> getListOfAppointmentForDoctor(@PathVariable(name="doctorusername")String name){
		List<OutputResponse> outputResponses=new ArrayList<OutputResponse>();
		List<Appointment>appointments=this.allAppointements();
		for (Appointment appointment : appointments) {
			
			if(appointment.getDoctor().getUserName().equalsIgnoreCase(name)) {
				OutputResponse outputResponse=new OutputResponse();
				outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
				outputResponse.setPatientName(appointment.getPatient().getFirstName());
				outputResponse.setPatologyCenterName(appointment.getPathology().getName());
				outputResponse.setReason(appointment.getReason());
				outputResponse.setAdmitDate(appointment.getAdmitDate());
				outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
				outputResponses.add(outputResponse);
				
			}
					
		}
		return outputResponses;
	}
	@GetMapping("/getByPatientUserName/{patientusername}")
	public List<OutputResponse> getListOfAppointmentForPatient(@PathVariable(name="patientusername")String name){
		List<OutputResponse> outputResponses=new ArrayList<OutputResponse>();
		List<Appointment>appointments=this.allAppointements();
		for (Appointment appointment : appointments) {
			
			if(appointment.getPatient().getUserName().equalsIgnoreCase(name)) {
				OutputResponse outputResponse=new OutputResponse();
				outputResponse.setAdmitBy(appointment.getAdmin().getUserName());
				outputResponse.setPatientName(appointment.getPatient().getFirstName());
				outputResponse.setPatologyCenterName(appointment.getPathology().getName());
				outputResponse.setReason(appointment.getReason());
				outputResponse.setAdmitDate(appointment.getAdmitDate());
				outputResponse.setDoctorName(appointment.getDoctor().getFirstName());
				outputResponses.add(outputResponse);
				
			}
					
		}
		return outputResponses;
	}

}
