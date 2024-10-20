
// 5: Map - Cria um novo Array que possui o mesmo tamanho que o array original. composto pelos elementos que foram retornados a cada iteração.

const numeros = [40, 34, 67, 89, 23, 18];

// numeros.map((elemento, index, array) => {

// console.log(elemento, index, array);

// })

const novoArray = numeros.map((elemento) => {

  return elemento * 2

})

console.log(novoArray);

console.clear();
// Exemplo 1- elevando todos números ao quadrado

const valores = [40, 34, 67, 89, 23, 8];

const valoresAoquadrado = valores.map((valor) => valor ** 2);
console.log(valoresAoquadrado)

console.clear();

// Exemplo 2- Adicionando uma propriedade aos objetos do array;

const carrinho = [

  {produto: 'Feijão', preco: 7.98, quantidade: 3},
  {produto: 'Arroz', preco: 4.98, quantidade: 5},
  {produto: 'Leite 1L', preco: 6.99, quantidade: 2}
]

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {

  return{
    ...itemDoCarrinho, 
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade
  
  }
});

console.log(carrinhoComTotal)