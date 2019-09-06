// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // console.log(response);
    let articlesObj = response.data.articles;
    // console.log(articlesObj);
    for (let articlesArray in articlesObj) {
      const articles = [...articlesObj[articlesArray]];
      // console.log(articles);
      articles.forEach(article => {
        articleCreator(article);
      })
    }
  })
  .catch(error => {
    console.log('Error in getting articles ', error);
  }) 

function articleCreator(articleObj) {
  const cardsContainer = document.querySelector('.cards-container');

  const card = document.createElement('div');
  card.classList.add('card');
  cardsContainer.appendChild(card);

  const cardHeadine = document.createElement('div');
  cardHeadine.classList.add('headline');
  cardHeadine.textContent = articleObj.headline;
  card.appendChild(cardHeadine);

  const cardAuthor = document.createElement('div');
  cardAuthor.classList.add('author');
  card.appendChild(cardAuthor);

  const cardAuthorImgDiv = document.createElement('div');
  cardAuthorImgDiv.classList.add('img-container');
  cardAuthor.appendChild(cardAuthorImgDiv);

  const cardAuthorImg = document.createElement('img');
  cardAuthorImg.src = articleObj.authorPhoto;
  cardAuthorImgDiv.appendChild(cardAuthorImg);

  const cardAuthorName = document.createElement('span');
  cardAuthorName.textContent = `By ${articleObj.authorName}`;
  cardAuthor.appendChild(cardAuthorName);

}
