const numeros = document.getElementsByClassName("numeros");

let numero1;
let numero2;
let numero_escrito="";
let nuevo_numero="";
let resultado;
let operacion="";


for (const numero of numeros) {
    numero.addEventListener("click", function tenerNumero() {
        let x=numero.innerHTML;
        numero_escrito=numero_escrito+x;
        document.getElementById("resultado").innerHTML=numero_escrito;
    })
}

function sumar() {
    numero_escrito=numero_escrito+" + ";
    operacion="sumar";
}

function multiplicar() {
    numero_escrito=numero_escrito+"*";
    operacion="multiplicar";
}

function dividir() {
    numero_escrito=numero_escrito+"/";
    operacion="dividir";
}

function restar() {
    numero_escrito=numero_escrito+"-";
    operacion="restar";
}

function igual() {
    console.log(numero_escrito);
    if (operacion=="sumar") {
        nuevo_numero=numero_escrito.split("+");
        numero1=nuevo_numero[0];
        numero1=parseInt(numero1, 10);
        console.log("Este es el numero1 pasado: "+numero1);
        numero2=nuevo_numero[1];
        numero2=parseInt(numero2, 10);
        console.log("Este es el numero2 pasado: "+numero2);
        resultado=numero1+numero2;
        console.log(resultado);
        operacion="";
        numero1=resultado;
        numero2=0;
        numero_escrito="";
        document.getElementById("resultado").innerHTML=resultado;
        nuevo_numero="";
    }
    else if (operacion=="multiplicar") {
        nuevo_numero=numero_escrito.split("*");
        numero1=nuevo_numero[0];
        numero1=parseInt(numero1, 10);
        console.log("Este es el numero1 pasado: "+numero1);
        numero2=nuevo_numero[1];
        numero2=parseInt(numero2, 10);
        console.log("Este es el numero2 pasado: "+numero2);
        resultado=numero1*numero2;
        console.log(resultado);
        operacion="";
        numero1=resultado;
        numero2=0;
        numero_escrito="";
        document.getElementById("resultado").innerHTML=resultado;
        nuevo_numero="";
    }
    else if (operacion=="restar") {
        nuevo_numero=numero_escrito.split("-");
        numero1=nuevo_numero[0];
        numero1=parseInt(numero1, 10);
        console.log("Este es el numero1 pasado: "+numero1);
        numero2=nuevo_numero[1];
        numero2=parseInt(numero2, 10);
        console.log("Este es el numero2 pasado: "+numero2);
        resultado=numero1-numero2;
        console.log(resultado);
        operacion="";
        numero1=resultado;
        numero2=0;
        numero_escrito="";
        document.getElementById("resultado").innerHTML=resultado;
        nuevo_numero="";
    }
    else if (operacion=="dividir") {
        nuevo_numero=numero_escrito.split("/");
        numero1=nuevo_numero[0];
        numero1=parseInt(numero1, 10);
        console.log("Este es el numero1 pasado: "+numero1);
        numero2=nuevo_numero[1];
        numero2=parseInt(numero2, 10);
        console.log("Este es el numero2 pasado: "+numero2);
        resultado=numero1/numero2;
        console.log(resultado);
        operacion="";
        numero1=resultado;
        numero2=0;
        numero_escrito="";
        document.getElementById("resultado").innerHTML=resultado;
        nuevo_numero="";
    }
}