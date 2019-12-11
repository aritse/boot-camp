const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function loadPage() {
  hours.forEach(hour => {
    var timeblockDiv = $("<div>").attr({ class: "timeblock-div", "data-time": hour });
    var hourSpan = $("<span>")
      .text(hour)
      .addClass("hour-span");
    var eventInput = $("<input>").attr("type", "text");
    eventInput.val(localStorage.getItem(hour));
    var save = $("<button>")
      .text("Save")
      .attr({ type: "button", id: "save-button" });
    timeblockDiv.append(hourSpan, eventInput, save);
    $(".container").append(timeblockDiv);
  });
}

function handleSave(event) {
  event.preventDefault();
  var saveButton = event.target;
  var eventInput = saveButton.previousSibling.value;
  var hourSpan = saveButton.previousSibling.previousSibling.innerText;
  localStorage.setItem(hourSpan, eventInput);
}

$(document).on("click", "#save-button", handleSave);

loadPage();

/*
  <div>
  <span>09:00</span>
  <input type="text">
  <button>Save</button>
</div>
*/
