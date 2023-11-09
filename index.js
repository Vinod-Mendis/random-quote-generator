const btnEl = document.getElementById("btn");
const API_URL = "http://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");



async function getQuote(){

  try {

    quoteEl.innerText = "fetching...";
    authorEl.innerText = "fetching..."
    btnEl.innerText = "LOADING...";
    btnEl.disabled = true;

    const response = await fetch(API_URL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;

    quoteEl.innerText = quoteContent;
    authorEl.innerText = "- " + quoteAuthor + " -";
    btnEl.innerText = "GENERATE";
    btnEl.disabled = false;
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An Error Occured"
    authorEl.innerText = "Try Again !"
    btnEl.disabled = false;
    btnEl.innerText = "GENERATE";
  }  
} 

getQuote();

btnEl.addEventListener("click", getQuote)