package com.example.demo.controller;

import java.io.FileReader;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.misc.DateTime;

@Controller
//@RestController
public class WeatherDataController {

	@RequestMapping(value="geoCode",method = RequestMethod.POST)
	public String getA(@RequestParam("city") String city
			,Model model)
	{
		String url=
				"http://api.openweathermap.org/geo/1.0/direct?q=+"+
		city.toString().toLowerCase()+
		"+&limit=1&appid=abb394535f022ddaf973e51508ad6840";
		
		JSONParser jsonParser=new JSONParser();
		RestTemplate restTemplate=new RestTemplate();
		String obj=restTemplate.getForObject(url,String.class);
		
		
		try {
			Object o1 = jsonParser.parse(obj);
			JSONArray jarr=(JSONArray) o1;
			JSONObject jobj1=(JSONObject) jarr.get(0);
			
			//return jobj1.toString();
			return getWeatherData(jobj1.get("name").toString().trim().toLowerCase(),
						   jobj1.get("lat").toString().trim().toLowerCase(),
						   jobj1.get("lon").toString().trim().toLowerCase(),
						   model);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("1");
			return "home";
		}
	}
		
	
	private String getWeatherData(String city, String lat, String lon,Model model) {
		// TODO Auto-generated method stub
		String url=
				"http://api.openweathermap.org/data/2.5/onecall?"
				+ "lat="+lat
				+ "&lon="+lon
				+ "&units=metric"
				+ "&exclude=hourly,daily,alerts,minutely&appid=abb394535f022ddaf973e51508ad6840";
		
		JSONParser jsonParser=new JSONParser();
		RestTemplate restTemplate=new RestTemplate();
		String str=restTemplate.getForObject(url,String.class);
		
		try {
			
			DateTime dt=new DateTime();
			long offset,ts;
			Object o1 = jsonParser.parse(str);
			JSONObject jarr=(JSONObject) o1;
			
			JSONObject current=(JSONObject) jarr.get("current");
			JSONArray tarr=(JSONArray) current.get("weather");
			JSONObject weather=(JSONObject) tarr.get(0);
			
			model.addAttribute("weather",tarr.toJSONString().toString());
			model.addAttribute("timezone", jarr.get("timezone"));
			model.addAttribute("timezone_offset", jarr.get("timezone_offset"));
			model.addAttribute("lat", lat);
			model.addAttribute("lon", lon);
			
			city=city.substring(0, 1).toUpperCase()+city.substring(1).toLowerCase();
			model.addAttribute("city",city);
			
			offset=(long) jarr.get("timezone_offset");
			
			ts=(long) current.get("dt");
			model.addAttribute("dt", DateTime.getDate(ts,offset).toString().trim());
			
			ts=(long) current.get("sunrise");
			model.addAttribute("sunrise", DateTime.getTime(ts,offset).toString().trim());
			
			ts=(long) current.get("sunset");
			model.addAttribute("sunset", DateTime.getTime(ts,offset).toString().trim());
			
			model.addAttribute("temp", current.get("temp"));
			model.addAttribute("pressure", current.get("pressure"));
			model.addAttribute("humidity", current.get("humidity"));
			model.addAttribute("dew_point", current.get("dew_point"));
			model.addAttribute("uvi", current.get("uvi"));
			model.addAttribute("clouds", current.get("clouds"));
			
			long vis=(long) current.get("visibility");
			vis=vis/1000;
			vis = (long) (Math.round(vis * 100) / 100);
			
			model.addAttribute("visibility", vis);
			model.addAttribute("wind_speed", current.get("wind_speed"));
			
			model.addAttribute("id", weather.get("id"));
			model.addAttribute("main", weather.get("main"));
			model.addAttribute("description", weather.get("description"));
			model.addAttribute("icon", weather.get("icon"));
			
			return "weatherData";
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("2");
			return "home";
		}
	}
}

























































/*@RequestMapping(value = "b",method = RequestMethod.GET)
public String getB(@RequestParam("lat") String lat,
		@RequestParam("lon") String lon)
{
	String url=
			"http://api.openweathermap.org/data/2.5/onecall?"
			+ "lat="+lat
			+ "&lon="+lon
			+ "&exclude=hourly,daily,alerts,minutely&appid=abb394535f022ddaf973e51508ad6840";
	
	JSONParser jsonParser=new JSONParser();
	RestTemplate restTemplate=new RestTemplate();
	String str=restTemplate.getForObject(url,String.class);
	
	try {
		
		Object o1 = jsonParser.parse(str);
		JSONObject jarr=(JSONObject) o1;
		
		//System.out.println(jarr.get("minutely").getClass()+"...........................................");
		JSONObject current=(JSONObject) jarr.get("current");
		JSONArray tarr=(JSONArray) current.get("weather");
		JSONObject weather=(JSONObject) tarr.get(0);
		
		return weather.toJSONString();
		
	} catch (Exception e) {
		// TODO Auto-generated catch block
		return null;
	}
}*/
















/*
 * @RequestMapping(value="b",method = RequestMethod.GET) public Object getB() {
 * String url=
 * "http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=abb394535f022ddaf973e51508ad6840";
 * 
 * JSONParser jsonParser=new JSONParser(); RestTemplate restTemplate=new
 * RestTemplate(); String str=restTemplate.getForObject(url,String.class);
 * 
 * try { Object o1 = jsonParser.parse(str); JSONObject jarr=(JSONObject) o1;
 * return jarr;
 * 
 * } catch (ParseException e) { // TODO Auto-generated catch block return null;
 * }
 * 
 * }
 */
