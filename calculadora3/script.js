//contiene la operacion o resultado parcial
let parcial ="";
//elemento donde se colocan la operacion que se esta realizando
let operRealizada = document.getElementById("operacionrealizada");
//elemento donde se coloca el resultado
let txtResul = document.getElementById("txtresultado");

//ultimo operado seleccionado
let operadorSeleccionado = "";

//numero ingresado
let numero = "";

//para determinar si lo ultimo precionada es un numero o una operacion
let ultimoDigitoPresionado = "";

function operador(num){
    //concateno el numero
    numero = numero + num;
    //contateno la operacion hasta el momento
    parcial = parcial + num;
    //muestro
    operRealizada.innerHTML= parcial;
    console.log(parcial);
    //operRealizada.innerHTML = "PEPE";
    //controlamos la division por 0
    if(numero=='0' && operadorseleccionado=='/'){
        limpiar();
        txtResul.innerHTML = "Indefinido";
        return;
    }
    //guardo el tipo de tecla precionada por ultima vez
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado='numero';
    }
}

//detecto cuando se preciona una operacion
function operacion(oper){
    //guardo la operacion que eligio
    operadorSeleccionado= oper;
    //actualizo el tipo de letra presionado
    ultimoDigitoPresionado ="operacion";
    //voy armando la formula matematica
    parcial = parcial + oper;
    numero = "";
    operRealizada.innerHTML = parcial;
}
//realizado el calculo de la formula matematica cuando preciona =
function calculo(){
    //con eval evaluo la formula matematica que esta en formato string
    parcial = eval(parcial);
    //txtResul.innerHTML = parcial;
    operRealizada.innerHTML = parcial;
    //vuelvo a convertir en string por si continua la cormula
    parcial = parcial.toString();
    numero = "";

    operRealizada.innerHTML = parcial;
}

//funcion que limpia todo
function limpiar(){
operadorSeleccionado = ";"
parcial = "";
txtResul.innerHTML = "";
numero = "";
operRealizada.innerHTML = 0;
}
