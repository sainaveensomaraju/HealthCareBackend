package com.example.Controller;

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

import com.example.bean.Doctor;
import com.example.service.AdminService;
import com.example.service.DoctorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DoctorController {

	@Autowired
	private DoctorService service;
	@Autowired
	private AdminService adminService;

	@PostMapping("/{admin}/add")
	public Doctor addDoctor(@RequestBody Doctor doctor, @PathVariable(name = "admin") String adminname) {
		if (this.adminService.validateAdmin(adminname)) {
			return this.service.save(doctor);
		}
		return null;

	}

	@GetMapping("/get")
	public List<Doctor> getAllDoctors() {
		
			return this.service.listAll();
		
	}

	@GetMapping("/searchid/{id}")
	public Doctor getById(@PathVariable(name = "id") int id) {
			return this.service.getById(id);

	}

	@GetMapping("/{admin}/searchname/{username}")
	public Doctor getByName(@PathVariable(name ="username") String username, @PathVariable(name = "admin") String admin) {
		if (this.adminService.validateAdmin(admin)) {
			System.out.println("sdkjh");
			return this.service.getbyUserName(username);
		}
		return null;

	}

	@PutMapping("/{admin}/searchbyid/{id}")
	public Doctor updateDoctor(@PathVariable(name = "id") int id, @RequestBody Doctor doctor,@PathVariable(name="admin")String name) {
		if(this.adminService.validateAdmin(name)) {
			Doctor doctor1 = this.service.getById(id);
			if (doctor1 != null) {
				return this.service.save(doctor1);
			}
		
		
		}
		return null;
	}

	@DeleteMapping("/{admin}/deletebyid/{id}")
	public boolean delete(@PathVariable(name = "id") int id, @PathVariable(name = "amdin") String name) {

		if (this.adminService.validateAdmin(name)) {
			Doctor doc = this.service.getById(id);
			if (doc != null) {
				this.service.delete(id);
				return true;
			}
		}	
		return false;
	}
}
