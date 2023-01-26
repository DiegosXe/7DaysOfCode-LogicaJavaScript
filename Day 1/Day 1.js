let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

document.write("numeroUm = 1 <br>");
document.write("stringUm = '1' <br>");

if (numeroUm == stringUm) {
  document.write(
    "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes. <br>"
  );
} else {
  document.write(
    "As variáveis numeroUm e stringUm não tem o mesmo valor, <br>"
  );
}

document.write("<br><br>");

document.write("numeroTrinta = 30 <br>");
document.write("stringTrinta = '30' <br>");

if (numeroTrinta === stringTrinta) {
  document.write(
    "As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo. <br>"
  );
} else {
  document.write(
    "As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo. <br>"
  );
}

document.write("<br><br>");

document.write("numeroDez = 10 <br>");
document.write("stringDez = '10' <br>");

if (numeroDez == stringDez) {
  document.write(
    "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes. <br>"
  );
} else {
  document.write(
    "As variáveis numeroDez e stringDez não tem o mesmo valor. <br>"
  );
}
