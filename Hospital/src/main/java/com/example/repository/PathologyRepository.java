package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bean.Pathology;


@Repository
public interface PathologyRepository extends JpaRepository<Pathology, Integer> {

}
