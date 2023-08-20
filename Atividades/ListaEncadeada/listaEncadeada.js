class node {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.filho = null
    }
}
class listaEncadeada {
    constructor(){
    this.cabeca = null
    }
    adicionar(nome, idade) {
        const novoFilho = new node(nome, idade)
        if(!this.cabeca){
            this.cabeca = novoFilho
            return
        }
        let atual = this.cabeca
        while (atual.filho){
            atual = atual.filho
        }
            atual.filho = novoFilho
        }
    }

    const lista = new listaEncadeada
    
    lista.adicionar("Deraldo", 89)
    lista.adicionar("Reuel", 48)
    lista.adicionar("Lael", 23)
    
    console.log(lista.cabeca)