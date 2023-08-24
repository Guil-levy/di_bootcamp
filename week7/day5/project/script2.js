const quotes = [
    {
      author: "Albert Einstein",
      quote: "Imagination is more important than knowledge.",
      likes: 0,
    },
    {
      author: "Albert Einstein",
      quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      likes: 0,
    },
    {
      author: "Steve Jobs",
      quote: "Your time is limited, don't waste it living someone else's life.",
      likes: 0,
    },
    {
      author: "Steve Jobs",
      quote: "Innovation distinguishes between a leader and a follower.",
      likes: 0,
    },
    {
      author: "Maya Angelou",
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      likes: 0,
    },
    {
      author: "Maya Angelou",
      quote: "Success is liking yourself, liking what you do, and liking how you do it.",
      likes: 0,
    },
    {
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
      likes: 0,
    },
    {
      author: "Mark Twain",
      quote: "The two most important days in your life are the day you are born and the day you find out why.",
  
    },
    {
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
  
    },
    {
      author: "Oscar Wilde",
      quote: "To live is the rarest thing in the world. Most people exist, that is all.",
 
    },
  ];
  
  const filterAuthorForm = document.getElementById('filter-author-form');
  const quoteSection = document.getElementById('quote-section');
  const prevQuoteButton = document.getElementById('prev-quote');
  const nextQuoteButton = document.getElementById('next-quote');
  
  let filteredQuotes = [];
  let filteredIndex = -1;
  
  filterAuthorForm.addEventListener('submit', filterQuotes);
  prevQuoteButton.addEventListener('click', showPreviousQuote);
  nextQuoteButton.addEventListener('click', showNextQuote);
  
  function filterQuotes(event) {
    event.preventDefault();
  
    const authorFilter = document.getElementById('author-filter').value;
    filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorFilter.toLowerCase());
    filteredIndex = 0;
  
    if (filteredQuotes.length > 0) {
      displayQuote(filteredQuotes[filteredIndex]);
      updateNavigationButtons();
    } else {
      quoteSection.innerHTML = '<p>No quotes found for the selected author.</p>';
      disableNavigationButtons();
    }
  }
  
  function showPreviousQuote() {
    filteredIndex--;
    if (filteredIndex < 0) {
      filteredIndex = filteredQuotes.length - 1;
    }
    displayQuote(filteredQuotes[filteredIndex]);
  }
  
  function showNextQuote() {
    filteredIndex++;
    if (filteredIndex >= filteredQuotes.length) {
      filteredIndex = 0;
    }
    displayQuote(filteredQuotes[filteredIndex]);
  }
  
  function updateNavigationButtons() {
    prevQuoteButton.disabled = filteredQuotes.length <= 1;
    nextQuoteButton.disabled = filteredQuotes.length <= 1;
  }
  
  function disableNavigationButtons() {
    prevQuoteButton.disabled = true;
    nextQuoteButton.disabled = true;
  }
  
  function displayQuote(quote) {
    quoteSection.innerHTML = `
      <p><strong>${quote.author}:</strong> ${quote.quote}</p>
      <span class="likes-count">Likes: ${quote.likes}</span>
    `;
  }
  