document.addEventListener("DOMContentLoaded", () => {
  const newsSection = document.querySelector(".news-section");

  const sampleNews = [
    "India signs historic climate deal at G20 Summit.",
    "New education policy to be implemented from next academic year.",
    "ISRO's next moon mission launch scheduled for December.",
    "Stock markets hit all-time high today.",
    "Govt announces scheme for youth skill development."
  ];

  // Insert news as list
  const ul = document.createElement("ul");
  sampleNews.forEach(news => {
    const li = document.createElement("li");
    li.textContent = news;
    ul.appendChild(li);
  });

  newsSection.appendChild(ul);
});
