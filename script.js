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