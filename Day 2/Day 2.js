function inicio() {
  var nome = document.querySelector("#nome").value;
  var idade = document.querySelector("#idade").value;
  var linguagem = document.querySelector("#linguagem").value;

  createModal(nome, idade, linguagem);
}

function createModal(nome, idade, linguagem) {
  var modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <p class="mensagem">Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}.</p>
    <p>Você gosta de estudar ${linguagem}?</p>
    <fieldset>
      <input type="radio" name="option" id="yes">
      <label for="yes" class="opts yes">Sim</label>
      <input type="radio" name="option" id="no">
      <label for="no" class="opts no">Não</label>
    </fieldset>
    `;

  document.querySelector(".texto2").appendChild(modal);
}

var enviar = document.querySelector("#enviar");
enviar.addEventListener("click", inicio);
