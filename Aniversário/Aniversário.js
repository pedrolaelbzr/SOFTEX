let nomeCompleto, anoNascimento, idade, idadeNova;

while (true) {
    nomeCompleto = prompt("Digite o seu nome completo: ");
    anoNascimento = Number(prompt('Digite seu ano de nascimento:'));

    if (anoNascimento >= 1922 && anoNascimento <= 2021) {
        idade = 2021 - anoNascimento;
        idadeNova = idade + 1;
        break;
    } else {
        alert("Digite informações válidas (ano de nascimento entre 1922 e 2021).");
    }
}

alert("Nome: " + nomeCompleto + '\n' +
      "Idade: " + idade + '\n' +
      "Você fará " + idadeNova + " anos esse ano.");