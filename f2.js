// Get the "Send Feedback" button
var sendButton = document.querySelector('.btn.btn-info.btn-sm.text-light');

// Add a click event listener to the button
sendButton.addEventListener('click', function() {
  // Get the feedback textarea
  var feedbackTextarea = document.getElementById('textAreaExample');

  // Get the feedback value
  var feedback = feedbackTextarea.value.trim();

  // Check if the feedback is empty
  if (feedback === '') {
    alert('Please enter your feedback.');
    return;
  }

  // Perform the submission (you can replace this with your actual submission logic)
  submitFeedback(feedback);
});

// Function to handle the feedback submission
function submitFeedback(feedback) {
  // Perform the actual submission logic here
  // For example, you can send an AJAX request to a server-side endpoint
  // with the feedback data
  console.log('Feedback submitted:', feedback);
  
  // Clear the feedback textarea after submission
  var feedbackTextarea = document.getElementById('textAreaExample');
  feedbackTextarea.value = '';

  alert('Your Feedback was sent successfully. Thank you!')
}