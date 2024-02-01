/*
Objetos Materiais:

Carro:

Atributos:
Modelo
Cor
Velocidade Atual
Métodos:
Acelerar
Frear
Ligar/Desligar
Livro:

Atributos:
Título
Autor
Número de Páginas
Métodos:
Abrir
Fechar
Ler
Objetos Abstratos:

Conta Bancária:

Atributos:
Saldo
Número da Conta
Titular
Métodos:
Depositar
Sacar
VerificarSaldo
Usuário:

Atributos:
Nome
Email
Idade
Métodos:
AtualizarPerfil
EnviarMensagem
CalcularIdadeEmDias
Agora, vou demonstrar esses objetos em JavaScript:
*/

Material: Carro
class Carro {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;
    this.ligado = false;
  }

  acelerar() {
    if (this.ligado) {
      this.velocidadeAtual += 10;
      console.log(`Acelerando. Velocidade atual: ${this.velocidadeAtual} km/h`);
    } else {
      console.log("O carro está desligado. Ligue-o antes de acelerar.");
    }
  }

  frear() {
    this.velocidadeAtual -= 5;
    console.log(`Freando. Velocidade atual: ${this.velocidadeAtual} km/h`);
  }

  ligarDesligar() {
    this.ligado = !this.ligado;
    console.log(this.ligado ? "Carro ligado." : "Carro desligado.");
  }
}

// Objeto Material: Livro
class Livro {
  constructor(titulo, autor, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
    this.aberto = false;
  }

  abrirFechar() {
    this.aberto = !this.aberto;
    console.log(this.aberto ? "Livro aberto." : "Livro fechado.");
  }

  ler() {
    console.log("Lendo o livro...");
  }
}

// Objeto Abstrato: Conta Bancária
class ContaBancaria {
  constructor(titular, numeroConta) {
    this.titular = titular;
    this.numeroConta = numeroConta;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para o saque.");
    }
  }

  verificarSaldo() {
    console.log(`Saldo atual: ${this.saldo}`);
  }
}

// Objeto Abstrato: Usuário
class Usuario {
  constructor(nome, email, idade) {
    this.nome = nome;
    this.email = email;
    this.idade = idade;
  }

  atualizarPerfil(novoNome, novoEmail) {
    this.nome = novoNome;
    this.email = novoEmail;
    console.log("Perfil atualizado com sucesso.");
  }

  enviarMensagem(mensagem) {
    console.log(`Mensagem enviada: ${mensagem}`);
  }

  calcularIdadeEmDias() {
    const diasPorAno = 365;
    const idadeEmDias = this.idade * diasPorAno;
    console.log(`Idade em dias: ${idadeEmDias}`);
  }
}

// Exemplos de uso
const meuCarro = new Carro("Sedan", "Prata");
meuCarro.ligarDesligar();
meuCarro.acelerar();
meuCarro.frear();

const meuLivro = new Livro("Aventuras Incríveis", "Autor Desconhecido", 200);
meuLivro.abrirFechar();
meuLivro.ler();

const minhaConta = new ContaBancaria("João", "123456");
minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.verificarSaldo();

const novoUsuario = new Usuario("Alice", "alice@email.com", 25);
novoUsuario.atualizarPerfil("Alice Silva", "alice.silva@email.com");
novoUsuario.enviarMensagem("Olá, como você está?");
novoUsuario.calcularIdadeEmDias();

