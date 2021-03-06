package com.alefpereira.medical_appointment.medicalappointment;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Routes {

    @RequestMapping({
        "/",
        "/doctors",
        "/doctor/list",
        "/doctor/edit"
    })
    public String index() {
        return "forward:/index.html";
    }
}