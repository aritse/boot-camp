const music = {
  author: "John Adams",
  lyrics: "Matt Renea"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Template Literals</title>
</head>
<body>
  <p id="music">Author: ${music.author}<hr>Lyrics: ${music.lyrics}</p>

<script type="text/javascript" src="index.js"></script>
</body>
</html>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
