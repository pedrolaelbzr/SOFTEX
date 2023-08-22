let alvo = parseInt(prompt("Digite o número que deseja saber o índice [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]: "))

function buscaBinaria(array, num){
    let inicio = 0
    let fim = arrayOrdenado.length - 1

    while (inicio<=fim){
        let meio = Math.floor((inicio + fim)/2)
        
        if (array[meio] === num){
            return meio; 
        } else if (array[meio] < num){
            inicio = meio + 1
        } else {
            fim = meio -1
        }
    }
    return -1
}

let arrayOrdenado  = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
function comp (a,b){
    return a-b
}
arrayOrdenado.sort(comp)

const indice = buscaBinaria(arrayOrdenado,alvo)

console.log(arrayOrdenado)

if (indice !== -1) {
    console.log(`Elemento ${alvo} está posicionado no índice ${indice}`)
} else {
    console.log(`Elemento ${alvo} não encontrado`)
}

