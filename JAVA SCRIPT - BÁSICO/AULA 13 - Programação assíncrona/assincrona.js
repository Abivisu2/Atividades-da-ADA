const fs = require ('fs')

// *1. CallBacks 

// Função assíncrona - Ler um arquivo leva um tempo 
fs.readFile('AULA 13 - Programação assíncrona/arquivo.txt', (erro, conteudoDoArquivo) => {
  if(erro){
    console.log('Ocorreu um erro, verifique o arquivo!', erro);
  }else{
    console.log(String(conteudoDoArquivo));
  }

});

// *A prova que o JS executa primeiro aquilo que leva menos tempo a acontecer, valorizando a programação assíncrona

console.log('MESMO ESTANDO DEPOIS, EXECUTA PRIMEIRO')
console.clear();

// EXEMPLO 2 - setTimeOut (função que cria um timmer)

console.log('Antes do setTimeOut');

setTimeout(() => {
  console.log('isso vai ser executado após 2 segundos!');
}, 2 * 1000);

console.log('Depois do setTimeOut');