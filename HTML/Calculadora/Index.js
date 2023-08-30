let displayValue = ""
let opNegativo = document.getElementById("changeop")

function appendToDisplay(value){
    displayValue += value
    document.getElementById("display").innerHTML = (displayValue)
    

}


function porcNum (value){
displayValue += value
document.getElementById("Display").innerHTML = displayValue
    if (porcNum = true){
        clearDisplay
    

    }

}


function clearDisplay(){
    displayValue = ''
    document.getElementById("display").innerHTML = displayValue

}

function changeOp() {
    if(changeOp)
    opNegativo = `-${displayValue}`
    document.getElementById("display").innerHTML = opNegativo

}


function calculate(){
    try{
        const result = eval(displayValue)
        document.getElementById("display").innerHTML = result
        displayValue = result.toString()
    }catch(error){

    }
}
