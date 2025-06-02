// Exercício 3 - Exibir os quadrados dos números inteiros de 15 a 200

export function ex3() {
  const resultado = [];
  let i = 15;
  while (i <= 200) {
    resultado.push(`${i}² = ${i * i}`);
    i++;
  }
  return resultado;
}
