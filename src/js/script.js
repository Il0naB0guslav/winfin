var questions = document.querySelectorAll(".answer__button");
var answers = document.querySelectorAll(".answer-description");

var burger = document.querySelector(".header__button");
var navbar = document.querySelector(".header__menu");
var modal = document.querySelector(".modal");
var openBtn = document.querySelector(".answer__question-link");
var closeBtn = document.querySelector(".modal__close-button");
var i;

burger.addEventListener("click", openCloseNavbar);
openBtn.addEventListener("click", openCloseModal);
closeBtn.addEventListener("click", openCloseModal);

function openCloseNavbar(evt) {
  evt.preventDefault();
  burger.classList.toggle("header__button--active");
  navbar.classList.toggle("header__menu--none");
}

function openCloseModal(evt) {
  evt.preventDefault();
  modal.classList.toggle("hide-element");
}

navbar.classList.toggle("header__menu--none");
burger.classList.toggle("header__button--none");

for (i = 0; i < questions.length; i++) {
  answers[i].classList.add("hidden");
  questions[i].classList.add("plus-answer");
  console.log(i);

  questions[i].addEventListener("click", function (e) {
    this.nextSibling.nextSibling.classList.toggle("hidden");
    this.classList.toggle("plus-answer");
  });
}
