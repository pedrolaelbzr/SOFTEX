// Solicitando ao usuário que insira três notas
const nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10):"));
const nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10):"));
const nota3 = parseFloat(prompt("Digite a terceira nota (entre 0 e 10):"));

// Verificando se as notas estão dentro do intervalo permitido
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
    nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
  console.log("Por favor, insira notas válidas entre 0 e 10.");
} else {
  // Calculando a média
  const media = (nota1 + nota2 + nota3) / 3;

  // Exibindo o resultado no console
  console.log(`A média das notas é: ${media.toFixed(2)}`);
}
