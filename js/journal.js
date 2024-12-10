// DOM Elements
const journalInput = document.getElementById("journal-entry");
const saveButton = document.getElementById("save-journal-btn");
const entriesContainer = document.getElementById("entries-container");

// Load Existing Entries from Local Storage
document.addEventListener("DOMContentLoaded", () => {
    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    renderEntries(entries);
});

// Save Journal Entry
saveButton.addEventListener("click", () => {
    const entryText = journalInput.value.trim();
    if (entryText) {
        const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
        entries.unshift({ text: entryText, date: new Date().toLocaleString() });
        localStorage.setItem("journalEntries", JSON.stringify(entries));
        renderEntries(entries);
        journalInput.value = ""; // Clear input field
    } else {
        alert("Please write something before saving!");
    }
});

// Render Journal Entries
function renderEntries(entries) {
    entriesContainer.innerHTML = "";
    if (entries.length === 0) {
        entriesContainer.innerHTML = "<p>No entries yet. Start writing your journey!</p>";
        return;
    }

    entries.forEach((entry) => {
        const entryElement = document.createElement("div");
        entryElement.classList.add("entry");
        entryElement.innerHTML = `
            <p>${entry.text}</p>
            <small>${entry.date}</small>
        `;
        entriesContainer.appendChild(entryElement);
    });
}
