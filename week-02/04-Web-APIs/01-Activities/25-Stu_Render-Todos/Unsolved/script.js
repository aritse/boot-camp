var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var count = 0;

todoInput.addEventListener("change", function() {
  event.preventDefault();
  var todoItem = document.createElement("li");
  var completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  todoItem.textContent = event.target.value;
  todoList.appendChild(todoItem);
  count++;
  todoItem.appendChild(complesteButton);
  event.target.value = "";
  todoCountSpan.textContent = count;
});

todoForm.addEventListener("submit", function() {
  event.preventDefault();
});
