package com.open_bootcamp_4;

public class Main {
    public static void main (String[] args) {
        Cliente name = new Cliente();
        name.setNombre("José");
        String nombre = name.getNombre();
        System.out.println(nombre);

        Cliente age = new Cliente();
        age.setEdad(32);
        int edad = age.getEdad();
        System.out.println(edad);

        Cliente phone = new Cliente();
        phone.setTelefono("+54 3525 418714");
        String telefono = phone.getTelefono();
        System.out.println(telefono);

        Cliente clientCredit = new Cliente();
        clientCredit.setCredito("Credito por: $ 15000");
        String credito = clientCredit.getCredito();
        System.out.println(credito);

        Trabajador workSalary = new Trabajador();
        workSalary.setSalario("Sueldo por: $ 4000");
        String salario = workSalary.getSalario();
        System.out.println(salario);
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

class Cliente extends Persona {

    private String credito;

    public void setCredito(String credito) {
        this.credito = credito;
    }

    public String getCredito() {
        return credito;
    }

}

class Trabajador extends Persona {
    private String salario;

    public void setSalario(String salario) {
        this.salario = salario;
    }

    public String getSalario() {
        return salario;
    }
}