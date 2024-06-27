const numStars = 50;
const starsContainer = document.querySelector('.stars');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.setProperty('--top-offset', `${Math.random() * 100}vh`);
    star.style.setProperty('--fall-duration', `${Math.random() * 5 + 5}s`);
    star.style.setProperty('--fall-delay', `${Math.random() * 10}s`);
    star.style.setProperty('--star-tail-length', `${Math.random() * 5 + 5}em`);
    starsContainer.appendChild(star);
}
