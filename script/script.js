document.querySelector("form").addEventListener("submitBtn", function(event) {
    event.preventDefault(); // Prevents default form submission
    window.location.href = 'AIbot.html'; // Redirects after submission
});