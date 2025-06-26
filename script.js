const newsData = [
  {
    title: "Green Hydrogen Plant Launched",
    date: "June 8, 2025",
    category: "energy",
    content: "Indian Oil launches a major green hydrogen initiative in Gujarat."
  },
  {
    title: "Q4 Financial Results Announced",
    date: "May 30, 2025",
    category: "finance",
    content: "Record profits mark a strong end to the fiscal year 2024."
  },
  {
    title: "Northeast LPG Network Expansion",
    date: "May 22, 2025",
    category: "infrastructure",
    content: "LPG accessibility increases across Northeast India."
  }
];

let displayed = 0;
const perPage = 2;

function loadMoreNews() {
  const container = document.getElementById('news-container');
  const nextItems = newsData.slice(displayed, displayed + perPage);
  nextItems.forEach(news => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-category', news.category);
    card.innerHTML = \`<h2>\${news.title}</h2><p class="date">\${news.date}</p><p>\${news.content}</p>\`;
    container.appendChild(card);
  });
  displayed += perPage;
  if (displayed >= newsData.length) {
    document.querySelector('.btn-load').style.display = 'none';
  }
}

function searchNews() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(input) ? '' : 'none';
  });
}

function filterCategory() {
  const category = document.getElementById('categoryFilter').value;
  document.querySelectorAll('.card').forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    card.style.display = category === 'all' || cardCategory === category ? '' : 'none';
  });
}

window.onload = loadMoreNews;