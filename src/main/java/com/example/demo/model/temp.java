package com.example.demo.model;

public class temp {
	String name;
	int lat;
	int lon;
	
	

	@Override
	public String toString() {
		return "temp [name=" + name + ", lat=" + lat + ", lon=" + lon + "]";
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getLat() {
		return lat;
	}
	public void setLat(int lat) {
		this.lat = lat;
	}
	public int getLon() {
		return lon;
	}
	public void setLon(int lon) {
		this.lon = lon;
	}
	
	
}
