var operacion = {
    "+": sumar,
    "/": dividir,
    "-": restar,
    "*": multiplicar
};
var otros = {
    ".":agregarPunto,
    "c":borrarActual,
    "=":darResultado
}
var inicio = true;
var operador ="";
var operacioActual = false;
var valor = 0;
var valorActual = 0;
var punto  = true
var resultado = document.querySelector("p")
function agregartexto(texto){
    if(resultado.textContent === "0" && texto !=="."){
        resultado.textContent =texto;
    }else{
        resultado.textContent +=texto;
    }
    
}
function agregarPunto(){
    if (punto){
        agregartexto(".")
        punto = false;
    }
    
}
function borrarActual(){
    punto = true;
    resultado.textContent ="0";
}
function darResultado(){
    resultado.textContent= operacion[operador](parseFloat(valor), parseFloat(resultado.textContent));
    inicio = true;
}
function sumar(a, b) {
    console.log("sumando")
    valor = a+b;
    console.log(valor);
    return a+b
}
function restar(a, b) {
    console.log("restando")
    if(inicio){valor = b;
        inicio = false;
    }else{
        valor = a-b;
    }
    console.log(valor);    
    return valor
}
function multiplicar(a, b) {
    console.log("multiplicando")
    if(inicio){valor = 1*b;
        inicio = false;
    }else{
        valor = a*b;
    }
    console.log(valor);    
    return valor

}
function dividir(a, b) {
    console.log("dividiendo")
    if(inicio){valor = a/1;
        inicio = false;
    }else{
        valor = a/b;
    }
    console.log(valor);
    return valor

}

function operaciones(accion) {
    if(operacion[accion]){
        operador = accion;
        operacion[accion](parseFloat(valor), parseFloat(resultado.textContent));
        operacioActual = true;
    }else if (otros[accion]){
        otros[accion]()
    }
    else{
        if(operacioActual !==true){
            operacioActual = false;
            agregartexto(accion);
        }else{
            resultado.textContent ="";
            agregartexto(accion);
        }
        
    }


}
document.addEventListener("DOMContentLoaded", () => {

})