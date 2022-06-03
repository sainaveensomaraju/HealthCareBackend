package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bean.DiagnosticTest;
@Repository
public interface DiagnoticTestRepository extends JpaRepository<DiagnosticTest, Integer> {

}
