let nomeCompleto, anoNascimento, idade, idadeNova;

while (true) {
    nomeCompleto = prompt("Digite o seu nome completo: ");
    anoNascimento = Number(prompt('Digite seu ano de nascimento:'));

    try {
        if (anoNascimento >= 1922 && anoNascimento <= 2021) {
            idade = 2021 - anoNascimento;
            idadeNova = idade + 1;
            break;
        } else {
            throw new Error("Ano de nascimento inválido. Digite um ano entre 1922 e 2021.");
        }
    } catch (error) {
        alert('Ocorreu um erro: ' + error.message);
    }
}

alert("Nome: " + nomeCompleto + '\n' +
      "Idade: " + idade + '\n' +
      "Você fez/fará " + idadeNova + " anos esse ano.");