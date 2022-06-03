package com.example.bean;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import javax.persistence.Transient;

@Embeddable
public class Doctor {
	@Column(name="doctor_id")
	private int id;
	@Transient
	private String firstName;
	@Transient
	private String lastName;
	@Transient
	private String designation;
	@Transient
	private String userName;
	@Transient
	private String phone;
	@Transient
	private String email;
	@Transient
	private String password;
	@Transient
	private String gender;
	@Transient
	private double salary;
	@Transient
	private LocalDate dob;
	@Transient
	private LocalDate createdDate;
	@Transient
	private int age;
	@Transient
	private String address;
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
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
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public LocalDate getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}
	
	
	
	@Override
	public String toString() {
		return "Doctor [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", designation="
				+ designation + ", userName=" + userName + ", phone=" + phone + ", email=" + email + ", password="
				+ password + ", gender=" + gender + ", salary=" + salary + ", dob=" + dob + ", createdDate="
				+ createdDate + ", age=" + age + ", address=" + address + "]";
	}
	
	public Doctor(int id, String firstName, String lastName, String designation, String userName, String phone,
			String email, String password, String gender, double salary, LocalDate dob, LocalDate createdDate, int age,
			String address) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.designation = designation;
		this.userName = userName;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.salary = salary;
		this.dob = dob;
		this.createdDate = createdDate;
		this.age = age;
		this.address = address;
	}
	public Doctor() {
		super();
		this.createdDate=LocalDate.now();
	}
	public Doctor(int id) {
		super();
		this.id = id;
		this.createdDate=LocalDate.now();
	}
	
	
	
}