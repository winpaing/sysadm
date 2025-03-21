// Smooth scroll for future anchor links (if added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Card reveal animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('reveal');
            card.style.animation = `revealCard 0.6s ease-out forwards`;
        }, index * 200); // Staggered delay for each card
    });
});
