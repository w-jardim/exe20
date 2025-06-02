// Exercício 1 - Exibir os números de 1 a 100

export function ex1() {
  const resultado = [];
  let i = 1;
  while (i <= 100) {
    resultado.push(i);
    i++;
  }
  return resultado;
}
