// Espera o DOM carregar
window.onload = () => {
  const select = document.getElementById("exercicioSelect");
  const inputsDiv = document.getElementById("inputs");
  const btn = document.getElementById("btnCalcular");
  const resultadoDiv = document.getElementById("resultado");

  // Mapeamento dos inputs de cada exercício
  const exercicios = {
    1: ["Raio do círculo"],
    2: ["Valor por hora", "Horas trabalhadas"],
    3: ["Valor base", "Percentual"],
    4: ["Nota 1", "Peso 1", "Nota 2", "Peso 2", "Nota 3", "Peso 3"],
    5: ["Altura da lata", "Raio da base"],
    6: ["Valor A", "Valor B"],
    7: ["Cateto A", "Cateto B"],
    8: ["Base do retângulo", "Altura do retângulo"],
    9: ["Primeiro termo (a1)", "Razão (r)"],
    10: ["Primeiro termo (a1)", "Razão (q)"]
  };

  // Mostra os inputs necessários
  select.onchange = () => {
    inputsDiv.innerHTML = "";
    resultadoDiv.innerHTML = "";
    const selecionado = select.value;
    if (exercicios[selecionado]) {
      exercicios[selecionado].forEach((label, i) => {
        const input = document.createElement("input");
        input.type = "number";
        input.id = `input${i}`;
        input.placeholder = label;
        inputsDiv.appendChild(input);
      });
    }
  };

  // Calcula o resultado
  btn.onclick = () => {
    const tipo = select.value;
    const valores = Array.from(inputsDiv.querySelectorAll("input")).map(input => parseFloat(input.value));
    let resultado;

    switch (tipo) {
      case "1":
        resultado = Math.PI * Math.pow(valores[0], 2);
        break;
      case "2":
        resultado = valores[0] * valores[1];
        break;
      case "3":
        resultado = (valores[0] * valores[1]) / 100;
        break;
      case "4":
        const somaPesos = valores[1] + valores[3] + valores[5];
        resultado = (valores[0]*valores[1] + valores[2]*valores[3] + valores[4]*valores[5]) / somaPesos;
        break;
      case "5":
        resultado = Math.PI * Math.pow(valores[1], 2) * valores[0];
        break;
      case "6":
        resultado = `Antes: A=${valores[0]}, B=${valores[1]} | Depois: A=${valores[1]}, B=${valores[0]}`;
        break;
      case "7":
        resultado = Math.sqrt(Math.pow(valores[0], 2) + Math.pow(valores[1], 2));
        break;
      case "8":
        const area = valores[0] * valores[1];
        const perimetro = 2 * (valores[0] + valores[1]);
        resultado = `Área: ${area} | Perímetro: ${perimetro}`;
        break;
      case "9":
        resultado = valores[0] + 9 * valores[1];
        break;
      case "10":
        resultado = valores[0] * Math.pow(valores[1], 4);
        break;
      default:
        resultado = "Selecione um exercício válido.";
    }

    resultadoDiv.innerHTML = `Resultado: ${resultado}`;
  };
};
