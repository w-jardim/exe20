// Exercício 12 - Ler números reais até digitar -1; mostrar maior, menor e média (exemplo simulado)

export function ex12() {
  // Para não usar prompt em ambiente não-browser, vamos simular entrada:
  const entradas = [10, 5.5, 8, 12, -1]; // Exemplo de números digitados
  let i = 0;
  let maior = -Infinity;
  let menor = Infinity;
  let soma = 0;
  let contador = 0;

  while (true) {
    let num = entradas[i];
    i++;
    if (num === -1) break;

    if (num > maior) maior = num;
    if (num < menor) menor = num;

    soma += num;
    contador++;
  }

  const media = contador === 0 ? 0 : (soma / contador).toFixed(2);

  return `Maior número: ${maior}\nMenor número: ${menor}\nMédia: ${media}`;
}
