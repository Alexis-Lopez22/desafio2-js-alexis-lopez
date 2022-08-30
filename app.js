/* Calculador de cuotas */

function calculadora () {
    let cantidadTotal = Number(prompt("Ingrese la cantidad total a pagar: "));
    let cantidadDeCuotas = prompt(`Seleccione en cuantas cuotas desea pagar: 
    1. 3 cuotas
    2. 6 cuotas
    3. 12 cuotas
    4. 24 cuotas`);
    switch (cantidadDeCuotas){
        case "1":
            console.log("Su monto a pagar por mes es: ", Math.trunc(cantidadTotal / 3));
            break;
        case "2":
            console.log("Su monto a pagar por mes es: ", Math.trunc(cantidadTotal / 6));
            break;
        case "3":
            console.log("Su monto a pagar por mes es: ", Math.trunc(cantidadTotal / 12));
            break;
        case "4":
            console.log("Su monto a pagar por mes es: ", Math.trunc(cantidadTotal / 24));
            break;
        
        default:
            console.log("No ingresaste una opcion válida");
            break;
    }
    }
calculadora()
