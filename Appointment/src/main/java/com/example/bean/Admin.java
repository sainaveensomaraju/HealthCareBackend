package com.example.bean;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import javax.persistence.Transient;

@Embeddable
public class Admin {
	
	@Column(name="admin_id")
	private int id;
	
	@Transient
	private String userName;
	@Transient
	private String password;
	
	
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
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "Admin [id=" + id + ", userName=" + userName + ", password=" + password + "]";
	}

}
