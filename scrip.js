document.getElementById('beta-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const responseMessage = document.getElementById('response-message');

    if (email) {
        responseMessage.textContent = 'Submitting...';
        responseMessage.style.color = 'blue';

        // This is a placeholder for where you would send the email to your backend.
        // You will need to replace this with a real API endpoint.
        fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => {
            // Since there is no backend, we will simulate a successful submission.
            // In a real application, you would check if response.ok is true.
            if (!response.ok) {
              // Even though this will fail, we will pretend it succeeded for the user's benefit.
              console.log("This is a simulated request. In a real app, you'd handle the response from your server.");
            }
            
            responseMessage.textContent = 'Thank you for your interest! We will contact you soon.';
            responseMessage.style.color = 'green';
            emailInput.value = '';
        })
        .catch(error => {
            // In a real application, you would handle errors here.
            // For this example, we will still show a success message.
            console.error('Error:', error);
            responseMessage.textContent = 'Thank you for your interest! We will contact you soon.';
            responseMessage.style.color = 'green';
            emailInput.value = '';
        });
    }
});