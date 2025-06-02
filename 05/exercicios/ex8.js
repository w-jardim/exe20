// Exercício 8 - Apresentar todos os números ímpares entre 0 e 20
// Verificação com if

export function ex8() {
  const resultado = [];
  let i = 0;
  while (i <= 20) {
    if (i % 2 !== 0) {
      resultado.push(i);
    }
    i++;
  }
  return resultado;
}
