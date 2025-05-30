// script.js

// Função utilitária para limpar área de saída
function limparSaida() {
  const output = document.getElementById('output');
  output.innerHTML = '';
}

// Função para mostrar texto na saída (com quebra de linha)
function mostrar(texto) {
  const output = document.getElementById('output');
  const p = document.createElement('p');
  p.textContent = texto;
  output.appendChild(p);
}

// Questão 1 — Classificação por idade
function questao1() {
  limparSaida();
  const n = parseInt(prompt('Quantas pessoas deseja cadastrar?'));
  if (isNaN(n) || n <= 0) {
    alert('Número inválido');
    return;
  }
  let criancas = 0, adolescentes = 0, adultos = 0, idosos = 0;
  for (let i = 1; i <= n; i++) {
    let idade = parseInt(prompt(`Informe a idade da pessoa ${i}:`));
    if (isNaN(idade) || idade < 0) {
      alert('Idade inválida');
      i--;
      continue;
    }
    if (idade <= 12) criancas++;
    else if (idade <= 17) adolescentes++;
    else if (idade <= 59) adultos++;
    else idosos++;
  }
  mostrar(`Crianças (até 12 anos): ${criancas}`);
  mostrar(`Adolescentes (13 a 17 anos): ${adolescentes}`);
  mostrar(`Adultos (18 a 59 anos): ${adultos}`);
  mostrar(`Idosos (60+ anos): ${idosos}`);
}

// Questão 2 — Controle de estoque com switch
function questao2() {
  limparSaida();
  let estoque = 100;
  let sair = false;
  while (!sair) {
    let opcao = prompt(
      'Controle de Estoque:\n' +
      '1. Entrada de produto\n' +
      '2. Saída de produto\n' +
      '3. Verificar estoque\n' +
      '4. Sair\n' +
      'Digite uma opção:'
    );
    switch (opcao) {
      case '1': {
        let entrada = parseInt(prompt('Quantidade de produtos para entrada:'));
        if (isNaN(entrada) || entrada <= 0) {
          alert('Quantidade inválida');
        } else {
          estoque += entrada;
          mostrar(`Entrada realizada. Estoque atual: ${estoque}`);
        }
        break;
      }
      case '2': {
        let saida = parseInt(prompt('Quantidade de produtos para saída:'));
        if (isNaN(saida) || saida <= 0) {
          alert('Quantidade inválida');
        } else if (saida > estoque) {
          alert('Estoque insuficiente');
        } else {
          estoque -= saida;
          mostrar(`Saída realizada. Estoque atual: ${estoque}`);
        }
        break;
      }
      case '3':
        mostrar(`Estoque atual: ${estoque}`);
        break;
      case '4':
        sair = true;
        mostrar('Saindo do controle de estoque.');
        break;
      default:
        alert('Opção inválida');
    }
  }
}

// Questão 3 — Validação de senha com repetição
function questao3() {
  limparSaida();
  const senhaCorreta = 'senai123';
  let tentativas = 0;
  let acesso = false;
  while (tentativas < 3) {
    let senha = prompt('Digite a senha (tentativa ' + (tentativas + 1) + ' de 3):');
    if (senha === senhaCorreta) {
      mostrar('Bem-vindo!');
      acesso = true;
      break;
    } else {
      alert('Senha incorreta');
      tentativas++;
    }
  }
  if (!acesso) mostrar('Acesso bloqueado.');
}

// Questão 4 — Números primos em um intervalo
function questao4() {
  limparSaida();
  let inicio = parseInt(prompt('Informe o número inicial do intervalo:'));
  let fim = parseInt(prompt('Informe o número final do intervalo:'));
  if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
    alert('Intervalo inválido');
    return;
  }
  mostrar(`Números primos entre ${inicio} e ${fim}:`);
  for (let num = inicio; num <= fim; num++) {
    if (num < 2) continue;
    let primo = true;
    for (let div = 2; div <= Math.sqrt(num); div++) {
      if (num % div === 0) {
        primo = false;
        break;
      }
    }
    if (primo) mostrar(num);
  }
}

