/*
Desafio 03
Dado um vetor de números e um número n. Determine a soma com o menor número de elementos entre os números do 
vetor mais próxima de n e também mostre os elementos que compõem a soma. Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.

Exemplo:
Entrada de dados:
N = 10
V = [2, 3, 4]
Saída de dados:
10
[2, 4, 4]
[3, 3, 4]

Explicação:

Se N = 10 e V = [2, 3, 4] você pode utilizar as seguintes somas:
[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 4, 4] ou [3, 3, 4]. 
Como a quantidade de elementos em [2, 4, 4] e [3, 3, 4] é igual, os dois conjuntos devem ser mostrados.
*/


function verificarSoma(numeroAlvo, soma, arrayNumeros, retorno, contador, auxarr, numeroElementos) {
  contador++;
  if(soma > numeroAlvo || contador > numeroElementos) {
    return;
  }
  
  if(soma === numeroAlvo){
    retorno.push(auxarr);
    if(contador < numeroElementos[0]) {
      numeroElementos[0] = contador;
    }
    return;
  }
  for (let i = 0; i < arrayNumeros.length; i++) {
    verificarSoma(numeroAlvo, soma + arrayNumeros[i], arrayNumeros, retorno, contador, [...auxarr, arrayNumeros[i]], numeroElementos);
  }
}

let arrayNumeros = [2,3,4];
let retorno = [];
let numeroElementos = [Number.MAX_SAFE_INTEGER];
verificarSoma(10, 0, arrayNumeros, retorno, 0, [], numeroElementos);
console.log(retorno.filter(el => el.length < numeroElementos[0]));