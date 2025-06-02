// Exercício 6 - Multiplicação sucessiva de n por 3 enquanto o produto for menor que 250

export function ex6() {
  let n = 5; // Exemplo de número menor ou igual a 50; pode ser modificado
  const resultado = [];
  let produto = n;
  
  while (produto < 250) {
    resultado.push(produto);
    produto *= 3; // multiplica por 3 sucessivamente
  }
  
  return resultado;
}
