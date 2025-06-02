// Exercício 9 - Somar os valores pares entre 0 e 500
// Variação de 2 em 2

export function ex9() {
  let soma = 0;
  let i = 0;
  while (i <= 500) {
    soma += i;
    i += 2;
  }
  return `Soma dos números pares entre 0 e 500: ${soma}`;
}
