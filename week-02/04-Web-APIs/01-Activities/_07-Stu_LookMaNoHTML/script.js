// Create your HTML Page via DOM Methods here!
const h1 = document.createElement("h1");
h1.textContent = "About Me";
h1.setAttribute("style", "text-align:center");

const h2 = document.createElement("h2");
h2.textContent = "My Favorite Foods";
h2.setAttribute("style", "text-align:center");

const img = document.createElement("img");
img.setAttribute("src", "wolf.png");
img.setAttribute("alt", "wolf");
const caption = document.createElement("figcaption");
caption.textContent = "Meat Lover";

const figure = document.createElement("figure");
figure.setAttribute("style", "text-align: center");

figure.appendChild(img);
figure.appendChild(caption);

const foods = ["sheep", "cow", "goat"];

const ul = document.createElement("ul");
foods.forEach(food => {
  const li = document.createElement("li");
  li.textContent = food.toUpperCase();
  li.setAttribute("style", "color:red;font-weight:bold");
  ul.appendChild(li);
});

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(figure);
document.body.appendChild(ul);
