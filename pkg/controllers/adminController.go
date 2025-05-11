package controllers

import (
	"encoding/json"
	"net/http"
)

func AdminLogin(w http.ResponseWriter, r *http.Request) {
	var credentials map[string]string
	err := json.NewDecoder(r.Body).Decode(&credentials)
	if err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	// Hardcoded credentials (replace with DB or config file logic later)
	if credentials["username"] == "admin" && credentials["password"] == "admin123" {
		json.NewEncoder(w).Encode(map[string]bool{"success": true})
	} else {
		json.NewEncoder(w).Encode(map[string]bool{"success": false})
	}
}
