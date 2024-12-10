document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    alert("Thank you for contacting us! We will get back to you shortly.");
    document.getElementById("contactForm").reset(); // Reset the form
});
