/*
Desafio 01
Alguns números inteiros positivos n possuem uma propriedade na qual
a soma de n + reverso(n) resultam em números ímpares. Por exemplo,
36 + 63 = 99 e 409 + 904 = 1313. Considere que n ou reverso(n) 
não podem começar com 0. Existem 120 números reversíveis abaixo de 1000.
Construa um algoritmo que mostre na tela todos os números n onde 
a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.
*/


function acharReversosComDigitosImpares(limite){
  let arr = [];
  let numeroReverso, temTodosDigitosImpares;
  for(let i = 1; i <= limite; i++){
    if(i % 10 === 0){
      continue;
    }
    numeroReverso = i.toString().split("").reverse().join("");
    numeroReversoSomado = +numeroReverso + i;
    temTodosDigitosImpares = numeroReversoSomado.toString().split("").every(el => +el % 2 !== 0)
    if(temTodosDigitosImpares){
      arr.push({i, soma: numeroReversoSomado});
    }
  }
  return arr;
}

const aux = acharReversosComDigitosImpares(1000000);
console.table(aux)
console.table(`O total de números reversos é: ${aux.length}`);