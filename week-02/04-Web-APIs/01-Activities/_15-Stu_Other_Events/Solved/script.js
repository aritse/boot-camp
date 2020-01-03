var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

eventType.addEventListener("change", toggleDisplay);

function toggleDisplay(event) {
  var value = event.target.value;

  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
    document.body.addEventListener("keydown", function(event) {
      document.getElementById("key").textContent = event.key;
      document.getElementById("code").textContent = event.code;
      document.getElementById("status").textContent = "keydown";
    });
    document.addEventListener("keyup", function(event) {
      document.getElementById("key").textContent = event.key;
      document.getElementById("code").textContent = event.code;
      document.getElementById("status").textContent = "keyup";
    });
  } else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
    document.addEventListener("click", function(event) {
      console.log(event);
      document.getElementById("target").textContent = event.target.textContent;
      document.getElementById("x").textContent = event.x;
      document.getElementById("y").textContent = event.y;
    });
  }
}
