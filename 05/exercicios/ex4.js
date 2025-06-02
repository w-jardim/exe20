// Exercício 4 - Apresentar a soma dos cem primeiros números inteiros

export function ex4() {
  let soma = 0;
  let i = 1;
  while (i <= 100) {
    soma += i;
    i++;
  }
  return `Soma dos números de 1 a 100: ${soma}`;
}
