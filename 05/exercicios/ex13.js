// Exercício 13 - Imprimir a tabuada do 3 ao 6

export function ex13() {
  const resultado = [];
  let num = 3;

  while (num <= 6) {
    let i = 1;
    resultado.push(`Tabuada do ${num}:`);
    while (i <= 10) {
      resultado.push(`${num} x ${i} = ${num * i}`);
      i++;
    }
    resultado.push(''); // linha em branco para separar tabuadas
    num++;
  }

  return resultado;
}
