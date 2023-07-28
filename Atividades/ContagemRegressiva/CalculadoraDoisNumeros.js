function calculadora(num1, num2, operador) {
    let resultado;
  
    switch (operador) {
      case 1:
        resultado = num1 + num2;
        break;
      case 2:
        resultado = num1 - num2;
        break;
      case 3:
        resultado = num1 * num2;
        break;
      case 4:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
        break;
    }
  
    return resultado;
  }

  console.log(calculadora(5, 3, 1)); // Saída: 8 (5 + 3)
  console.log(calculadora(10, 5, 2)); // Saída: 5 (10 - 5)
  console.log(calculadora(4, 7, 3)); // Saída: 28 (4 * 7)
  console.log(calculadora(15, 3, 4)); // Saída: 5 (15 / 3)
  console.log(calculadora(8, 9, 5)); // Saída: 0 (valor recebido não serve para operação)