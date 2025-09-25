// Hire Me Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hireMeBtn = document.getElementById('hireMeBtn');
    const hireMeDropdown = document.getElementById('hireMeDropdown');
    
    if (hireMeBtn && hireMeDropdown) {
      hireMeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        hireMeDropdown.classList.toggle('active');
        
        // Close dropdown when clicking outside
        if (hireMeDropdown.classList.contains('active')) {
          document.addEventListener('click', closeDropdownOnClickOutside);
        } else {
          document.removeEventListener('click', closeDropdownOnClickOutside);
        }
      });
      
      function closeDropdownOnClickOutside(e) {
        if (!hireMeDropdown.contains(e.target) && e.target !== hireMeBtn) {
          hireMeDropdown.classList.remove('active');
          document.removeEventListener('click', closeDropdownOnClickOutside);
        }
      }
      
      // Close dropdown when clicking the Get In Touch button
      const getInTouchBtn = hireMeDropdown.querySelector('.cta-button');
      if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function() {
          hireMeDropdown.classList.remove('active');
        });
      }
    }
  });