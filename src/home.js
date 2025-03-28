export function createHomePage() {
    const mainContent = document.querySelector('#content');
    const shader = document.createElement('div');
    const headline = document.createElement('h3');
    const heroMessage = document.createElement('p');

    // Clear previous page
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    shader.classList.add('background-shader');
    headline.textContent = 'Welcome to Gentium';
    heroMessage.classList.add('hero-message');
    heroMessage.textContent = 'Here, you will find rich delicacies from across the globe.';

    shader.appendChild(headline);
    shader.appendChild(heroMessage);
    mainContent.appendChild(shader);
}