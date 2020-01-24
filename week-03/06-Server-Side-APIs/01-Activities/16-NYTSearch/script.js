function submtBtnHandler(event) {
  event.preventDefault();
  let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  const api_key = "RW27VlJmKlJGUazGiUKrvhygb5icwzCZ";
  const query = $("#search-term").val();
  const numOfRecords = $("#number-of-records").val();
  const begin_date = $("#start-year").val() || "19800101";
  const end_date = $("#end-year").val() || "20200101";
  const params = $.param({ q: query, begin_date: begin_date, end_date: end_date, api_key: api_key });
  url += params;
  $.ajax(url).then(data => {
    const ul = $("<ul class='list-group'>");
    data.response.docs.forEach(artice => {
      const li = $("<li class='list-group-item'>");
      const headline = artice.headline;
      const byline = artice.byline;
      const sectionName = article.section_name;
      if (sectionName) li.append("<h5>Section: " + sectionName + "</h5>");
      const pub_date = artice.pub_date;
      if (pub_date) li.append("<h5>" + pub_date + "</h5>");
      const web_url = artice.web_url;
      if (web_url) li.append("<a href='" + web_url + "'>" + web_url + "</a>");
      $("<p>").text(artice.title);
      ul.append(li);
    });
    $(".card-body").append(ul);
  });
}
$("#submit-btn").on("click", submtBtnHandler);

$("#clear-btn").on("click", () => {
  $("#search-term").val("");
  $("#start-year").val("");
  $("#end-year").val("");
});
