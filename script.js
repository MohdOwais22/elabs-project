const result = fetch(
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=4049525922de49b1a80df6daf4ce8bee"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if(data.articles.length > 10) {
        data.articles.length = 10;
        displayNews(data);
    }
  });

// create a function to create a card for each article and append it to the DOM to display the news
function createCard(article) {
  // create a div element to hold the card
  var card = document.createElement("div");
  card.classList.add("card");
  // create a div element to hold the card image
  var cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  // create an image element to hold the image
  var image = document.createElement("img");
  image.src = article.urlToImage;
  // create a div element to hold the card content
  var cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  // create a span element to hold the title
  var title = document.createElement("span");
  title.classList.add("card-title");
  title.textContent = article.title;
  // create a p element to hold the description
  var description = document.createElement("p");
  description.textContent = article.description;
  // create a div element to hold the card action
  var cardAction = document.createElement("div");
  cardAction.classList.add("card-action");
  // create an anchor element to hold the link to the article
  var link = document.createElement("a");
  link.textContent = "Read More";
  link.href = article.url;
  // append the elements to the DOM
  cardAction.appendChild(link);
  cardContent.appendChild(title);
  cardContent.appendChild(description);
  cardImage.appendChild(image);
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  card.appendChild(cardAction);
  document.querySelector("#news").appendChild(card);
}

// create a function to display the news
function displayNews(data) {
  // loop through the articles and create a card for each article
  for (var i = 0; i < data.articles.length; i++) {
    createCard(data.articles[i]);
  }
}
// create a function to clear the news
function clearNews() {
  // select the news div and set its innerHTML to an empty string
  document.querySelector("#news").innerHTML = "";
}

