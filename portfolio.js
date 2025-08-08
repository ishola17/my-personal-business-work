// Get the modal
const modal = document.getElementById('experienceModal');
const btn = document.getElementById('experienceBtn');
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }
});
