
function funcaoTradicionalSemParametros() {
    console.log("Esta é uma função tradicional sem parâmetros.");
}

function soma(a, b) {
    return a + b;
}

const multiplicacao = (x, y) => x * y;

// Exemplos de uso
funcaoTradicionalSemParametros();
const resultadoSoma = soma(5, 3); 
const resultadoMultiplicacao = multiplicacao(4, 6); 

console.log("Resultado da soma:", resultadoSoma);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);