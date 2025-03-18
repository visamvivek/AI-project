document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('donationForm');
    const submitButton = document.getElementById('submitButton');
    const availableYes = document.getElementById('availableYes'); // Get the "Yes" radio button

    if (submitButton) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            if (availableYes.checked) {
                window.location.href = 'aibot.html'; // Redirect if "Yes" is checked
            } else {
                window.location.href = 'indexdonate.html'; // Redirect if "No" or other
            }
        });
    }
});