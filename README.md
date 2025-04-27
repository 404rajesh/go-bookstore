# 📚 Go Bookstore API

A simple RESTful API built with Go (Golang) using GORM ORM and MySQL database.  
This project manages a bookstore inventory, allowing users to Create, Read, Update, and Delete (CRUD) book records.

## 🚀 Features

- Create a new book entry 📖
- Fetch all books 📚
- Get a book by its ID 🔍
- Update book details ✏️
- Delete a book entry 🗑️
- Modular and clean folder structure
- Auto database migration with GORM

## 🛠️ Technologies Used

- **Go (Golang)** — Core language
- **Gorilla Mux** — HTTP router
- **GORM** — ORM for database operations
- **MySQL** — Database
- **Postman** — API testing (optional)

## 📂 Project Structure

go-bookstore/

│

├── pkg/

│   ├── config/

│   ├── controllers/

│   ├── model/

│   └── utils/

│

├── routes/

├── main.go

└── go.mod

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/yourusername/go-bookstore.git
cd go-bookstore

### 2. Install Dependencies

go mod tidy

### 3. Set Up MySQL Database

- Install and start MySQL server.
- Create a database:

CREATE DATABASE simplerest;

- Update the database credentials in `pkg/config/app.go`:

d, err := gorm.Open("mysql", "username:password@/simplerest?charset=utf8&parseTime=True&loc=Local")

(Replace `username` and `password` with your MySQL credentials.)

### 4. Run the Application

go run main.go

Server will start running at:

localhost:9010

## 📖 API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| POST   | `/book/`              | Create a new book     |
| GET    | `/book/`              | Get all books         |
| GET    | `/book/{bookId}`      | Get book by ID        |
| PUT    | `/book/{bookId}`      | Update book by ID     |
| DELETE | `/book/{bookId}`      | Delete book by ID     |

## 👨‍💻 Author

- Rajesh Kumar Jha
- GitHub: [@404rajesh](https://github.com/404rajesh)

## 📝 License
This project is licensed under the MIT License.

**The project follows a clean modular structure, using Gorilla Mux for routing and GORM for database operations. It is intended for educational purposes and learning backend development using Golang.**
