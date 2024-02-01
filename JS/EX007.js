// Função para realizar uma operação matemática com dois números
function realizarOperacao(numero1, numero2) {
    // Utilizando try para capturar exceções
    try {
      // Tentativa de divisão
      const resultado = numero1 / numero2;
  
      // Verificando se o resultado é um número finito
      if (!isFinite(resultado)) {
        throw new Error("Resultado não é um número finito.");
      }
  
      // Exibindo o resultado
      console.log(`Resultado da divisão: ${resultado}`);
    } catch (error) {
      // Capturando exceções e exibindo uma mensagem de erro
      console.error(`Erro: ${error.message}`);
    } finally {
      // O bloco finally será executado independentemente de ocorrer uma exceção ou não
      console.log("Operação concluída.");
    }
  }
  
  // Solicitando os números ao usuário
  const numero1 = parseFloat(prompt("Digite o primeiro número:"));
  const numero2 = parseFloat(prompt("Digite o segundo número:"));
  
  // Chamando a função para realizar a operação
  realizarOperacao(numero1, numero2);
  