//alert('Hola');
import validator from "./validator.js";
const form = document.getElementById("form");
//const creditCardNumber = document.getElementById("creditCardNumber");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(form);
}),

document.getElementById('btnValidate').addEventListener("click", function () {
  const creditCardNumber = document.getElementById("creditCardNumber").value;
  const enmascarar = validator.maskify(creditCardNumber);
  const resultadoValido = validator.isValid(creditCardNumber);
  if(resultadoValido === true) {
    alert ('Tu tarjeta de crédito ' + enmascarar + ' es válida');
  } else {
    alert ('Tu tarjeta de crédito ' + enmascarar + ' no es válida');
  }
  //console.log(enmascarar);
  //console.log(resultadoValido);
});

//console.log(validator);
