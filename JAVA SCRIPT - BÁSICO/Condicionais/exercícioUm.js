const prompt = require("readline-sync")

const idade = Number(prompt.question("Qual é a sua idade?"));

//const maiorIdade = (idade >= 18)

//Estrtura de condição if/else

if(idade >= 18){

  console.log("Você é maior de idade"); 

}else{

  console.log("Você é menor de idade");
}