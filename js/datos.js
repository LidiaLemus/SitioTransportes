/**
 * creacion de los objetos de los transportes
 */
const moto = {
    motor: 200,
    color: "rojo",
    marca: "honda",
    modelo: 2020,
    tipo: "terrestre"
};


const aqua = {
    motor: 2000,
    color: "red",
    marca: "honda",
    modelo: 2020,
    tipo: "terrestre"
};

const volar = {
        motor: 2000,
        color: "Rosado",
        marca: "zusuky",
        modelo: 2018,
        tipo: "aerelo"
    }
    /**
     * creacion de la clase transporte
     */
class Transporte {
    constructor(motor, color, marca, modelo, tipo) {
        this.motor = motor,
            this.color = color,
            this.marca = marca,
            this.modelo = modelo,
            this.tipo = tipo
    }
}

$('#terrestre').on('change', function() {
    var tr = document.getElementById('terrestre').value;
    if (tr == tr) {
        document.getElementById('modelo').value = moto.modelo;
        document.getElementById('color').value = moto.color;
        document.getElementById('marca').value = moto.marca;
        document.getElementById('motor').value = moto.motor;
        document.getElementById('tipo').value = moto.tipo;
    } else if (tr == tr) {
        document.getElementById('modelo').value = moto.modelo;
        document.getElementById('color').value = moto.color;
        document.getElementById('marca').value = moto.marca;
        document.getElementById('motor').value = moto.motor;
        document.getElementById('tipo').value = moto.tipo;
    } else if (tr == tr) {
        document.getElementById('modelo').value = moto.modelo;
        document.getElementById('color').value = moto.color;
        document.getElementById('marca').value = moto.marca;
        document.getElementById('motor').value = moto.motor;
        document.getElementById('tipo').value = moto.tipo;
    } else {
        alert('error');
    }
});

$('#maritimo').on('change', function() {
    var acuatico = document.getElementById('maritimo').value;
    if (acuatico == 'barco') {
        document.getElementById('modelo').value = moto.modelo;
        document.getElementById('color').value = moto.color;
        document.getElementById('marca').value = moto.marca;
        document.getElementById('motor').value = moto.motor;
        document.getElementById('tipo').value = moto.tipo;
    } else if (acuatico == 'lancha') {
        document.getElementById('modelo').value = aqua.modelo;
        document.getElementById('color').value = aqua.color;
        document.getElementById('marca').value = aqua.marca;
        document.getElementById('motor').value = aqua.motor;
        document.getElementById('tipo').value = aqua.tipo;
    } else if (acuatico == 'submarino') {
        document.getElementById('modelo').value = aqua.modelo;
        document.getElementById('color').value = aqua.color;
        document.getElementById('marca').value = aqua.marca;
        document.getElementById('motor').value = aqua.motor;
        document.getElementById('tipo').value = aqua.tipo;
    } else {
        alert('error');
    }
});

$('#aereo').on('change', function() {
    var aereo = document.getElementById('aereo').value;
    if (aereo == aereo) {
        document.getElementById('modelo').value = volar.modelo;
        document.getElementById('color').value = volar.color;
        document.getElementById('marca').value = volar.marca;
        document.getElementById('motor').value = volar.motor;
        document.getElementById('tipo').value = volar.tipo;
    } else if (aereo == aereo) {
        document.getElementById('modelo').value = acuatico.modelo;
        document.getElementById('color').value = acuatico.color;
        document.getElementById('marca').value = acuatico.marca;
        document.getElementById('motor').value = acuatico.motor;
        document.getElementById('tipo').value = acuatico.tipo;
    } else if (aereo == aereo) {
        document.getElementById('modelo').value = acuatico.modelo;
        document.getElementById('color').value = acuatico.color;
        document.getElementById('marca').value = acuatico.marca;
        document.getElementById('motor').value = acuatico.motor;
        document.getElementById('tipo').value = acuatico.tipo;
    } else {
        alert('error');
    }
});