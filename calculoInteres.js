// Calculo impuesto
// Cn es el capital final.
//  Co es el capital inicial.
// i es la tasa de interés.
// n es el período de tiempo (en meses).


exports.calcularInteresCompuesto = (monto, tasaInteres, tiempo) => {
    let cuotaInicial = 0;
    let cuotaFinal= 0;
    let tasaInteresDecimal = tasaInteres / 100;
    let periodo = tiempo;
    const cuotas = [];
    
    // Transformar los años en meses
    tiempo = Math.round(tiempo * 12);
  
    cuotaInicial = monto;

    cuotaFinal = cuotaInicial * Math.pow((1 + tasaInteresDecimal), tiempo);
    for (let i = 0; i < periodo; i++) {
        const element = array[i];
        
        
    }

  };