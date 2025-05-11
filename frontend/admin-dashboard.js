document.addEventListener('DOMContentLoaded', fetchBooks);

const form = document.getElementById('bookForm');
form.addEventListener('submit', submitForm);

function fetchBooks() {
  fetch('http://localhost:8000/book/')
    .then(res => res.json())
    .then(data => {
      const bookList = document.getElementById('bookList');
      bookList.innerHTML = '';
      data.forEach(book => {
        bookList.innerHTML += `
          <tr>
            <td>${book.ID}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.publication}</td>
            <td>
              <button onclick="editBook(${book.ID}, '${book.name}', '${book.author}', '${book.publication}')">Edit</button>
              <button onclick="deleteBook(${book.ID})">Delete</button>
            </td>
          </tr>`;
      });
    })
    .catch(err => console.error('Error fetching books:', err));
}

function submitForm(e) {
  e.preventDefault();
  const id = document.getElementById('bookId').value;
  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const publication = document.getElementById('publication').value;

  const method = id ? 'PUT' : 'POST';
  const url = id ? `http://localhost:8000/book/${id}` : 'http://localhost:8000/book/';

  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, author, publication })
  })
    .then(() => {
      hideForm();
      fetchBooks();
    })
    .catch(err => console.error('Error saving book:', err));
}

function deleteBook(id) {
  if (!confirm("Are you sure you want to delete this book?")) return;
  fetch(`http://localhost:8000/book/${id}`, { method: 'DELETE' })
    .then(() => fetchBooks())
    .catch(err => console.error('Error deleting book:', err));
}

function editBook(id, name, author, publication) {
  document.getElementById('form-title').textContent = 'Edit Book';
  document.getElementById('bookId').value = id;
  document.getElementById('name').value = name;
  document.getElementById('author').value = author;
  document.getElementById('publication').value = publication;
  showAddForm();
}

function showAddForm() {
  document.getElementById('book-form').style.display = 'block';
}

function hideForm() {
  document.getElementById('book-form').style.display = 'none';
  form.reset();
  document.getElementById('bookId').value = '';
  document.getElementById('form-title').textContent = 'Add Book';
}

function logout() {
  window.location.href = 'index.html'; // assuming index.html is your entry page
}
