// Exercício 15 - Série de Fibonacci até o 15º termo

export function ex15() {
  const resultado = [];
  let a = 1;
  let b = 1;
  let contador = 1;

  while (contador <= 15) {
    resultado.push(a);
    const proximo = a + b;
    a = b;
    b = proximo;
    contador++;
  }

  return resultado;
}
