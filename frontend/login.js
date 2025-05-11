// public/js/login.js
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    try {
      const res = await fetch("http://localhost:8000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await res.json();
      if (data.success) {
        window.location.href = "admin-dashboard.html"; // redirect after login
      } else {
        document.getElementById("message").innerText = "Invalid credentials!";
      }
    } catch (err) {
      console.error("Error during login:", err);
      document.getElementById("message").innerText = "Server error!";
    }
  });
  