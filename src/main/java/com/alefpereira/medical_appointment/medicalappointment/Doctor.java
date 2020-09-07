package com.alefpereira.medical_appointment.medicalappointment;

public class Doctor {
    private final String nome;

    public Doctor(String nome) {
        this.nome = nome;

    } 

    public String getNome(){
        return this.nome;
    }
}