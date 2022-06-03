package com.example.bean;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;

import javax.persistence.Transient;

@Embeddable
public class Patient {

	@Column(name="patient_Id")
	private int id;
	@Transient
	private String firstName;
	@Transient
	private String lastName;
	@Transient
	private String email;
	@Transient
	private String gender;
	@Transient
	private String phone;
	@Transient
	private String address;
	@Transient
	private String userName;
	@Transient
	private String password;
	@Transient
	private LocalDate dob;
	@Transient
	private LocalDate createdDate;
	@Embedded
	private List<Appointment> appointments;
	
	public LocalDate getCraetedDate() {
		return createdDate;
	}
	public void setCraetedDate(LocalDate craetedDate) {
		this.createdDate = craetedDate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
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
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	
	@Override
	public String toString() {
		return "Patient [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", gender=" + gender + ", phone=" + phone + ", address=" + address + ", userName=" + userName
				+ ", password=" + password + ", dob=" + dob + ", craetedDate=" + createdDate + "]";
	}
	
	public Patient(int id, String firstName, String lastName, String email, String gender, String phone, String address,
			String userName, String password, LocalDate dob, LocalDate createdDate) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.gender = gender;
		this.phone = phone;
		this.address = address;
		this.userName = userName;
		this.password = password;
		this.dob = dob;
		this.createdDate = LocalDate.now();
	}
	public Patient() {
		super();
		this.createdDate=LocalDate.now();
	}
	public Patient(int id) {
		super();
		this.createdDate=LocalDate.now();
	}
	
	
	
	

	

}
