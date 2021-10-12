const quoteElement = document.getElementById("quote")
const authorElement = document.getElementById("author")

const _getRandomQuote = (quotes) => {
   let randomIndex = Math.floor(Math.random() * quotes.length);
   return quotes[randomIndex]
}

fetch('../data/newquotesdata.json')
  .then(response => response.json())
  .then(quotes => {
     const quote = _getRandomQuote(quotes)
     let msg = new SpeechSynthesisUtterance();
     msg.text = `${quote.title} - ${quote.author}`
     window.speechSynthesis.speak(msg);
     quoteElement.innerHTML = quote.title
     authorElement.innerHTML = `- ${quote.author}`
  })
  .catch(error => console.log(error));