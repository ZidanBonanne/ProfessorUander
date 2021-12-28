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

const openDuvida1 = function () {
  respostaDuvida1.classList.remove('hidden');
  console.log('funcinou');
};

btnDuvida1.addEventListener('click', openDuvida1);
const openDuvida2 = function () {
  respostaDuvida2.classList.remove('hidden');
  console.log('funcinou');
};

btnDuvida2.addEventListener('click', openDuvida2);
