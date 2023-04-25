const iva = (a) => a * 1.21

let trueOfalse = true;

function calcularPrestramo () {
    let prestamo = Number (prompt ('Ingresa el monto del prestamo'));

while (trueOfalse) {
    if (prestamo === 0) {
        prestamo = Number (prompt('Ingresa el monto del prestamo'));
    } else {
        let resultado = iva(prestamo);
        calcularCuotas(resultado);
        trueOfalse = false;
        }
    }
}

function calcularCuotas (resultado) {
    let cuotas = Number(prompt('Ingresa la cantidad de cuotas\n3\n6\n12\n24'));

while (trueOfalse) {
    let resultadoFinal = 0;
    switch (cuotas) {
        case 3:
        resultadoFinal = Math.round(resultado / cuotas);
        alert (`El monto de la cuota es de $${resultadoFinal}`);
        trueOfalse = false;
        break;
        case 6:
        resultadoFinal = Math.round(resultado / cuotas);
        alert (`El monto de la cuota es de $${resultadoFinal}`);
        trueOfalse = false;
        break;
        case 12:
        resultadoFinal = Math.round(resultado / cuotas);
        alert (`El monto de la cuota es de $${resultadoFinal}`);
        trueOfalse = false;
        break;
        case 24:
        resultadoFinal = Math.round(resultado / cuotas);
        alert (`El monto de la cuota es de $${resultadoFinal}`);
        trueOfalse = false;
        break;
        default:
            cuotas = Number(prompt('Ingresa la cantidad de cuotas\n3\n6\n12\n24'))
            break;
        }
    }
}

calcularPrestramo()