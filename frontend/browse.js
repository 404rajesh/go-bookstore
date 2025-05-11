document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8080/book/")  // Change if your backend runs on another port
      .then(response => response.json())
      .then(data => {
        const bookList = document.getElementById("book-list");
        data.forEach(book => {
          const card = document.createElement("div");
          card.className = "book-card";
          card.innerHTML = `
            <h3>${book.name}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Publication:</strong> ${book.publication}</p>
          `;
          bookList.appendChild(card);
        });
      })
      .catch(err => {
        console.error("Error fetching books:", err);
        document.getElementById("book-list").innerHTML = "<p>Could not load books.</p>";
      });
  });
  