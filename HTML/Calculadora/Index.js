let displayValue = ""
let opNegativo = ""
function appendToDisplay(value){
    displayValue += value
    document.getElementById("display").innerHTML = displayValue

}

function clearDisplay(){
    displayValue = ''
    document.getElementById("display").innerHTML = displayValue

}

function changeOp(){
    opNegativo = `-${displayV}`
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
