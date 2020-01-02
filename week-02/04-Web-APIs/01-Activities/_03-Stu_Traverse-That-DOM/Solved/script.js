let articles = document.getElementById("articles");
articles.children[0].style.fontSize = "50px";
articles.children[0].lastElementChild.style.color = "blue";
articles.previousElementSibling.style.backgroundColor = "black";

let main = document.getElementById("main");
main.children[1].style.textDecoration = "underline";
main.lastElementChild.style.fontSize = "50px";
main.firstElementChild.style.color = "orange";
main.lastElementChild.parentElement.style.fontSize = "40px";
