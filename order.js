// payment.js

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
            // Example order details
            const orderNumber = data.orderNumber || '123456';
            const totalAmount = data.totalAmount || '99.99';

            // Redirect to the order confirmation page with parameters
            window.location.href = `order-confirmation.html?orderNumber=${orderNumber}&totalAmount=${totalAmount}`;
        } else {
            document.getElementById('error-message').textContent = data.message || 'Payment failed. Please try again.';
        }
    } catch (error) {
        document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
    }
});
