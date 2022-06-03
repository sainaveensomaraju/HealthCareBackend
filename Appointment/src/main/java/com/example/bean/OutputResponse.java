package com.example.bean;

import java.time.LocalDate;

public class OutputResponse {
	
	private String patientName;
	private String doctorName;
	private String PatologyCenterName;
	private String reason;
	private LocalDate admitDate;
	private String admitBy;
	
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getPatologyCenterName() {
		return PatologyCenterName;
	}
	public void setPatologyCenterName(String patologyCenterName) {
		PatologyCenterName = patologyCenterName;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public LocalDate getAdmitDate() {
		return admitDate;
	}
	public void setAdmitDate(LocalDate admitDate) {
		this.admitDate = admitDate;
	}
	public String getAdmitBy() {
		return admitBy;
	}
	public void setAdmitBy(String admitBy) {
		this.admitBy = admitBy;
	}
	@Override
	public String toString() {
		return "OutputResponse [patientName=" + patientName + ", doctorName=" + doctorName + ", PatologyCenterName="
				+ PatologyCenterName + ", reason=" + reason + ", admitDate=" + admitDate + ", admitBy=" + admitBy + "]";
	}
	public OutputResponse(String patientName, String doctorName, String patologyCenterName, String reason,
			LocalDate admitDate, String admitBy) {
		super();
		this.patientName = patientName;
		this.doctorName = doctorName;
		PatologyCenterName = patologyCenterName;
		this.reason = reason;
		this.admitDate = admitDate;
		this.admitBy = admitBy;
	}
	public OutputResponse() {
		super();
	}
	
	
	

}
