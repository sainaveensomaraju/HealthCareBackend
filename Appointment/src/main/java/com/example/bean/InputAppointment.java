package com.example.bean;

public class InputAppointment {
	
	private int patientId;

	private int doctorId;
	private int labId;
	private int status;
	private String reason;
	public int getPatientId() {
		return patientId;
	}
	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
	
	public int getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}
	public int getLabId() {
		return labId;
	}
	public void setLabId(int labId) {
		this.labId = labId;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	@Override
	public String toString() {
		return "InputAppointment [patientId=" + patientId +", doctorId=" + doctorId
				+ ", labId=" + labId + ", status=" + status + ", reason=" + reason + "]";
	}
	public InputAppointment(int patientId, int doctorId, int labId, int status, String reason) {
		super();
		this.patientId = patientId;
		
		this.doctorId = doctorId;
		this.labId = labId;
		this.status = status;
		this.reason = reason;
	}
	public InputAppointment() {
		super();
	}
	
	

}
