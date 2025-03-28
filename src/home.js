export function createHomePage() {
    const mainContent = document.querySelector('#content');
    const headline = document.createElement('p');

    // Clear previous page
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    headline.textContent = 'Welcome to Gentium! Here, you will find rich delicacies from around the globe.';

    mainContent.appendChild(headline);
}