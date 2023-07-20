function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: No es posible dividir por 0!";
  }
  return a / b;
}

function eleva(a, b) { //Eleva A a la potencia de B
  return a ** b;
}

function calculadora() {
  console.log("Calculadora Básica:");
  console.log("1. Suma");
  console.log("2. Resta");
  console.log("3. Multiplicación");
  console.log("4. División");
  console.log("5. Potencia");
  console.log("6. Salir de la calculadora.")
  
  while(true) {
  
  const operacion = 1 //Ingrese el numero de operacion (1 a 6)
      
  if (operacion === 6) {
      console.log("Saliendo de la calculadora...Gracias!");
      break;
  }

  if (operacion < 1 || operacion > 6) {
    console.log("Operación desconocida. Vuelva a intentarlo");
    return;
  }


  const num1 = 5;//Primer numero
  const num2 = 2;//Segundo numero

  let resultado;

  switch (operacion) {
      case 1:
          resultado = suma(num1, num2);
          break;
      case 2:
          resultado = resta(num1, num2);
          break;
      case 3:
          resultado = multiplica(num1, num2);
          break;
      case 4:
          resultado = divide(num1, num2);
          break;
      case 5:
          resultado = eleva(num1,num2);
          break;
      default:
          resultado = "Algo salió mal";
          break;
  }

  console.log(`Result: ${resultado}`);
  break
}

}
calculadora();
