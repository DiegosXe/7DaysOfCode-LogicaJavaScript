var questao = document.querySelector(".questao");
var opcoes = document.querySelector(".opcoes");
var botoes = document.querySelector(".botoes");
var area;
var foco;
var opts;
var i;

var techs = [];

function frontend() {
  area = "Front-End";
  questao.innerHTML = `<p>Qual tecnologia você deseja aprender?</p>`;
  opcoes.innerHTML = `
                          <input type="radio" name="tec" id="React">
                          <label for="React">React</label>
                          <input type="radio" name="tec" id="Vue">
                          <label for="Vue">Vue</label>
                      `;
}

function backend() {
  area = "Back-End";
  questao.innerHTML = `<p>Qual tecnologia você deseja aprender?</p>`;
  opcoes.innerHTML = `
                          <input type="radio" name="tec" id="C#">
                          <label for="C#">C#</label>
                          <input type="radio" name="tec" id="Java">
                          <label for="Java">Java</label>
                      `;
}

function nextSteps() {
  foco = opts[i].id;
  questao.innerHTML = `<p>Você quer se especializar na área escolhida ou se desenvolver para se tornar fullstack?</p>`;
  opcoes.innerHTML = `
                          <input type="radio" name="tec" id="Especialista">
                          <label for="Especialista">Especialista</label>
                          <input type="radio" name="tec" id="Fullstack">
                          <label for="Fullstack">Fullstack</label>
                      `;
}

function skills(opt) {
  if (opt == "Especialista") {
    questao.innerHTML = `
                          <p id="msg">Continue se especializando em ${foco} para dominar a área de ${area}!</p
                          <p>Tem mais alguma tecnologia que você gostaria de aprender?</p>
    `;
  } else if (opt == "Fullstack") {
    questao.innerHTML = `
                          <p id="msg">Chegou a hora de começar a aprender outras linguagens além de ${foco} se você 
                          quer se tornar Fullstack!</p>
                          <p>Tem mais alguma tecnologia que você gostaria de aprender?</p>
    `;
  } else {
    questao.innerHTML = `<p>Tem mais alguma tecnologia que você gostaria de aprender?</p>`;
  }

  opcoes.innerHTML = `
                          <input type="text" name="skill" id="skill">
                      `;
  botoes.innerHTML = `
                          <input type="button" value="Mais" class="button more" onclick="more()">
                          <input type="button" value="Cancelar" class="button cancel" onclick="cancel()">
  `;
}

function cancel() {
  questao.innerHTML = `<p>Novas tecnologias para aprender:</p>`;
  opcoes.className = "final";
  opcoes.innerHTML = techs.map((t) => ` ${t}`);
  botoes.innerHTML = "";
}

function more(opt) {
  var tech = document.querySelector("#skill").value;
  techs.push(tech);

  skills(opt);
}

document.querySelector(".enviar").addEventListener("click", () => {
  opts = document.getElementsByName("tec");

  for (i = 0; i < opts.length; i++) {
    if (opts[i].checked) {
      if (opts[i].id == "Front-End") {
        frontend();
      } else if (opts[i].id == "Back-End") {
        backend();
      } else if (opts[i].id == "Especialista" || opts[i].id == "Fullstack") {
        skills(opts[i].id);
      } else {
        nextSteps();
      }
    }
  }
});
