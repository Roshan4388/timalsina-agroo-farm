// === about.js - Timalsina Agro Farm ===

(function() {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Set active navigation link based on current page
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.remove('active');
      
      if (href === currentPage) {
        link.classList.add('active');
      }
      
      // Special case for homepage when URL ends with '/'
      if (currentPage === '' && href === 'index.html') {
        link.classList.add('active');
      }
    });
    
    // 2. Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
          e.preventDefault();
          
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
    
    // 3. Add animation on scroll (simple fade-in)
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.card, .gallery-item, .member-card');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.card, .gallery-item, .member-card');
    elementsToAnimate.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // 4. Handle contact form submission (prevent default)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        const formData = new FormData(this);
        const name = formData.get('name') || 'Visitor';
        
        alert(`Thank you ${name}! Your message has been sent. We'll get back to you soon.`);
        this.reset();
      });
    }
    
    // 5. Image gallery lightbox effect (simple)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const iconName = this.querySelector('span')?.textContent || 'Farm image';
        console.log(`Gallery item clicked: ${iconName}`);
        
        // You can expand this to show a modal with actual images
        // For now, just a console message
      });
      
      // Add cursor pointer to show it's clickable
      item.style.cursor = 'pointer';
    });
    
    // 6. Add current year in footer copyright
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
      const currentYear = new Date().getFullYear();
      copyrightElement.innerHTML = `© ${currentYear} Timalsina Agro Farm — built with care for the land`;
    }
    
    // 7. Farm greeting based on time of day
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour < 12) {
      greeting = '🌤️ Good morning!';
    } else if (hour < 18) {
      greeting = '☀️ Good afternoon!';
    } else {
      greeting = '🌙 Good evening!';
    }
    
    console.log(`${greeting} Welcome to Timalsina Agro Farm`);
    
    // 8. Add hover effect for product cards
    const productCards = document.querySelectorAll('.card');
    productCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        if (icon) {
          icon.style.transform = 'scale(1.1)';
          icon.style.transition = 'transform 0.2s';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        if (icon) {
          icon.style.transform = 'scale(1)';
        }
      });
    });
    
    // 9. Team member quick info
    const teamMembers = document.querySelectorAll('.member-card');
    teamMembers.forEach(member => {
      member.addEventListener('click', function() {
        const name = this.querySelector('h3')?.textContent || 'Team member';
        const role = this.querySelector('p')?.textContent || '';
        
        if (role) {
          console.log(`👤 ${name} — ${role}`);
        }
      });
    });
    
    // 10. Page load performance marker
    console.log(`⏱️ Page loaded in ${performance.now().toFixed(2)}ms`);
  });
  
  // Additional utility functions
  
  // Function to copy contact info to clipboard
  window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };
  
  // Function to toggle mobile menu (if needed in future)
  window.toggleMobileMenu = function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('show');
    }
  };
  
})();

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { aboutJs: true };
}