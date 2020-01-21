const movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

function displayMovieInfo() {
  const movie = $(this).attr("data-name");
  const url = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  $.ajax(url).then(res => {
    const title = $("<h2>").text(res.Title);
    const poster = $("<img>").attr({ src: res.Poster, alt: movie });
    const rating = $("<p>").text(res.Rated);
    const released = $("<p>").text(res.Released);
    const plot = $("<p>").text(res.Plot);
    const movieDiv = $("<div>").append(title, poster, rating, released, plot);
    $("#movies-view").prepend(movieDiv);
  });
}

function renderButtons() {
  $("#buttons-view").empty();
  movies.forEach(movie => {
    const a = $("<button>");
    a.addClass("movie");
    a.attr("data-name", movie);
    a.text(movie);
    $("#buttons-view").append(a);
  });
}

$("#add-movie").on("click", e => {
  e.preventDefault();
  const movie = $("#movie-input").val();
  movies.push(movie);
  renderButtons();
});

$(document).on("click", ".movie", displayMovieInfo);

renderButtons();
