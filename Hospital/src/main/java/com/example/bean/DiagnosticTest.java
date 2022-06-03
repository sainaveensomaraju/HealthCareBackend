package com.example.bean;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
@Entity
public class DiagnosticTest {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String testName;
	private double testPrice;
	private String normalValue;
	private String unit;
	@ManyToMany(mappedBy = "availbaleTests" )
	private List<Pathology> availableInCenters;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTestName() {
		return testName;
	}
	public void setTestName(String testName) {
		this.testName = testName;
	}
	public double getTestPrice() {
		return testPrice;
	}
	public void setTestPrice(double testPrice) {
		this.testPrice = testPrice;
	}
	public String getNormalValue() {
		return normalValue;
	}
	public void setNormalValue(String normalValue) {
		this.normalValue = normalValue;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public List<Pathology> getAvailableInCenters() {
		return availableInCenters;
	}
	public void setAvailableInCenters(List<Pathology> availableInCenters) {
		this.availableInCenters = availableInCenters;
	}
	@Override
	public String toString() {
		return "DiagnosticTest [id=" + id + ", testName=" + testName + ", testPrice=" + testPrice + ", normalValue="
				+ normalValue + ", unit=" + unit + ", availableInCenters=" + availableInCenters + "]";
	}
	public DiagnosticTest(int id, String testName, double testPrice, String normalValue, String unit,
			List<Pathology> availableInCenters) {
		super();
		this.id = id;
		this.testName = testName;
		this.testPrice = testPrice;
		this.normalValue = normalValue;
		this.unit = unit;
		this.availableInCenters = availableInCenters;
	}
	public DiagnosticTest() {
		super();
	}
	public DiagnosticTest(int id) {
		super();
		this.id = id;
	}
	
	
}
