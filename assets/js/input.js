// const loadText = document.querySelector('.loadd');
const inputText = document.getElementById("kola");

const backgroundPic = document.getElementById("truemsg");
const empty = document.getElementById("falsemsg");

const btn = document.getElementById("click");

btn.addEventListener("click", all);

function all(e) {
  e.preventDefault();

  if (inputText.value === "") {
    empty.style.display = "block";
    backgroundPic.style.display = "none";
  } else {
    empty.style.display = "none";
    backgroundPic.style.display = "block";
  }
}
