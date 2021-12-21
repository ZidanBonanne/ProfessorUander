const agendeAula = document.querySelectorAll('.agendarAula');
const btn = document.querySelector('.agendarAula');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
};
btn.addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);
