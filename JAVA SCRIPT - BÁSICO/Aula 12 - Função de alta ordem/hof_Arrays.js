
// 3: Every - verifica se todas os lementos do array segue uma determinada condição retornada pela função.

const numeros = [40, 34, 67, 89, 23, 18];

const todosPositivos = numeros.every((elemento) => elemento > 0);

if(todosPositivos > 0){

  console.log(`Todos os números são positivos: ${todosPositivos}`)
  
}else{
  
  console.log(`Nem todos os números são positivos: ${todosPositivos}`)

}

console.clear()

// 4: Some -  Verifica se algum elemento do Array torna verdadeiro uma determinada condição retornada pela função.

const numeros2 = [-1, 3, 7, -3, 5];

const resultado = numeros2.some((numero) => numero > 0);

console.log(resultado)