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

import com.example.bean.DiagnosticTest;
import com.example.service.DiagnoticTestService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DiagnoticTestController {
	@Autowired
	private DiagnoticTestService service;
	
	@PostMapping("/addtest")
	public DiagnosticTest addTest(@RequestBody DiagnosticTest diagnosticTest) {
		return this.service.addTest(diagnosticTest);
	}
	@GetMapping("/getAlltest")
	public List<DiagnosticTest> getAll(){
		return this.service.viewAllTests();
	}
	@PutMapping("/updatetest")
	public DiagnosticTest upadteTest(@RequestBody DiagnosticTest diagnosticTest) {
		return this.service.addTest(diagnosticTest);
	}
	@DeleteMapping("/deletetest/{id}")
	public boolean removeTest(@PathVariable(name="id") int id) {
		return this.service.removeTest(id);
	}
}
