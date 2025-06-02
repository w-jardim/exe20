// Exercício 2 - Exibir os números de 100 a 1 em ordem decrescente

export function ex2() {
  const resultado = [];
  let i = 100;
  while (i >= 1) {
    resultado.push(i);
    i--;
  }
  return resultado;
}
