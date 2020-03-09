const music = {
  title: "The Less I Know The Better",
  author: "Tame Impala",
  album: "Currents"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `
<div class="song">
<h2>${music.title}</h2>
<p class="author">${music.author}</p>
<p class="album">${music.album}</p>
</div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
