import * as ex1 from './exercicios/ex1.js';
import * as ex2 from './exercicios/ex2.js';
import * as ex3 from './exercicios/ex3.js';
import * as ex4 from './exercicios/ex4.js';
import * as ex5 from './exercicios/ex5.js';
import * as ex6 from './exercicios/ex6.js';
import * as ex7 from './exercicios/ex7.js';
import * as ex8 from './exercicios/ex8.js';
import * as ex9 from './exercicios/ex9.js';
import * as ex10 from './exercicios/ex10.js';
import * as ex11 from './exercicios/ex11.js';
import * as ex12 from './exercicios/ex12.js';
import * as ex13 from './exercicios/ex13.js';
import * as ex14 from './exercicios/ex14.js';
import * as ex15 from './exercicios/ex15.js';

const botao = document.getElementById('btn-executar');
const input = document.getElementById('num-exercicio');
const output = document.getElementById('resultado');

botao.onclick = () => {
  let num = parseInt(input.value);
  if (num < 1 || num > 15 || isNaN(num)) {
    output.textContent = 'Digite um número entre 1 e 15';
    return;
  }

  let resultado;
  switch (num) {
    case 1: resultado = ex1.ex1(); break;
    case 2: resultado = ex2.ex2(); break;
    case 3: resultado = ex3.ex3(); break;
    case 4: resultado = ex4.ex4(); break;
    case 5: resultado = ex5.ex5(); break;
    case 6: resultado = ex6.ex6(); break;
    case 7: resultado = ex7.ex7(); break;
    case 8: resultado = ex8.ex8(); break;
    case 9: resultado = ex9.ex9(); break;
    case 10: resultado = ex10.ex10(); break;
    case 11: resultado = ex11.ex11(); break;
    case 12: resultado = ex12.ex12(); break;
    case 13: resultado = ex13.ex13(); break;
    case 14: resultado = ex14.ex14(); break;
    case 15: resultado = ex15.ex15(); break;
  }

  if (Array.isArray(resultado)) {
    output.textContent = resultado.join('\n');
  } else {
    output.textContent = resultado;
  }
};
