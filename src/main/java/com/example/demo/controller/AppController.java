package com.example.demo.controller;

import java.util.Arrays;


import java.util.List;

import org.apache.logging.log4j.spi.LoggerRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.User;


@Controller
public class AppController {
	
	@GetMapping("/")
	public String getHome() {
		return "home";
	}

	@GetMapping("/hello")
	public String getHome1(Model model) {
		model.addAttribute("name", "Sagar");
		return "hello";
	}

	@PostMapping("weatherData")
	public String getWeatherData(@RequestParam("city") String city, Model model) {
		model.addAttribute("city", city);
		return "weatherData";
	}
	
	@GetMapping("dailyForecast")
	public String getDailyForecast()
	{
		return "dailyForecast";
	}
	
	@GetMapping("hourlyForecast")
	public String hourlyForecast()
	{
		return "hourlyForecast";
	}
}
