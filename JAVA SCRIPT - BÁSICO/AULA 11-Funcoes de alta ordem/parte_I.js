
// * FUNÇÕES DE ALTA ORDEM DE ARRAY

//* 1. função: ForEach, que percorre todo array
// Primiro parâmetro retorna os elementos do array
// Segundo parâmetro retorna os index do array
// terceiro parâmetro retorna o array completo

const numeros = [40, 34, 67, 89, 23, 18];

numeros.forEach ((value, index, arrayCompleto) => {
  console.log(value, index, arrayCompleto)

});

console.clear();

//* 2. função: Find, ajuda a encontrar um elemento dentro do array

// const encontrados = numeros.find((elemento) => {
//   return elemento > 30
// });

// console.log(encontrados)

const pessoas = [

  {
    nome: 'pessoa 1',
    idade: 34,
    altura: 1.77,
  },
  {
    nome: 'pessoa 2',
    idade: 25,
    altura: 1.56,
  },
  {
    nome: 'pessoa 3',
    idade: 46,
    altura: 1.82,
  },

]

// * 2 Formas diferentes de usar a função
// const pessoasEncontradas = pessoas.find((pessoa)=> pessoa.idade > 20 && pessoa.altura < 1.7);

const pessoasEncontradas = pessoas.find((pessoa) => {

  return pessoa.idade > 20 && pessoa.altura < 1.7
});
console.clear();
console.log(pessoasEncontradas);





