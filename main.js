function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Error: Cannot divide by zero.";
    }
    return a / b;
  }
  
  function calculator() {
    console.log("Calculator Operations:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
  
    const operation = 3 //Enter the operation number (1 to 4)
  
    if (operation < 1 || operation > 4) {
      console.log("Invalid operation number. Please try again.");
      return;
    }
  
    const num1 = 40;//Enter the first number
    const num2 = 3;//Enter the second number
  
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
    }
  
    console.log(`Result: ${result}`);
  }
  
  calculator();
  