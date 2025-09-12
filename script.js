// let signup = document.getElementById('signup')
// let student = document.getElementById('student')
// let staff = document.getElementById('staff')
// let guest = document.getElementById('guest')

// signup.addEventListener('click',()=>{
//     if(student.checked){
//         alert("Student login");
//     }else if(staff.checked){
//         alert("Staff login");
//     }else if(guest.checked){
//         alert("Guest login");
//     }
// })



// Smooth scrolling function with offset for fixed header
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Add event listeners to all navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
            
            // Update URL hash without jumping
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        });
    });
    
    // Handle initial page load with hash in URL
    if (window.location.hash) {
        setTimeout(() => {
            smoothScrollTo(window.location.hash);
        }, 100);
    }
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navToggle && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
});

// Enhanced JavaScript for animations and interactions

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {


    // Add fade-in class to sections
    const sections = document.querySelectorAll('.about, .events, .gallery, .feedback-section, footer');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Fade in elements on scroll
    function handleFadeInOnScroll() {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = (rect.top < window.innerHeight - 100) && (rect.bottom > 0);
            if (isVisible) {
                element.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', handleFadeInOnScroll);
    handleFadeInOnScroll();

    // Back to top functionality (if button exists)
    const backToTopButton = document.getElementById('backToTopButton');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Form submission animations
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = '<div class="loading-spinner"></div> Processing...';
                submitButton.disabled = true;
                setTimeout(function() {
                    submitButton.innerHTML = 'Submitted!';
                    submitButton.style.background = 'var(--success, #28a745)';
                }, 1500);
                e.preventDefault();
            }
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.cards, .event-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Nav bar scroll effect
    function handleNavScroll() {
        const nav = document.querySelector('nav');
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();
});