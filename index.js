var funOperaciones = {
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
var operacion;
var igual = true;
var valor =false;
var operador= true;
var resultado = document.querySelector("p")
function agregartexto(texto){
    if(resultado.textContent === "0" && texto !=="."){
        resultado.textContent =texto;
    }else{
        resultado.textContent +=texto;
    }
}
function agregarPunto(){
    if (!resultado.textContent.includes(".")) {
        agregartexto(".");
    }
}
function borrarActual(){
    resultado.textContent ="0";
}
function darResultado(){
    if(!operador){
        resultado.textContent = valor;
    }else{
        resultado.textContent = funOperaciones[operacion](parseFloat(resultado.textContent));
    }
    igual = false;
}
function sumar(a) {
    console.log("sumando")
    if(!valor){
        valor = a;
    }else{
        valor += a;
    }
    console.log(valor);
    return valor
}
function restar(a) {
    console.log("restando")
    if(!valor){
        valor = a;
    }else{
        valor -=a;
    }
    console.log(valor);    
    return valor
}
function multiplicar(a) {
    console.log("multiplicando")
    if(!valor){
        valor = a;
    }else{
        valor *=a;
    }
    console.log(valor);    
    return valor

}
function dividir(a) {
    console.log("dividiendo")
    if(!valor){
        valor = a;
    }else{
        valor /=a;
    }
    console.log(valor);
    return valor
}
function operaciones(accion) {
    if(funOperaciones[accion]){
        if (operador){
            operacion = accion;
            if (igual){
                funOperaciones[accion](parseFloat(resultado.textContent));
            }
            resultado.textContent = valor
            operador =false;
        }
            
    }else if (otros[accion]){
        otros[accion]()
    }
    else{
        if(!operador){
            resultado.textContent =0;
        }
        agregartexto(accion);
        operador=true;
        igual = true;
    }
}