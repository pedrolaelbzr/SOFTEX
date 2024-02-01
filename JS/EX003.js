// Pedir ao usuário que insira dois valores
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

// Pedir ao usuário que escolha um operador
let operador = prompt("Escolha o operador (+, -, *, /):");

let resultado;
let restoDivisao;

switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    break;
  case "-":
    resultado = valor1 - valor2;
    break;
  case "*":
    resultado = valor1 * valor2;
    break;
  case "/":
    if (valor2 !== 0) {
      resultado = valor1 / valor2;
      restoDivisao = valor1 % valor2;
    } else {
      console.log("Não é possível dividir por zero.");
    }
    break;
  default:
    console.log("Operador inválido.");
}

// Mostrar o resultado
if (resultado !== undefined) {
  console.log("Resultado:", resultado);

  // Se tiver divisão, exibir a sobra
  if (restoDivisao !== undefined) {
    console.log("Resto da divisão:", restoDivisao);
  }
}