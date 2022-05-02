

function mostra(frase){
    document.write(frase);
}

function imc(){
    
    return peso / (altura * altura);
     
}

var nome = prompt("Qual seu nome?");
var peso = parseFloat(prompt(nome +" Digite seu peso corporal"));
var altura= parseFloat(prompt(nome +" Digite sua altura"));

var calcImc = imc(peso ,altura);

document.write(nome +", seu imc é " + calcImc);
document.write("<br> <br>");

if(calcImc<18.5){
    mostra("você está abaixo do peso")
 
 }
 
 if(calcImc >35){
 
     mostra("você esta acima do peso")
 }
 
 if(calcImc >=18.5 && calcImc <=35){
     
        mostra("seu IMC está na média")
  
 }









 
