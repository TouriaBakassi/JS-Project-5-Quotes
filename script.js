//                                       Quotes

let Text = document.querySelector(".quote-text");
let Author = document.querySelector(".quote-author");
let button = document.querySelector("button");

let URL = "https://type.fit/api/quotes";
let quotes = [];

async function Getquotes(URL) {
  let qte = await fetch(URL);
  console.log(qte);
  quotes = await qte.json();
  console.log(quotes);
  Randomquote();
}
Getquotes(URL);

function Randomquote() {
  let randomquote = Math.floor(Math.random() * quotes.length);
  let QUOTE = quotes[randomquote].text;
  let AUTHOR = quotes[randomquote].author;

  Text.textContent = QUOTE;
  Author.textContent = quotes[randomquote].author == null ? "Inconnu" : AUTHOR;
}
button.addEventListener("click", () => {
  Randomquote();
});
