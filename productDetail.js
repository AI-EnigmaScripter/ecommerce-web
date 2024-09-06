function setupReviewHandler(productId) {
    document.getElementById(`submit-review-${productId}`).addEventListener('click', function() {
      var reviewText = document.getElementById(`review-text-${productId}`).value;
      if (reviewText) {
        var reviewList = document.getElementById(`reviews-list-${productId}`);
        var newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.textContent = reviewText;
        reviewList.appendChild(newReview);
        document.getElementById(`review-text-${productId}`).value = ''; // Clear textarea
      } else {
        alert('Please enter a review.');
      }
    });
  }
  
  // Initialize review handlers for each product
  setupReviewHandler('abaya');
  setupReviewHandler('hijab');
  setupReviewHandler('dress');
  setupReviewHandler('casual');
  setupReviewHandler('hijab');
  