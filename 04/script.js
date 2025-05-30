const resultado = document.getElementById("resultado");

function exercicio1() {
  let num = parseFloat(prompt("Digite um número:"));
  if (num > 20) {
    resultado.textContent = "Metade do número: " + (num / 2);
  } else {
    resultado.textContent = "Número sem alteração: " + num;
  }
}

function exercicio2() {
  let capital = prompt("Qual é a capital do Brasil?").toLowerCase();
  const respostaCorreta = "brasilia";
  if (capital === respostaCorreta) {
    resultado.textContent = "Resposta certa!";
  } else {
    resultado.textContent = "Resposta errada! A capital do Brasil é Brasília.";
  }
}

function exercicio3() {
  let numero = parseInt(prompt("Digite um número:"));
  if (numero % 2 === 0) {
    resultado.textContent = "O número " + numero + " é par.";
  } else {
    resultado.textContent = "O número " + numero + " é ímpar.";
  }
}

function exercicio4() {
  let valor = parseInt(prompt("Digite um valor numérico inteiro:"));
  if (valor % 4 === 0 && valor % 5 === 0) {
    resultado.textContent = "Valor: " + valor;
  } else {
    resultado.textContent = "Valor não é divisível por 4 e 5.";
  }
}

function exercicio5() {
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let nota3 = parseFloat(prompt("Digite a terceira nota:"));
  let nota4 = parseFloat(prompt("Digite a quarta nota:"));
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  if (media >= 5) {
    resultado.textContent = "Aprovado! Média: " + media.toFixed(2);
  } else {
    resultado.textContent = "Reprovado! Média: " + media.toFixed(2);
  }
}

function exercicio6() {
  let valor1 = parseInt(prompt("Digite o primeiro valor numérico inteiro:"));
  let valor2 = parseInt(prompt("Digite o segundo valor numérico inteiro:"));
  let maior = Math.max(valor1, valor2);
  let menor = Math.min(valor1, valor2);
  let diferenca = maior - menor;
  resultado.textContent = `A diferença entre o maior valor (${maior}) e o menor valor (${menor}) é: ${diferenca}`;
}

function exercicio7() {
  let valorInteiro = parseInt(prompt("Digite um valor inteiro (positivo ou negativo):"));
  let modulo = Math.abs(valorInteiro);
  resultado.textContent = `O módulo do valor ${valorInteiro} é: ${modulo}`;
}

function exercicio8() {
  let numeroQualquer = parseInt(prompt("Digite um número inteiro qualquer:"));
  if (numeroQualquer >= 1 && numeroQualquer <= 10) {
    resultado.textContent = `O número ${numeroQualquer} está na faixa de 1 a 10.`;
  } else {
    resultado.textContent = `O número ${numeroQualquer} não está na faixa de 1 a 10.`;
  }
}

function exercicio9() {
  let numeroPergunta = parseFloat(prompt("Digite um número:"));
  if (numeroPergunta > 0) {
    resultado.textContent = `O número ${numeroPergunta} é positivo.`;
  } else if (numeroPergunta < 0) {
    resultado.textContent = `O número ${numeroPergunta} é negativo.`;
  } else {
    resultado.textContent = "O número é nulo.";
  }
}

function exercicio10() {
  let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
  let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
  if (num1 % num2 === 0) {
    resultado.textContent = `${num2} é um divisor de ${num1}.`;
  } else {
    resultado.textContent = `${num2} não é um divisor de ${num1}.`;
  }
}

function exercicio11() {
  let numeroTresCasas = parseInt(prompt("Digite um número de 3 casas:"));
  if (numeroTresCasas >= 100 && numeroTresCasas <= 999) {
    let centenas = Math.floor(numeroTresCasas / 100);
    resultado.textContent = "O algarismo das centenas é: " + centenas;
  } else {
    resultado.textContent = "Número inválido! Digite um número de 3 casas.";
  }
}

function exercicio12() {
  let numeros = [];
  for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
    numeros.push(numero);
  }
  let maiorNumero = Math.max(...numeros);
  let menorNumero = Math.min(...numeros);
  resultado.textContent = `O maior número é: ${maiorNumero}\nO menor número é: ${menorNumero}`;
}

function exercicio13() {
  let a = parseFloat(prompt("Digite o valor de a:"));
  let b = parseFloat(prompt("Digite o valor de b:"));
  let c = parseFloat(prompt("Digite o valor de c:"));
  let valores = [a, b, c];
  valores.sort((x, y) => x - y);
  resultado.textContent = "Valores em ordem crescente: " + valores.join(", ");
}