// Questão 5 — Simulador de fila de atendimento
function questao5() {
  limparSaida();
  let fila = [];
  let sair = false;
  while (!sair) {
    let opcao = prompt(
      'Fila de Atendimento:\n' +
      '1. Adicionar pessoa à fila\n' +
      '2. Atender próxima pessoa\n' +
      '3. Mostrar fila atual\n' +
      '4. Sair\n' +
      'Digite uma opção:'
    );
    switch (opcao) {
      case '1': {
        let nome = prompt('Nome da pessoa a adicionar:');
        if (nome.trim() === '') {
          alert('Nome inválido');
        } else {
          fila.push(nome);
          mostrar(`Pessoa "${nome}" adicionada à fila.`);
        }
        break;
      }
      case '2': {
        if (fila.length === 0) {
          alert('Fila vazia');
        } else {
          let atendido = fila.shift();
          mostrar(`Pessoa "${atendido}" atendida.`);
        }
        break;
      }
      case '3':
        if (fila.length === 0) {
          mostrar('Fila vazia');
        } else {
          mostrar('Fila atual: ' + fila.join(', '));
        }
        break;
      case '4':
        sair = true;
        mostrar('Encerrando fila de atendimento.');
        break;
      default:
        alert('Opção inválida');
    }
  }
}

// Questão 6 — Simulador de pesquisa de satisfação
function questao6() {
  limparSaida();
  let ruim = 0, regular = 0, otimo = 0;
  for (let i = 1; i <= 10; i++) {
    let nota = parseInt(prompt(`Nota do cliente ${i} (0 a 10):`));
    if (isNaN(nota) || nota < 0 || nota > 10) {
      alert('Nota inválida');
      i--;
      continue;
    }
    if (nota <= 4) ruim++;
    else if (nota <= 7) regular++;
    else otimo++;
  }
  mostrar(`Pesquisa de satisfação:`);
  mostrar(`Ruim (0–4): ${ruim}`);
  mostrar(`Regular (5–7): ${regular}`);
  mostrar(`Ótimo (8–10): ${otimo}`);
}

// Questão 7 — Cálculo de média com múltiplas tentativas
function questao7() {
  limparSaida();
  for (let i = 1; i <= 3; i++) {
    let n1 = parseFloat(prompt(`Aluno ${i} - Nota 1:`));
    let n2 = parseFloat(prompt(`Aluno ${i} - Nota 2:`));
    if (isNaN(n1) || isNaN(n2)) {
      alert('Nota inválida');
      i--;
      continue;
    }
    let media = (n1 + n2) / 2;
    mostrar(`Aluno ${i} - Média: ${media.toFixed(2)} - ${media >= 7 ? 'Aprovado' : 'Reprovado'}`);
  }
}

// Questão 8 — Média de alturas com laço for
function questao8() {
  limparSaida();
  let totalAltura = 0;
  let n = parseInt(prompt('Número de pessoas:'));
  if (isNaN(n) || n <= 0) {
    alert('Número inválido');
    return;
  }
  for (let i = 1; i <= n; i++) {
    let altura = parseFloat(prompt(`Altura da pessoa ${i} (em metros):`));
    if (isNaN(altura) || altura <= 0) {
      alert('Altura inválida');
      i--;
      continue;
    }
    totalAltura += altura;
  }
  let media = totalAltura / n;
  mostrar(`Altura média: ${media.toFixed(2)} m`);
}

// Questão 9 — Contagem regressiva
function questao9() {
  limparSaida();
  let n = parseInt(prompt('Digite um número inteiro positivo para contagem regressiva:'));
  if (isNaN(n) || n < 0) {
    alert('Número inválido');
    return;
  }
  mostrar(`Contagem regressiva de ${n} até 0:`);
  for (let i = n; i >= 0; i--) {
    mostrar(i);
  }
}

// Questão 10 — Tabuada do 5 usando for
function questao10() {
  limparSaida();
  mostrar('Tabuada do 5:');
  for (let i = 0; i <= 10; i++) {
    mostrar(`5 x ${i} = ${5 * i}`);
  }
}

// Event listeners para os botões
document.getElementById('questao1').addEventListener('click', questao1);
document.getElementById('questao2').addEventListener('click', questao2);
document.getElementById('questao3').addEventListener('click', questao3);
document.getElementById('questao4').addEventListener('click', questao4);
document.getElementById('questao5').addEventListener('click', questao5);
document.getElementById('questao6').addEventListener('click', questao6);
document.getElementById('questao7').addEventListener('click', questao7);
document.getElementById('questao8').addEventListener('click', questao8);
document.getElementById('questao9').addEventListener('click', questao9);
document.getElementById('questao10').addEventListener('click', questao10);
