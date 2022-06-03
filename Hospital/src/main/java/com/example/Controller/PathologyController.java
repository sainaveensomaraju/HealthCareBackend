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

import com.example.bean.Pathology;
import com.example.service.PathologyService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PathologyController {

	@Autowired
	private PathologyService service;
	
	@PostMapping("/pathology")
	public Pathology add(@RequestBody Pathology pathology) {
		return this.service.save(pathology);
	}
	@GetMapping("/allpathologies")
	public List<Pathology> getAll(){
		return this.service.listAll();
	}
	@GetMapping("/pathologybyid/{id}")
	public Pathology getById(@PathVariable(name="id") int id) {
		return this.service.get(id);
	}
	@DeleteMapping("/delete/{id}")
	public boolean deleteByid(@PathVariable(name="id")int id) {
		return this.service.delete(id);
	}
}
