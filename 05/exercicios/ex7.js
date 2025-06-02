// Exercício 7 - Apresentar todos os números divisíveis por 4 menores que 200
// Usar if para verificar divisibilidade, contador inicia em 1

export function ex7() {
  const resultado = [];
  let i = 1;
  while (i < 200) {
    if (i % 4 === 0) {
      resultado.push(i);
    }
    i++;
  }
  return resultado;
}
