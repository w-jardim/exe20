// Exercício 1
function exibirNomeSexo() {
  const nome = document.getElementById("nome").value;
  const sexo = document.getElementById("sexo").value;
  document.getElementById("res1").textContent = `Olá, ${nome}! Sexo: ${sexo}`;
}

// Exercício 2
function calcularSomaMultiplicacao() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);
  const n4 = Number(document.getElementById("n4").value);
  const soma = n1 + n2;
  const multiplicacao = n3 * n4;
  document.getElementById("res2").textContent = `Soma: ${soma}, Multiplicação: ${multiplicacao}`;
}

// Exercício 3
function converterMoeda() {
  const dolar = Number(document.getElementById("dolar").value);
  const cotacao = 5.1; // valor fictício
  const real = dolar * cotacao;
  document.getElementById("res3").textContent = `Valor em reais: R$ ${real.toFixed(2)}`;
}

// Exercício 4
function mostrarVizinho() {
  const num = Number(document.getElementById("num").value);
  document.getElementById("res4").textContent = `Antecessor: ${num - 1}, Sucessor: ${num + 1}`;
}

// Exercício 5
function calcularAumento() {
  const salario = Number(document.getElementById("salario").value);
  const novoSalario = salario * 1.15;
  document.getElementById("res5").textContent = `Novo salário com 15% de aumento: R$ ${novoSalario.toFixed(2)}`;
}

// Exercício 6
function converterCelsius() {
  const f = Number(document.getElementById("fahrenheit").value);
  const c = ((f - 32) * 5) / 9;
  document.getElementById("res6").textContent = `Temperatura em Celsius: ${c.toFixed(1)}°C`;
}

// Exercício 7
function calcularMedia() {
  const m1 = Number(document.getElementById("m1").value);
  const m2 = Number(document.getElementById("m2").value);
  const m3 = Number(document.getElementById("m3").value);
  const media = (m1 + m2 + m3) / 3;
  document.getElementById("res7").textContent = `Média: ${media.toFixed(2)}`;
}

// Exercício 8
function exercicio8() {
  const vendas = document.getElementById("vendas").value;
  const valores = vendas.split(',').map(v => Number(v.trim()));
  const total = valores.reduce((acc, val) => acc + val, 0);
  const maior = Math.max(...valores);
  const menor = Math.min(...valores);
  const media = total / valores.length;
  document.getElementById("res8").textContent = `Total: ${total}\nMédia: ${media.toFixed(2)}\nMaior: ${maior}\nMenor: ${menor}`;
}

// Exercício 9
function mostrarCalculos() {
  const numero = Number(document.getElementById("numero").value);
  const quadrado = numero ** 2;
  const raiz = Math.sqrt(numero);
  document.getElementById("res9").textContent = `Quadrado: ${quadrado}, Raiz quadrada: ${raiz.toFixed(2)}`;
}

// Exercício 10
function calcularPrestacao() {
  const valor = Number(document.getElementById("valor").value);
  const taxa = Number(document.getElementById("taxa").value);
  const dias = Number(document.getElementById("dias").value);
  const prestacao = valor + (valor * (taxa / 100) * dias);
  document.getElementById("res10").textContent = `Valor da prestação: R$ ${prestacao.toFixed(2)}`;
}
