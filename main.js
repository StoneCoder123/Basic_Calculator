const screen = document.getElementById("CalculatorScreen");
let expression = "";

button_openbrack = document.getElementById("(").addEventListener("click", () => {
    expression += "(";
    screen.innerHTML = expression;
});
button_closedbrack = document.getElementById(")").addEventListener("click", ()=>{
    expression += ")";
    screen.innerHTML = expression;

});
button_0 = document.getElementById("0").addEventListener("click", ()=>{
    expression += "0";
    screen.innerHTML = expression;

});

button_1 = document.getElementById("1").addEventListener("click", ()=>{
    expression += "1";
    screen.innerHTML = expression;

});

button_2 = document.getElementById("2").addEventListener("click", ()=>{
    expression += "2";
    screen.innerHTML = expression;

});
button_3 = document.getElementById("3").addEventListener("click", ()=>{
    expression += "3";
    screen.innerHTML = expression;

});
button_4 = document.getElementById("4").addEventListener("click", ()=>{
    expression += "4";
    screen.innerHTML = expression;

});
button_5 = document.getElementById("5").addEventListener("click", ()=>{
    expression += "5";
    screen.innerHTML = expression;

});
button_6 = document.getElementById("6").addEventListener("click", ()=>{
    expression += "6";
    screen.innerHTML = expression;

});
button_7 = document.getElementById("7").addEventListener("click", ()=>{
    expression += "7";
    screen.innerHTML = expression;

});
button_8 = document.getElementById("8").addEventListener("click", ()=>{
    expression += "8";
    screen.innerHTML = expression;

});
button_9 = document.getElementById("9").addEventListener("click", ()=>{
    expression += "9";
    screen.innerHTML = expression;

});

button_mult = document.getElementById("x").addEventListener("click", ()=>{
    expression += "*";
    screen.innerHTML = expression;

});
button_div = document.getElementById("/").addEventListener("click", ()=>{
    expression += "/";
    screen.innerHTML = expression;

});
button_decimal = document.getElementById(".").addEventListener("click", ()=>{
    expression += ".";
    screen.innerHTML = expression;

});
button_equal = document.getElementById("=").addEventListener("click", ()=>{
 
    screen.innerHTML = (eval(String(expression)));
    
 
});
button_add = document.getElementById("+").addEventListener("click", () => {
    expression += "+";
    screen.innerHTML = expression;

});
button_minus = document.getElementById("-").addEventListener("click", () => {
    expression += "-";
    screen.innerHTML = expression;

    
});
button_AC = document.getElementById("AC").addEventListener("click", ()=>{
    expression = "";
    screen.innerHTML = expression;

})

button_percent = document.getElementById("%").addEventListener("click", () =>{
    expression += "%";
    screen.innerHTML = expression;
})





