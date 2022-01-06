// const agendeAula = document.querySelectorAll('.agendarAula');
const btn = document.querySelector('.agendarAula');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const btnDuvida1 = document.querySelector('.duvida1');
const respostaDuvida1 = document.querySelector('.respostaDuvida1');
const btnDuvida2 = document.querySelector('.duvida2');
const respostaDuvida2 = document.querySelector('.respostaDuvida2');

const openModal = function () {
  modal.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
};
btn.addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);
let contadorDuvida1 = 0;
const openDuvida1 = function () {
  contadorDuvida1 += 1;
  if (contadorDuvida1 % 2 === 1) {
    respostaDuvida1.classList.remove('hidden');
    console.log('funcinou');
  } else {
    respostaDuvida1.classList.add('hidden');
  }
};

btnDuvida1.addEventListener('click', openDuvida1);
let contadorDuvida2 = 0;
const openDuvida2 = function () {
  contadorDuvida2 += 1;
  if (contadorDuvida2 % 2 === 1) {
    respostaDuvida2.classList.remove('hidden');
  } else {
    respostaDuvida2.classList.add('hidden');
  }
};

btnDuvida2.addEventListener('click', openDuvida2);
