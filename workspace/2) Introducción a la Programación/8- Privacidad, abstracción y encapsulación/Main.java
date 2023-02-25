package com.open_bootcamp_3;

public class Main {
    public static void main (String[] args) {
        Persona name = new Persona();
        name.setNombre("José");
        String nombre = name.getNombre();
        System.out.println(nombre);

        Persona age = new Persona();
        age.setEdad(32);
        int edad = age.getEdad();
        System.out.println(edad);

        Persona phone = new Persona();
        phone.setTelefono("+54 3525 418714");
        String telefono = phone.getTelefono();
        System.out.println(telefono);
    }
}

class Persona {
    private String nombre;
    private int edad;
    private String telefono;

//set Nombre, Edad, Telefono.

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    //get Nombre, Edad, Telefono.
    public String getNombre() {
        return this.nombre;
    }

    public int getEdad() {
        return this.edad;
    }

    public String getTelefono() {
        return this.telefono;
    }
}