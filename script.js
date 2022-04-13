"use strict";

//Select elements
const navItems = document.querySelectorAll(".nav-item");
const btnCollapseSummary = document.querySelector(".btn-collapse");
const summaryContent = document.querySelector(".article-summary");
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const btnLike1 = document.getElementById("btn-like-1");
const btnLike2 = document.getElementById("btn-like-2");
const likes1 = document.getElementById("likes-1");
const likes2 = document.getElementById("likes-2");
const btnCollapseAnswers = document.querySelectorAll(".collapse-answers");
const topicAnswers = document.querySelector(".answers");
const createTopicsContainer = document.querySelector(".create-topics");
const textEditorContainer = document.querySelector(".text-editor");
const submitThanksContainer = document.querySelector(".submit-thanks");
const inputSubject = document.getElementById("input-subject");
const inputContent = document.getElementById("input-content");
const topicsContainer = document.querySelector(".posted-topics");

//Toggle menu active item
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    for (const element of navItems) element.classList.remove("nav-item-active");
    item.classList.add("nav-item-active");
  });
});

//Collapse summary
const collapseSummary = function () {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnCollapseSummary.innerHTML = "ver mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnCollapseSummary.innerHTML = "ver menos";
    moreText.style.display = "inline";
  }
};

//Make like buttons work
const likeBtns = [btnLike1, btnLike2];
const likeElmnts = [likes1, likes2];
let likeCount;

likeBtns.forEach((btn, i, arr) =>
  btn.addEventListener("click", function () {
    likeCount = parseInt(likeElmnts[i].innerHTML);
    likeCount++;
    likeElmnts[i].innerHTML = `${likeCount} likes`;
  })
);

//Create new topics
const createTopic = function () {
  createTopicsContainer.classList.toggle("hidden");
  textEditorContainer.classList.toggle("hidden");
};

const createAnotherTopic = function () {
  textEditorContainer.classList.toggle("hidden");
  submitThanksContainer.classList.toggle("hidden");
};

//Style input typed text
const makeTextBold = function () {
  inputContent.style.fontWeight === "bold"
    ? (inputContent.style.fontWeight = "normal")
    : (inputContent.style.fontWeight = "bold");
};

const makeTextItalic = function () {
  inputContent.style.fontStyle === "italic"
    ? (inputContent.style.fontStyle = "normal")
    : (inputContent.style.fontStyle = "italic");
};

//Submit topic
let topicSubject;
let topicContent;

const submitTopic = function () {
  topicSubject = inputSubject.value;
  topicContent = inputContent.value;

  if (topicSubject && topicContent) {
    const newTopicElement = `<div class="topic-card">
  <div class="moderated">
    <div class="mod-container">
      <svg
        class="icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6603 7.33594C20.8426 7.51823 20.9337 7.73958 20.9337 8C20.9337 8.26042 20.8426 8.48177 20.6603 8.66406L9.09778 20.2266C8.91549 20.4089 8.69413 20.5 8.43372 20.5C8.1733 20.5 7.95194 20.4089 7.76965 20.2266L1.20715 13.6641C1.02486 13.4818 0.933716 13.2604 0.933716 13C0.933716 12.7396 1.02486 12.5182 1.20715 12.3359L2.76965 10.7734C2.95194 10.5911 3.1733 10.5 3.43372 10.5C3.69413 10.5 3.91549 10.5911 4.09778 10.7734L8.43372 15.1484L17.8087 5.77344C17.965 5.59115 18.1733 5.5 18.4337 5.5C18.6941 5.5 18.9155 5.59115 19.0978 5.77344L20.6603 7.33594ZM8.00403 11.4766L3.62903 7.10156C3.31653 6.78906 3.31653 6.48958 3.62903 6.20312L5.38684 4.44531C5.51705 4.3151 5.66028 4.25 5.81653 4.25C5.99882 4.25 6.15507 4.3151 6.28528 4.44531L8.43372 6.59375L14.3712 0.695312C14.4754 0.565104 14.6056 0.5 14.7618 0.5C14.9441 0.5 15.1004 0.565104 15.2306 0.695312L16.9884 2.45312C17.3009 2.73958 17.3009 3.03906 16.9884 3.35156L8.8634 11.4766C8.75924 11.6068 8.61601 11.6719 8.43372 11.6719C8.25142 11.6719 8.10819 11.6068 8.00403 11.4766Z"
          fill="#ED7839"
        />
      </svg>

      <p class="message">Aguardando feedback dos autores</p>
      <a href="#">Editar tópico</a>
    </div>
  </div>

  <div class="topic-container">
    <div class="topic-header">
      <p class="topic-title">${topicSubject}</p>
      <p class="topic-author">Nome do usuário</p>
    </div>
    <p class="topic-content">${topicContent}</p>
  </div>
</div>`;

    topicsContainer.insertAdjacentHTML("afterbegin", newTopicElement);

    inputSubject.value = "";
    inputContent.value = "";
    submitThanksContainer.classList.toggle("hidden");
    textEditorContainer.classList.toggle("hidden");
  } else {
    alert("Preencha os dois campos pra que seu tópico possa ser enviado! ;)");
  }
};

//Collapse topic answers
btnCollapseAnswers.forEach((item) =>
  item.addEventListener("click", function () {
    if (topicAnswers.style.display === "block") {
      topicAnswers.style.display = "none";
    } else {
      topicAnswers.style.display = "block";
    }
  })
);
