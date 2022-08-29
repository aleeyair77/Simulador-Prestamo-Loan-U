
class Personas{
    constructor(nombre,apellido,dni,deuda){

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.deuda = deuda;
    }
}

let lista_Personas = [];

for( let i = 0 ; i < 2 ; i++){

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    let dni = prompt("Ingrese su DNI");
        let prestamo = parseFloat(prompt("Cuanto dinero quiere solicitar: . Si desea salir, escriba 0")) 
    let cuotas_prestamo = parseInt(prompt("Cuantas cuotas quiere pagarlo, 3/6/9/12. 3 cuotas 5% recargo, 6 7% recargo, 9 10% recargo, 12 15% recargo"))
    function calcular_prestamo(){
    if (cuotas_prestamo == 3){
    let porcentaje_tres = (((prestamo * 5) / 100) + prestamo);
    return porcentaje_tres;
    }
    else if (cuotas_prestamo == 6){
        let porcentaje_seis = (((prestamo * 7) / 100) + prestamo);
        return porcentaje_seis; 
    }
    else if (cuotas_prestamo == 9){
        let porcentaje_nueve = (((prestamo * 10) / 100) + prestamo);
        return porcentaje_nueve;
    }
    else if (cuotas_prestamo == 12){
        let porcentaje_doce = (((prestamo * 15) / 100) + prestamo);
        return porcentaje_doce;
    }
    else{
        alert("Monto de cuotas equivocado.")
    }
}
	calcular_prestamo();
    let deuda = calcular_prestamo();
    let nueva_Persona = new Personas(nombre , apellido , dni, deuda);
    lista_Personas.push( nueva_Persona);    
}

console.log(lista_Personas)

const buscar_nombre = lista_Personas.find ((el) => el.nombre === "Juan")
const deuda_filtrado = lista_Personas.filter ((el) => el.deuda > 10000)

console.log(buscar_nombre)

console.log( deuda_filtrado );
