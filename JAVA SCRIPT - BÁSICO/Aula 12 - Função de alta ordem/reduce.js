
// 7: REDUCE

// Reduce é um método que reduz os elementos de um Array, resultando em um elemnto único. 

numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elemento, index, arrayCompleto) => {

  return acumulador + elemento;


}, 0);
// O zero (0) é a inicialzação do acumulador 

console.log(soma)

console.clear();

const media = numeros.reduce((acumulador, elemento, _ , arrayCompleto) => {

  return elemento / arrayCompleto.length + acumulador;


}, 0);

console.log(media)
// console.log(soma / numeros.length) para achar a média, pode se fazer de duas maneiras, dividindo o elemento pelo tamanho do array para ir somando uma média ponderada ao acumulador e/ou dividir no final a soma pelo tamanho do array.

console.clear();

// Exemplo 2

const somaDosPares = numeros.reduce((acumulador, numero) => {

  if(numero % 2 === 2){
    return acumulador + numero;
  }else{
    return acumulador;
  }

}, 0);

console.log(somaDosPares)
console.clear();

// Exemplo 3 - Total a pagar do carrinho 

const carrinho = [

  {produto: 'Feijão', preco: 7.98, quantidade: 3},
  {produto: 'Arroz', preco: 4.98, quantidade: 5},
  {produto: 'Leite 1L', preco: 6.99, quantidade: 2}
]

const totalApagar = carrinho.reduce((acumulador, item) => {

  return (item.preco * item.quantidade) + acumulador

}, 0);

console.log(totalApagar)