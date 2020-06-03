
const quotesList = () => {

   for (const currentQuotesObject of quotesCollection) {

    const quotesHTML = quoteConverter(currentQuotesObject)

    const quotesArticleElement = document.querySelector(".quoteList")

    quotesArticleElement.innerHTML += quotesHTML
       
   }
}