document.getElementById('donorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate that the form is complete
    if (!document.getElementById('fullName').value || !document.getElementById('age').value || !document.getElementById('bloodGroup').value || !document.getElementById('contact').value || !document.querySelector('input[name="availability"]:checked')) {
        alert('Please fill out all required fields!');
        return;
    }

    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        bloodGroup: document.getElementById('bloodGroup').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value,
        availability: document.querySelector('input[name="availability"]:checked').value
    };

    // Store form data in local storage or session storage
    localStorage.setItem('donorData', JSON.stringify(formData));

    // Redirect to the next page (make sure 'aibot.html' exists)
    window.location.href = 'aibot.html'; 
});
