function inicio() {
  var nome = document.querySelector("#nome").value;
  var idade = document.querySelector("#idade").value;
  var linguagem = document.querySelector("#linguagem").value;

  createMsg(nome, idade, linguagem);
}

function createMsg(nome, idade, linguagem) {
  var p1 = document.createElement("p");
  p1.id = "text1";
  var p2 = document.createElement("p");
  p2.id = "text2";

  p1.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}.`;
  p2.innerHTML = `Você gosta de estudar ${linguagem}?`;

  document.querySelector(".msg1").appendChild(p1);
  document.querySelector(".msg2").appendChild(p2);
}

var enviar = document.querySelector("#enviar");
enviar.addEventListener("click", inicio);

const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#enviar");
const closeModalBtn = document.querySelector(".btn-close");

const closeModal = function () {
  clearRadioGroup();
  modal.classList.add("hidden");
  document.getElementById("text1").remove();
  document.getElementById("text2").remove();
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("linguagem").value = "";
};

function clearRadioGroup() {
  var ele = document.getElementsByName("option");
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }
}

closeModalBtn.addEventListener("click", closeModal);

const openModal = function () {
  modal.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);
