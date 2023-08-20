
// A busca linear é a mais indicada nesse array, já que os elementos não estão ordenados.

function buscaLinear(array, alvo) { 

    for (let i = 0; i < array.length; i++) {
        if (array[i] === alvo) {
            return i; // Retorna o índice do valor atribuído a "alvo" caso seja encontrado.
        }
    }
    
    return -1; // Retorna -1 caso o valor não seja encontrado.
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const alvo = 20

const indice = buscaLinear(array, alvo)

if (indice !== -1) {
    console.log(`O valor ${alvo} foi encontrado no índice ${indice}.`)
} else {
    console.log(`O valor ${alvo} não foi encontrado no array.`)
}