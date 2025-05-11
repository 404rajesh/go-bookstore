// This function fetches books from the backend API
function fetchBooks() {
    fetch('http://localhost:8000/books')  // Assuming your backend is running on this URL
        .then(response => response.json())
        .then(data => {
            displayBooks(data);  // Function to display books
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
}

function displayBooks(books) {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; // Clear previous content

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-item');

        bookElement.innerHTML = `
            <h3>${book.name}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Publication:</strong> ${book.publication}</p>
        `;

        booksContainer.appendChild(bookElement);
    });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);
