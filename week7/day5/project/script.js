const quotes = [
    {
      id: 0,
      author: "Albert Einstein",
      quote: '"Imagination is more important than knowledge."',
      likes:0
    },
    {
      id: 1,
      author: "Mahatma Gandhi",
      quote: '"Be the change that you wish to see in the world."',
      likes:0
    },
    {
      id: 2,
      author: "Maya Angelou",
      quote: "\"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.\"",
      likes:0
    },
    {
      id: 3,
      author: "Steve Jobs",
      quote: '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."',
      likes:0
    }
  ];
//1 ===================================================  
  let previousQuoteIndex = -1;
  
  const quoteSection = document.getElementById('quote-section');
  const generateButton = document.getElementById('generate-button');
  const addQuoteForm = document.getElementById('add-quote-form'); 
  
  generateButton.addEventListener('click', generateRandomQuote);
  addQuoteForm.addEventListener('submit', addNewQuote); 
  
  function generateRandomQuote() {
    let randomQuoteIndex;
    
    do {
      randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    } while (randomQuoteIndex === previousQuoteIndex);
  
    previousQuoteIndex = randomQuoteIndex;
  
    const quote = quotes[randomQuoteIndex];
    displayQuote(quote);
   

  }
  
  function displayQuote(quote) {
     // inserted latter
     const quoteHtml = `<p><strong>${quote.author}:</strong> ${quote.quote}</p>`;
     const likesHtml = `<span class="likes-count">Likes: <span id="likes-${quote.id}">${quote.likes}</span></span>`;
     
     
     quoteSection.innerHTML = quoteHtml + likesHtml;
  }
//  2 ===========================================================
  function addNewQuote(event) {
    event.preventDefault();
    
    const quoteInput = document.getElementById('quote-input');
    const authorInput = document.getElementById('author-input');
  
    const newQuote = {
      id: quotes.length + 1,
      author: authorInput.value,
      quote: quoteInput.value,
      likes:0
    };
  
    quotes.push(newQuote);
    quoteInput.value = '';
    authorInput.value = '';
  
    console.log(quotes); // Make sure the log is inside the function
  }
  
//   2/2===============================================================

// for (const quote of quotes) {
//     quote.likes = 0;
//   }
  
  const charCountButton = document.getElementById('char-count-button');
  const charCountNoSpaceButton = document.getElementById('char-count-no-space-button');
  const wordCountButton = document.getElementById('word-count-button');
  const likeButton = document.getElementById('like-button');
  
  charCountButton.addEventListener('click', displayCharCount);
  charCountNoSpaceButton.addEventListener('click', displayCharCountNoSpace);
  wordCountButton.addEventListener('click', displayWordCount);
  likeButton.addEventListener('click', likeQuote);

//   ------------------
function displayCharCount() {
    const currentQuote = quotes[previousQuoteIndex];
    const charCount = currentQuote.quote.length;
    alert(`Character Count (with space): ${charCount}`);
  }
  
  function displayCharCountNoSpace() {
    const currentQuote = quotes[previousQuoteIndex];
    const charCountNoSpace = currentQuote.quote.replace(/\s/g, '').length;
    alert(`Character Count (no space): ${charCountNoSpace}`);
  }
  
  function displayWordCount() {
    const currentQuote = quotes[previousQuoteIndex];
    const wordCount = currentQuote.quote.split(' ').length;
    alert(`Word Count: ${wordCount}`);
  }
  
  function likeQuote() {
    const currentQuote = quotes[previousQuoteIndex];
  currentQuote.likes++;
  const likesDisplay = document.getElementById(`likes-${currentQuote.id}`);
  if (likesDisplay) {
    likesDisplay.textContent = currentQuote.likes;
  }
//   console.log(quotes); // Log the updated array of quotes with likes
}