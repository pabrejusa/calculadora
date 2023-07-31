
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnPunto = document.getElementById("btnPunto");
let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");
let btnMultiplicar = document.getElementById("btnMultiplicar");
let btnDividir = document.getElementById("btnDividir");
let btnIgual = document.getElementById("btnIgual");
let btnLimpiar = document.getElementById("btnLimpiar");
let pantalla = document.getElementById("pantalla");
let operacion = "";
let resultado = 0;
let res;

btn1.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn1.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn1.innerText;
        pantalla.value=operacion;
    }
})//btn1

btn2.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn2.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn2.innerText;
        pantalla.value=operacion;
        
    }
})//btn2

btn3.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn3.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn3.innerText;
        pantalla.value=operacion;
        
    }
})//btn3

btn4.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn4.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn4.innerText;
        pantalla.value=operacion;
    }
})//btn4

btn5.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn5.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn5.innerText;
        pantalla.value=operacion;
    }
})//btn5

btn6.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn6.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn6.innerText;
        pantalla.value=operacion;
    }
})//btn6

btn7.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn7.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn7.innerText;
        pantalla.value=operacion;
    }
})//btn7

btn8.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn8.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn8.innerText;
        pantalla.value=operacion;
    }
})//btn8

btn9.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn9.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn9.innerText;
        pantalla.value=operacion;
        historialOperaciones = operacion;
    }
})//btn9

btn0.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btn0.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btn0.innerText;
        pantalla.value=operacion;
    }
})//btn0

btnPunto.addEventListener("click", function(event){
    event.preventDefault();
    if(res){
        operacion = btnPunto.innerText;
        pantalla.value = operacion;
        res = false;
    }
    else{
        operacion += btnPunto.innerText;
        pantalla.value=operacion;
    }
})//btnPunto

function limpiar(){
    operacion="";
    pantalla.value="0";
    resultado = 0;
    res = false;
}

btnLimpiar.addEventListener("click", function(event){
    event.preventDefault();
    limpiar();
})//btnLimpiar

btnIgual.addEventListener("click", function(event) {
    event.preventDefault();
    resultado = eval(operacion);
    pantalla.value = `${resultado}`;
      operacion = resultado;
    res = true;
})//btnIgual

btnSumar.addEventListener("click", function(event) {
    event.preventDefault();
    pantalla.value=operacion;
    operacion += btnSumar.innerText;
    res = false;
})//btnSumar

btnRestar.addEventListener("click", function(event) {
    event.preventDefault();
    operacion += btnRestar.innerText;
    pantalla.value=operacion;
    res = false;
})//btnRestar

btnMultiplicar.addEventListener("click", function(event) {
    event.preventDefault();
    operacion += btnMultiplicar.innerText;
    pantalla.value=operacion;
    res = false;
})//btbMultiplicar

btnDividir.addEventListener("click", function(event) {
    event.preventDefault();
    operacion += btnDividir.innerText;
    pantalla.value=operacion;
    res = false;
})//btnDividir
