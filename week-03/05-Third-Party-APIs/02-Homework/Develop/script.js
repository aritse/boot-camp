const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const container = $(".container");

function loadPage() {
  console.log("loading page...");
  hours.forEach(hourBlock => {
    var hourBlock = $("<div>");
    var hour;
    container.append(hourBlock);
  });
}

loadPage();
