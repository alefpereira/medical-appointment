package com.alefpereira.medical_appointment.medicalappointment;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DoctorController {
    private static final String template = "Hello, %s!";
    @RequestMapping("/api/greetings")
    public Doctor grettings (
        @RequestParam(value="name", defaultValue = "World") String name
    ) {
        return new Doctor(String.format(template, name));
    } 

    @RequestMapping("/api/doctor")
    public String allDoctors () {
        String res = "["
            +"{"
            +   " \"name\": \"Dr. August Margin\""
            + "},{"
            + "    \"name\": \"Dr. Joaquis Lupus\""
            + "},{"
            + "    \"name\": \"Dr. Xaviers Charles\""
            + "}"
        +"]";
        return res;
    } 

}