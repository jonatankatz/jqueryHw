
let btnFill = $("#btnFill")


btnFill.on("click",function(){
    let firstNumber = $("#FirstN").val()
    let secondNumber = $("#SecondN").val()
    let first = Number(firstNumber)
    let second = Number(secondNumber)
    let selectValues = [];

    for (let index = first; index < (second+1); index++) {
    
            let ThisNumber = index.toString()
         let currentNumber = {key:(ThisNumber),value:(ThisNumber)}
            selectValues.push(currentNumber)
    }
    for (let index = 0; index < selectValues.length; index++) {
        let key = selectValues[index].key
        let value = selectValues[index].value
        console.log(key,value)
 $('#SelectInput').append($("<option></option>").attr("value",key).text(value)); 
    }

  
})


  
