const imageTags = document.querySelectorAll("img");
const aTags = document.querySelectorAll("a");
const sites = ["https://instagram.com", "https://google.com", "https://reddit.com"];
const images = ["instagram.png", "google.png", "reddit.png"];

for (let i = 0; i < 3; i++) {
  imageTags[i].setAttribute("src", "images\\" + images[i]);
  imageTags[i].setAttribute("alt", sites[i]);
  aTags[i].setAttribute("href", sites[i]);
}
