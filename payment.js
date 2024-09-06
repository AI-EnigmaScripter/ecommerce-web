document.getElementById('payment-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Mock API endpoint
    const mockApiUrl = 'https://mockapi.example.com/payment';

    try {
        const response = await fetch(mockApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cardNumber,
                expiryDate,
                cvv
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Redirect to order confirmation page on successful payment
            window.location.href = 'order-confirmation.html';
        } else {
            document.getElementById('error-message').textContent = data.message || 'Payment failed. Please try again.';
        }
    } catch (error) {
        document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
    }
});
