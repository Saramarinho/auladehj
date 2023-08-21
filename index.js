/*
*Primeiro programa em JavaScript
*Sara Marinho de Jesus
*/

console.log("Olá mundo!");
//prompt("Qual é o seu nome?");
const VariavelA = 100;
const VariavelB = VariavelA + 50;
const VariavelC = VariavelA / VariavelB;
console.log(VariavelA);
console.log(VariavelB);
console.log(VariavelC); 
let numero = 5;
console.log(numero);
numero = 120 + 5;
console.log(numero);
//concatenar textos
/*let nome = "Sara";
let sobrenome = "Marinho";
let idade = 16;
console.log("Olá", nome, sobrenome, "voce tem ", idade, "anos");
*/
//booleanas
const variavelFalsa = false;
const variavelVerdadeira = true;
console.log("Variavel falsa: "+variavelFalsa);
console.log("Variavel verdadeira: "+ variavelVerdadeira);
//exercicio 1
let nome = "Sara";
let sobrenome = "Marinho de Jesus";
let idade = 16;
let status = "estudante";
console.log(nome, sobrenome, "voce tem", idade, "anos", "e voce é uma", status);
//typeof
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof status);
const vazio = null;
console.log(typeof vazio);
//PROMPT
let valor = prompt("seu nome");
console.log(valor)

//exercicio 2
let Myname = prompt("name");
let myage = prompt("age");
console.log(typeof Myname);
console.log(typeof myage);

