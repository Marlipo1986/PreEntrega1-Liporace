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
  
  function calculator() {
    console.log("Calculadora Básica:");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Potencia");
    console.log("6. Salir de la calculadora.")
  
    while(true) {
    
    const operation = 6 //Ingrese el numero de operacion (1 a 6)
        
    if (operation === 6) {
        console.log("Saliendo de la calculadora...Gracias!");
        break;
    }

    if (operation < 1 || operation > 6) {
      console.log("Operación desconocida. Vuelva a intentarlo");
      return;
    }
  
    const num1 = 5;//Primer numero
    const num2 = 3;//Segundo numero
  
    let result;
  
    switch (operation) {
        case 1:
            result = add(num1, num2);
            break;
        case 2:
            result = subtract(num1, num2);
            break;
        case 3:
            result = multiply(num1, num2);
            break;
        case 4:
            result = divide(num1, num2);
            break;
        case 5:
            result = eleva(num1,num2);
            break;   
    }
  
    console.log(`Result: ${result}`);
  }
  }
  calculator();
  