// Exercício 14 - Calcular fatorial de 5 (5!)

export function ex14() {
  let fatorial = 1;
  let i = 1;
  while (i <= 5) {
    fatorial *= i;
    i++;
  }
  return `5! = ${fatorial}`;
}
