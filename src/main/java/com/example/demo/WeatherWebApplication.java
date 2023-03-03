package com.example.demo;

import org.springframework.boot.SpringApplication;



import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

//import com.example.demo.controller.AccountController;
import com.example.demo.controller.AppController;
import com.example.demo.controller.ForecastController;
import com.example.demo.controller.WeatherDataController;
import com.example.demo.model.User;

//@ComponentScan(basePackageClasses = AccountController.class)
@ComponentScan(basePackageClasses = AppController.class)
@ComponentScan(basePackageClasses = WeatherDataController.class)
@ComponentScan(basePackageClasses = ForecastController.class)

/*
 * @ComponentScan(basePackageClasses =
 * com.example.demo.repository.MRepository.class)
 */
/* @ComponentScan(basePackageClasses = User.class) */
@ComponentScan("com.example.demo")
@ComponentScan("com.example.controller")
@ComponentScan("com.example.model")
@SpringBootApplication
public class WeatherWebApplication extends SpringBootServletInitializer{

	/*
	 * protected SpringApplicationBuilder configure(SpringApplicationBuilder
	 * applicationBuilder) { return
	 * applicationBuilder.sources(WeatherWebApplication.class); }
	 */
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		// TODO Auto-generated method stub
		return builder.sources(WeatherWebApplication.class);
	}
	
	public static void main(String[] args) {
		
		SpringApplication.run(WeatherWebApplication.class, args);
	}

	

}
