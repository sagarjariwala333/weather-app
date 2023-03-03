package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Userdata")
public class User {

	@Id
	String id;
	
	String firstname;
	String lastname;
	String address;
	String country;
	String state;
	String city;
	String password;
	String email;
	String phone_number;
	String role="ROLE_USER";
	

	public User(String firstname, String lastname, String address, 
			String country, String state, String city,
			String password, String email, String phone_number) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.country = country;
		this.state = state;
		this.city = city;
		this.password = password;
		this.email = email;
		this.phone_number=phone_number;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", address=" + address
				+ ", country=" + country + ", state=" + state + ", city=" + city + ", password=" + password + ", email="
				+ email + "]";
	}
}
