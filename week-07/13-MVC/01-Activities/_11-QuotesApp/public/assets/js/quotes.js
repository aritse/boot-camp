// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {
  $(".delquote").on("click", function() {
    const id = $(this).data("id");
    $.ajax("/api/quotes/" + id, { method: "DELETE" }).then(() => {
      console.log("deleted id ", id);
      location.reload();
    });
  });

  $(".create-form").on("submit", e => {
    e.preventDefault();
    const newQuote = {
      author: $("#auth").val(),
      quote: $("#quo").val()
    };

    $.ajax("/api/quotes", { method: "POST", data: newQuote }).then(() => {
      console.log("created a quote");
      location.reload();
    });
  });

  $(".update-form").on("submit", function(e) {
    e.preventDefault();
    const updatedQuote = {
      author: $("#auth").val(),
      quote: $("#quo").val()
    };

    const id = $(this).data("id");

    $.ajax("/api/quotes/" + id, { method: "PUT", data: updatedQuote }).then(() => {
      console.log("updated a quote");
      location.assign("/");
    });
  });
});
