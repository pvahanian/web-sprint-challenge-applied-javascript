// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'

const cardsContainer=document.querySelector(".cards-container")

axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(stuff=>{
    stuff.data.articles.javascript.forEach(element => {
        cardsContainer.appendChild(createArticle(element));
         })
   
    stuff.data.articles.bootstrap.forEach(element => {
        cardsContainer.appendChild(createArticle(element));
    })
    stuff.data.articles.technology.forEach(element => {
        cardsContainer.appendChild(createArticle(element));
    })
    stuff.data.articles.jquery.forEach(element => {
        cardsContainer.appendChild(createArticle(element));
    })
    stuff.data.articles.node.forEach(element => {
        cardsContainer.appendChild(createArticle(element));
    })
})
    .catch(err=> {
})

 function createArticle(articleObject) {
    
    let {headline,authorPhoto, authorName} = articleObject

    //Declare variables and gave them element values

    const card = document.createElement('div');
    card.classList.add('card')
    card.addEventListener('click', event => {
        console.log(headline);
    })

    const headLine = document.createElement('div');
    headLine.classList.add('headline')
    
    const authorHolder = document.createElement('div');
    authorHolder.classList.add('author')
    
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const authorPic = document.createElement('img')
    authorPic.classList.add('img')
    authorPic.src = authorPhoto

    const author = document.createElement('span')
    author.textContent =`By ${authorName}`

    card.append(headline)
    card.append(authorHolder)
    authorHolder.append(imgContainer)
    imgContainer.append(authorPic)
    imgContainer.append(author)

    return card;

}
