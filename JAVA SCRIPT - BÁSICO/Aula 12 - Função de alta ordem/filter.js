
// 6: FILTER
// Enquanto o map sempre retorna um array do mesmo tamanho, o Filter sempre retorna um array de tamanho inferior ao array original.

let valores = [40, 34, 67, 89, 23, 8, 5, 9, 30];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares)

console.clear();

// Exemplo 1 - Filtrar alunos com média maior ou igual há 85.

const alunos = [
  {nome: 'Sophia', media: 96},
  {nome: 'Flávia', media: 84},
  {nome: 'Beto', media: 100},
  {nome: 'Jaime', media: 65},
  {nome: 'Abi', media: 90}
];

const mediamaiorque85 = alunos.filter((aluno) => aluno.media >= 85);

console.log(mediamaiorque85)

console.clear();

// Exemplo 2 - filtrar produtos com valor menos que 10 Reais e que seja diferente de bebida.
const produtos = [
  {nome: 'Arroz', preco: 6.5, tipo: 'Comida'},
  {nome: 'Suco de manga', preco: 10, tipo: 'Bebida'},
  {nome: 'Pizza', preco: 12.49, tipo: 'Comida'},
  {nome: 'maça', preco: 4.5, tipo: 'Comida'},
  {nome: 'Chocolate', preco: 1.5, tipo: 'Comida'},
  {nome: 'Coca-Cola', preco: 6.99, tipo: 'Bebida'},
];

const MenosDeDezReaisEnaoBebida = produtos.filter((produto) => produto.preco < 10 && produto.tipo !== 'Bebida');

console.log(MenosDeDezReaisEnaoBebida)