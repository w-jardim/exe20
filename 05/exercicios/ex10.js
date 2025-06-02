// Exercício 10 - Apresentar potências de 3 de 0 a 15

export function ex10() {
  const resultado = [];
  let i = 0;
  while (i <= 15) {
    let potencia = 1;
    let contador = 0;
    while (contador < i) {
      potencia *= 3;
      contador++;
    }
    resultado.push(`3 elevado à ${i} = ${potencia}`);
    i++;
  }
  return resultado;
}
