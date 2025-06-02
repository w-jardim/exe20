// Exercício 5 - Apresentar a tabela de multiplicação de um número qualquer (exemplo: 2)

export function ex5() {
  const numero = 2; // Pode ser alterado para qualquer número desejado
  const resultado = [];
  let i = 1;
  while (i <= 10) {
    resultado.push(`${numero} . ${i} = ${numero * i}`);
    i++;
  }
  return resultado;
}
