document.addEventListener('DOMContentLoaded', function() {
  // Toggle contact form dropdown
  const contactTrigger = document.querySelector('.contact-trigger');
  const contactDropdown = document.querySelector('.contact-dropdown');
  
  if (contactTrigger && contactDropdown) {
    let isOpen = false;
    
    // Toggle dropdown on click
    contactTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      isOpen = !isOpen;
      
      if (isOpen) {
        contactDropdown.style.display = 'block';
        setTimeout(() => {
          contactDropdown.style.opacity = '1';
          contactDropdown.style.transform = 'translateY(0)';
        }, 10);
      } else {
        contactDropdown.style.opacity = '0';
        contactDropdown.style.transform = 'translateY(10px)';
        setTimeout(() => {
          contactDropdown.style.display = 'none';
        }, 300);
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!contactDropdown.contains(e.target) && e.target !== contactTrigger) {
        contactDropdown.style.opacity = '0';
        contactDropdown.style.transform = 'translateY(10px)';
        setTimeout(() => {
          contactDropdown.style.display = 'none';
          isOpen = false;
        }, 300);
      }
    });
    
    // Handle form submission
    const contactForm = document.getElementById('headerContactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
          formObject[key] = value;
        });
        
        // Here you would typically send the data to a server
        console.log('Contact form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        
        // Close the dropdown
        contactDropdown.style.opacity = '0';
        contactDropdown.style.transform = 'translateY(10px)';
        setTimeout(() => {
          contactDropdown.style.display = 'none';
          isOpen = false;
        }, 300);
      });
    }
  }
});
