package com.example.bean;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Transient;

@Embeddable
public class Pathology {

	@Column(name="lab_id")
	private int id;
	@Transient
	private String name;
	@Transient
	private String contactNo;
	@Transient
	private String address;
	@Transient
	private String email;
	@Transient
	private String userName;
	@Transient
	private String password;
	@Transient
	@ManyToMany
	@JoinTable(
			name="availableInCenters",
			joinColumns = @JoinColumn(name="center_Id"),
			inverseJoinColumns = @JoinColumn(name="test_Id")
			)
	private List<DiagnosticTest> availbaleTests;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<DiagnosticTest> getAvailbaleTests() {
		return availbaleTests;
	}
	public void setAvailbaleTests(List<DiagnosticTest> availbaleTests) {
		this.availbaleTests = availbaleTests;
	}
	@Override
	public String toString() {
		return "Pathology [id=" + id + ", name=" + name + ", contactNo=" + contactNo + ", address=" + address
				+ ", email=" + email + ", userName=" + userName + ", password=" + password + ", availbaleTests="
				+ availbaleTests + "]";
	}
	public Pathology(int id, String name, String contactNo, String address, String email, String userName,
			String password, List<DiagnosticTest> availbaleTests) {
		super();
		this.id = id;
		this.name = name;
		this.contactNo = contactNo;
		this.address = address;
		this.email = email;
		this.userName = userName;
		this.password = password;
		this.availbaleTests = availbaleTests;
	}
	public Pathology() {
		super();
	}
	public Pathology(int id) {
		super();
		this.id = id;
	}
	
	
	

	
}