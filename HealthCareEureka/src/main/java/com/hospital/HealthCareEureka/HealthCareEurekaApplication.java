package com.hospital.HealthCareEureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
@EnableEurekaServer
@SpringBootApplication
public class HealthCareEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthCareEurekaApplication.class, args);
	}

}
