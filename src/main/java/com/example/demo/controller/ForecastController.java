package com.example.demo.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@Controller
public class ForecastController {

	@RequestMapping(value="dailyForecast",method = RequestMethod.POST)
	public String postDaily(@RequestParam("lat") String lat,
			@RequestParam("lon") String lon,
			Model model)
	{
		String url=
				"https://api.openweathermap.org/data/2.5/onecall?"
				+ "lat="+lat+"&lon="+lon
				+ "&exclude=hourly,current,minutely,alerts"
				+"&units=metric"
				+ "&appid=abb394535f022ddaf973e51508ad6840";
		
		JSONParser jsonParser=new JSONParser();
		RestTemplate restTemplate=new RestTemplate();
		String obj=restTemplate.getForObject(url,String.class);
		model.addAttribute("data",obj);
		return "dailyForecast";
	}
	
	
	@RequestMapping(value="hourlyForecast",method = RequestMethod.POST)
	public String postHourly(@RequestParam("lat") String lat,
			@RequestParam("lon") String lon,
			Model model)
	{
		String url=
				"https://api.openweathermap.org/data/2.5/onecall?"
				+ "lat="+lat+"&lon="+lon
				+ "&exclude=current,minutely,alerts,daily"
				+"&units=metric"
				+ "&appid=abb394535f022ddaf973e51508ad6840";
		
		JSONParser jsonParser=new JSONParser();
		RestTemplate restTemplate=new RestTemplate();
		String obj=restTemplate.getForObject(url,String.class);
		model.addAttribute("data",obj);
		return "hourlyForecast";
	}	
}
