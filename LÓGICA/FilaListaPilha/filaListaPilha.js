let filaListaPilha = [3, 7, 9, 1, 0]

filaListaPilha.pop() //Saída: [3, 7, 9, 1]
filaListaPilha.pop() //Saída: [3, 7, 9]
filaListaPilha.pop() //Saída: [3, 7]
filaListaPilha.pop() //Saída: [3]
filaListaPilha.pop() //Saída: []
// o método .pop remove elementos do final de um array (FIRST-IN, LAST OUT) sendo uma pilha.

filaListaPilha = [3, 7, 9, 1, 0]

filaListaPilha.shift() //Saída: [7, 9, 1, 0]
filaListaPilha.shift() //Saída: [7, 9, 1]
filaListaPilha.shift() //Saída: [7, 9]
filaListaPilha.shift() //Saída: [7]
filaListaPilha.shift() //Saída: []
// o método .shift remove elementos do início de um array (FIRST-IN FIRST-OUT) sendo uma fila.

filaListaPilha = [3, 7, 9, 1, 0]

function remover(numero){
    let indice = filaListaPilha.indexOf(numero)
    if(indice !== -1){
        filaListaPilha.splice(indice, 1)
        return true
    }   else {
        console.log("Número não encontrado.")
    }
}
remover(9) //Removerá o número inserido na chamada da função.
remover(30) //Cairá no "Else", imprimindo "Número não encontrado" no console.