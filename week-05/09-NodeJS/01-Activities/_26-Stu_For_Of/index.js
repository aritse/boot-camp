const songs = document.querySelectorAll("#songs>li");

for (const song of songs) {
  song.setAttribute("style", "color:red");
}
