// JavaScript for Blog Search
const searchInput = document.getElementById('searchInput');
const blogGrid = document.getElementById('blogGrid');
const blogCards = document.querySelectorAll('.blog-card');

// Add event listener to the search input
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();

  // Filter the blog cards
  blogCards.forEach((card) => {
    const title = card.querySelector('.blog-title').textContent.toLowerCase();
    const description = card.querySelector('.blog-description').textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block'; // Show matching cards
    } else {
      card.style.display = 'none'; // Hide non-matching cards
    }
  });
});
