package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Pathology;
import com.example.repository.PathologyRepository;




@Service
public class PathologyService {

	@Autowired
	private PathologyRepository repo;

	public List<Pathology> listAll() {
		return repo.findAll();
	}

	public Pathology save(Pathology pathologyadd) {
		return repo.save(pathologyadd);
	}

	public Pathology get(int id) {
		Optional<Pathology> optional=this.repo.findById(id);
		if(optional.isPresent())
			return optional.get();
		return null;
	}

	public boolean delete(int id) {
		Pathology pathology=this.get(id);
		if(pathology != null) {
			this.repo.deleteById(id);
			return true;
		}
		return false;
	}

}
