const Banco = {
    conta: 123456,
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "A123",

    buscarSaldo: function () {
        return this.saldo;
    },


    deposito: function (valor) {
        this.saldo += valor;
        return `Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`;
    },

    saque: function (valor) {
        if (valor > this.saldo) {
            return "Saldo insuficiente para saque.";
        }
        this.saldo -= valor;
        return `Saque de ${valor} realizado. Novo saldo: ${this.saldo}`;
    },

    numeroDaConta: function () {
        return this.conta;
    }
};

console.log("Saldo atual:", Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
console.log("Número da conta:", Banco.numeroDaConta());