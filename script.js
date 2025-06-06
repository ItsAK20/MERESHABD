document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('get-quote');
  const quoteDiv = document.getElementById('quote');

  if (!button || !quoteDiv) return;

  button.addEventListener('click', async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      quoteDiv.textContent = data.content;
    } catch (error) {
      quoteDiv.textContent = 'Failed to fetch quote.';
    }
  });
});
