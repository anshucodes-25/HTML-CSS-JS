const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const sumbit = document.getElementById("sumbit");

const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
       temp = textBox.value
       temp = (temp * 9/5) + 32+"F"
       result.textContent = temp;
    }
    else if(toCelsius.checked){
        temp = textBox.value;
        temp = (temp-32) * 5/9;
        result.textContent = temp +"C";

    }
    else{
        result.textContent = `Select a Unit`
    }
}