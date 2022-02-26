const respostaDuvida1 = document.querySelector(".respostaDuvida1");
const respostaDuvida2 = document.querySelector(".respostaDuvida2");
const respostaDuvida3 = document.querySelector(".respostaDuvida3");

// const btnDuvida2 = document.querySelector(".duvida2");

// const btnDuvida1 = document.querySelector(".duvida1");

let contadorDuvida1 = 0;
function openDuvida1() {
  contadorDuvida1 += 1;
  if (contadorDuvida1 % 2 === 1) {
    respostaDuvida1.classList.remove("hidden");
  } else {
    respostaDuvida1.classList.add("hidden");
  }
}
let contadorDuvida2 = 0;
function openDuvida2() {
  contadorDuvida2 += 1;
  if (contadorDuvida2 % 2 === 1) {
    respostaDuvida2.classList.remove("hidden");
  } else {
    respostaDuvida2.classList.add("hidden");
  }
}

let contadorDuvida3 = 0;
function openDuvida3() {
  contadorDuvida3 += 1;
  if (contadorDuvida3 % 3 === 1) {
    respostaDuvida3.classList.remove("hidden");
  } else {
    respostaDuvida3.classList.add("hidden");
  }
}
