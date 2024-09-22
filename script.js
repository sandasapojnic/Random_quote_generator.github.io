const quotes = [
    { quote: "I have no special talent. I am only passionately curious.", author: "Albert Einstein" },
    { quote: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
  ];
  
  const quoteText = document.getElementById('quote');
  const authorText = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote');
  const copyButton = document.getElementById('copy-quote');
  
  newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `“${randomQuote.quote}”`;
    authorText.textContent = `-${randomQuote.author}`;
  });
  
  copyButton.addEventListener('click', () => {
    const quoteToCopy = `${quoteText.textContent} ${authorText.textContent}`;
    navigator.clipboard.writeText(quoteToCopy).then(() => {
      alert("Quote copied to clipboard!");
    });
  });