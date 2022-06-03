package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bean.Admin;
import com.example.bean.Doctor;
import com.example.bean.Pathology;
import com.example.bean.Patient;
import com.example.bean.Role;
import com.example.service.AdminService;
import com.example.service.DoctorService;
import com.example.service.PathologyService;
import com.example.service.PatientService;
import com.example.service.RoleService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RoleController {
	@Autowired
	private RoleService service;
	@Autowired
	private AdminService adminService;
	@Autowired
	private PathologyService pathologyService;
	@Autowired
	private DoctorService doctorService;
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/addRole")
	public Role addRole(@RequestBody Role role) {
		return this.service.addRole(role);
	}
	@GetMapping("/getroles")
	public List<Role> getAllRole(){
		return this.service.getAllRoles();
	}
	@GetMapping("/validate/{id}/{key}")
	public boolean validateRole(@PathVariable(name="id")int id,@PathVariable(name="key")String name) {
		
		String [] credentials=name.split("&");
		if(id==1) {
			List<Admin>allAdmins=this.adminService.getAll();
			for (Admin admin : allAdmins) {
				if(admin.getUserName().equalsIgnoreCase(credentials[0])) {
					if(admin.getPassword().equalsIgnoreCase(credentials[1]))
						return true;
				}
				
			}
			
		}
		else if(id==2) {
			List<Doctor>allDoctors=this.doctorService.listAll();
			for (Doctor doctor : allDoctors) {
				if(doctor.getUserName().equalsIgnoreCase(credentials[0]))
					if(doctor.getPassword().equalsIgnoreCase(credentials[1]))
						return true;
			}

		}
		else if(id==3) {
			System.out.println("pathology");
			List<Pathology> pathologies=this.pathologyService.listAll();
			for (Pathology pathology : pathologies) {
				if(pathology.getUserName().equalsIgnoreCase(credentials[0]))
					if(pathology.getPassword().equalsIgnoreCase(credentials[1]))
						return true;
			}
		}
		else if(id ==4) {
			System.out.println("patient");
			List<Patient> allPats=this.patientService.listAll();
			for (Patient patient : allPats) {
				if(patient.getUserName().equalsIgnoreCase(credentials[0]))
				{
					System.out.println("username");
					if(patient.getPassword().equalsIgnoreCase(credentials[1]))
						return true;
					
				}
					
			}
			
		}
		else 
			return false;
		
		return false;
	}
}
