// Exercício 11 - Calcular potência b^e sem Math.pow()
// Base b e expoente e podem ser alterados

export function ex11() {
  const b = 2; // base (exemplo)
  const e = 5; // expoente (exemplo)

  if (e === 0) return `${b} elevado à ${e} = 1`;

  let resultado = 1;
  let contador = 0;
  while (contador < e) {
    resultado *= b;
    contador++;
  }
  return `${b} elevado à ${e} = ${resultado}`;
}
