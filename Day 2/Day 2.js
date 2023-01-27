const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

document.write(
  "Olá " +
    nome +
    ", você tem " +
    idade +
    " anos e já está aprendendo " +
    linguagem +
    "! <br><br>"
);

const gostar = prompt(
  "Você gosta de estudar" +
    linguagem +
    "? Responda com o número 1 para SIM ou 2 para NÃO."
);

if (gostar == 1) {
  document.write("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (gostar == 2) {
  document.write("Ahh que pena... Já tentou aprender outras linguagens?");
}
