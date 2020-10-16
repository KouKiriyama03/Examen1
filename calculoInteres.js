// Calculo impuesto
// Cn es el capital final.
//  Co es el capital inicial.
// i es la tasa de interés.
// n es el período de tiempo (en meses).


exports.calcularInteresCompuesto = (capital, tasaInteres, tiempo) => {
    let cuotaInicial = 0;
    let cuotaFinal= 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres/ 100;

    const cuotas = [];
    
  
    // Transformar los años en meses
    tiempo = Math.round(tiempo * 12);
  
    cuotaInicial = capital;
    for (let i = 0; i < array.length; i++) {
        cuotaFinal = cuotaInicial * Math.pow((1 + tasaInteresDecimal),tiempo);
        
    }

    

    return cuotas;
  };