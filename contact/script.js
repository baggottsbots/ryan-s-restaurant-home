document.getElementById('year').textContent = new Date().getFullYear();

    // ===== CONTACT FORM SUBMISSION =====
    // Handles form validation and submission feedback
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Show success message
      alert('Thank you for your message! We\'ll get back to you soon.');
      
      // Reset form
      document.getElementById('contact-form').reset();
    });