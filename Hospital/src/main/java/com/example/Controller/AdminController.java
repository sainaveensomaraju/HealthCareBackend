package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bean.Admin;
import com.example.service.AdminService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;

	@PostMapping("/add")
	public Admin add(@RequestBody Admin admin) {
		return this.adminService.addAdmin(admin);
	}

	@GetMapping("/alladmins")
	public List<Admin> getAllAdmins() {
		return this.adminService.getAll();
	}

	@GetMapping("/findByUsername/{username}")
	public Admin findByUserName(@PathVariable(name = "username") String adminname) {
		return this.adminService.findByName(adminname);
	}

	@GetMapping("/adminbyid/{id}")
	public Admin getById(@PathVariable(name = "id") int id) {
		return this.adminService.getById(id);
	}
}
