// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('open');
});

// Smooth Scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        navMenu.classList.remove('active'); // close menu after click
    });
});

// Event Overlay Modal
const eventButtons = document.querySelectorAll('.event-card .signup-btn');
const overlay = document.createElement('div');
overlay.className = 'event-overlay';
overlay.innerHTML = `
    <div class="event-overlay-content">
        <button class="close-overlay">&times;</button>
        <img class="event-overlay-image" src="" alt="Event Image">
        <div class="event-overlay-details">
            <h2></h2>
            <p></p>
            <div class="event-meta">
                <div class="event-meta-item"><i class="fas fa-calendar-alt"></i><span>Date: TBD</span></div>
                <div class="event-meta-item"><i class="fas fa-map-marker-alt"></i><span>Location: Campus Hall</span></div>
            </div>
            <button class="event-register-btn">Register Now</button>
        </div>
    </div>
`;
document.body.appendChild(overlay);

const overlayImg = overlay.querySelector('.event-overlay-image');
const overlayTitle = overlay.querySelector('.event-overlay-details h2');
const overlayDesc = overlay.querySelector('.event-overlay-details p');
const closeBtn = overlay.querySelector('.close-overlay');

eventButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.event-card');
        overlayImg.src = card.querySelector('img').src;
        overlayTitle.textContent = card.querySelector('h2').textContent;
        overlayDesc.textContent = card.querySelector('p').textContent;
        overlay.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});
