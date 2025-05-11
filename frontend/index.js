let booksData = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
  document.getElementById("searchBar").addEventListener("input", filterBooks);
});

function fetchBooks() {
  fetch('http://localhost:8000/book/')
    .then(res => res.json())
    .then(data => {
      booksData = data;
      renderBooks(data);
    })
    .catch(err => {
      console.error("Error fetching books:", err);
    });
}

function renderBooks(books) {
  const booksDiv = document.getElementById("books");
  booksDiv.innerHTML = "";

  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book-card";
    div.innerHTML = `
      <h3>${book.name}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Publication:</strong> ${book.publication}</p>
    `;
    booksDiv.appendChild(div);
  });
}

function filterBooks() {
  const searchTerm = document.getElementById("searchBar").value.toLowerCase();
  const filtered = booksData.filter(book =>
    book.name.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.publication.toLowerCase().includes(searchTerm)
  );
  renderBooks(filtered);
}
