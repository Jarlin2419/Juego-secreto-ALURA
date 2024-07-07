let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario>numeroSecreto){
            asignarTextoElemento('p', 'el numero secreto es menor');
        }else {
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
   }     
     return;
}
        function limpiarCaja(){
            document.querySelector('#valorUsuario').value='';
        }

        function generarNumeroSecreto(params) {
            let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
            //si el numero generado esta en la lista hacemos esto sino seguimos
            console.log(numeroGenerado);
            console.log(listaNumerosSorteados);
            if (listaNumerosSorteados.length==numeroMaximo){
                asignarTextoElemento('p', 'ya se sortearon los numeros posibles')
            } else { 
            if (listaNumerosSorteados.includes(numeroGenerado)){
                  return generarNumeroSecreto();
            }else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
           }
        }
        function condicionesIniciales(){
            asignarTextoElemento('h1', 'Juego del numero secreto!');
            asignarTextoElemento('p', `Indica el numero secreto del 1 al ${numeroMaximo}`);
            numeroSecreto=generarNumeroSecreto();
            intentos=1;

        }
        function reiniciarJuego(){
            limpiarCaja();
            condicionesIniciales();
            document.querySelector('#reiniciar').setAttribute('disabled', 'true');

        }

condicionesIniciales();