const validator = {
  maskify: function (creditCardNumber) {
    //El string se debe convertir a array para que el for lo pueda recorrer y por eso usamos split()
    creditCardNumber = creditCardNumber.split("");
    /*El for recorre cada elemento del array y reconoce que debe poner # a todos los números excepto a los 
cuatro últimos y por eso usamos -4 que cuenta del final al inicio*/
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      creditCardNumber[i] = "#";
    }
    //Necesitamos volver a convertir el array en string y por eso usamos join()
    creditCardNumber = creditCardNumber.join("");
    //console.log(creditCardNumber);
    return creditCardNumber;
    //return alert('El número que ingresaste es ' + enmascararNum);
  },
  isValid: function (creditCardNumber) {
    let sumaTotal = 0;
    const numeroValido = Array.from(creditCardNumber, Number);
    //console.log(numeroValido);
    for(let i = 1; i < numeroValido.length; i += 2) {
      //console.log(numeroValido[i]);
      let doblarNumeros = numeroValido[i] * 2
      //console.log(doblarNumeros);
      if(doblarNumeros > 9) {
        doblarNumeros -= 9
        //console.log(doblarNumeros);
      }
      sumaTotal += doblarNumeros;
      //console.log(sumaTotal);
    }
    for(let i = 0; i < numeroValido.length; i += 2) {
      //console.log(numeroValido);
      const posicionImpar = numeroValido[i];
      //console.log(posicionImpar);
      sumaTotal += posicionImpar;
    }
    //return alert('La suma total del dígito que ingresaste es ' + sumaTotal);
    sumaTotal;
    //console.log(sumaTotal);
    if(sumaTotal % 10 === 0) {
      //return alert('true');
      //console.log('true');
      return true;
    } else {
      //console.log('false');
      //return alert('false');
      return false;
    }
  }
};
export default validator;
