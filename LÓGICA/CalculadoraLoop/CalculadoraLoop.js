var operacao, num1, num2;


while (!false) {
  operacao = Number(window.prompt('Escolha a operação digitando um dos números abaixo:' + '\n' +
  '------------------------------------------------------------------------' + '\n' +
  '1: Soma' + '\n' +
  '2: Subtração' + '\n' +
  '3: Multiplicação' + '\n' +
  '4: Divisão' + '\n' +
  '0: Sair'));
  if (operacao == 0) {
    window.alert('Fim do programa.');
    break;
  } else if (operacao > 4) {
    window.alert('Essa opção não existe.');
  }
  num1 = Number(window.prompt('Digite o primeiro número da operação:'));
  num2 = Number(window.prompt('Digite o segundo número da operação:'));
  if (operacao == 1) {
    window.alert('O resultado da soma é: ' + String(num1 + num2));
  } else if (operacao == 2) {
    window.alert('O resultado da subtração é: ' + String(num1 - num2));
  } else if (operacao == 3) {
    window.alert('O resultado da multiplicação é: ' + String(num1 * num2));
  } else if (operacao == 4) {
    window.alert('O resultado da divisão é: ' + String(num1 / num2));
  } else {
    window.alert('Essa opção não existe.');
  }
}