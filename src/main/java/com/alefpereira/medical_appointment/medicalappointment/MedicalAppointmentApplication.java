package com.alefpereira.medical_appointment.medicalappointment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class MedicalAppointmentApplication {

	@RequestMapping(value = "/api", method = RequestMethod.GET)
	public static String greet() {
		return "Hello UnderWorld!";
	}

	public static void main(String[] args) {
		SpringApplication.run(MedicalAppointmentApplication.class, args);
	}

}
