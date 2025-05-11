const API_URL = "http://localhost:8080/book/";

async function fetchBooks() {
  try {
    const res = await fetch(API_URL);
    const books = await res.json();
    const tbody = document.querySelector("#bookList tbody");
    tbody.innerHTML = "";

    books.forEach(book => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.ID}</td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.publication}</td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Failed to fetch books:", error);
  }
}

fetchBooks();
