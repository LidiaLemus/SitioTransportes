
/**
 * creacion del objeto
 */
const primerTransporte = {
    motor: 200,
    color: "rojo",
    marca: "honda",
    modelo: 2020,
    tipo: "terrestre"
}

console.log(primerTransporte.marca);
document.body.innerHTML = primerTransporte.marca;
const avionUno = {
    motor: 2000,
    color: "rojo",
    marca: "honda",
    modelo: 2020,
    tipo: "terrestre",
    elise: 4,
    capacidad: 100
}

console.log(avionUno.tipo);

/**
 * creacion de la clase 
 */
class transporte{
    motor:number;
    color:string;
    marca:string;
    modelo:number;
    tipo:string;

    constructor(motor:number,color:string, marca:string,modelo:number,tipo:string){
        this.motor = motor;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;

    }
}
/**
 * creacion de la clase aereo que era datos de transporte
 */
class aereo extends transporte{ 
    elise:number;
    capacidad:number;

    constructor(motor:number,color:string,marca:string,modelo:number,tipo:string,elise:number,capacidad:number){
        super(motor=motor,color=color,marca=marca,modelo=modelo,tipo=tipo);
        this.elise = elise;
        this.capacidad = capacidad;
    }

}
/**
 * creamos la calse terrestre que heredara datos del padre transporte
 */
class terrestre extends transporte{
    ruedas:number;
    tipogasolina:string;
    constructor(motor:number,color:string,marca:string,modelo:number,tipo:string,ruedas:number,tipogasolina:string){
        super(motor=motor,color=color,marca=marca,modelo=modelo,tipo=tipo);
        this.ruedas = ruedas;
        this.tipogasolina = tipogasolina;
    }
}


/**
 * creamos la clase maritimos y heradara datos del padre transporte
 */
class maritimos extends transporte{
    tamanio:number;
    metodo:string;
    constructor(motor:number,color:string,marca:string,modelo:number,tipo:string,tamanio:number,metodo:string){
        super(motor=motor,color=color,marca=marca,modelo=modelo,tipo=tipo);
        this.tamanio = tamanio;
        this.metodo = metodo;
    }
}





