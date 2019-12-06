var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");
var thisUser;

var people = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    thisUser = people[event.target.parentElement.id];
    modalEl.style.display = "block";
    modalNameEl.textContent = thisUser.name;
    descriptionEl.value = thisUser.description || "";
    modalEl.style.display = "block";
  }
}

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener("click", handleClick);

saveBtn.addEventListener("click", function(event) {
  var description = descriptionEl.value;
  thisUser.description = description;
  descriptionEl.value = "";
  close();
});
