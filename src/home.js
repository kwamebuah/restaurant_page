import pastaSalad from "./images/pasta-salad.webp";

export function createHomePage() {
    const mainContent = document.querySelector('#content');
    const headline = document.createElement('p');
    const fig1 = document.createElement('figure');
    const saladImg = document.createElement('img');
    const fig1cap = document.createElement('figcaption');

    headline.textContent = "In too much of a hurry to make dinner? Feeling overwhelmed at having to cook for extended family visiting over the holiday? Drop by with the family at Nes2U and enjoy meals that taste like home.";

    
    saladImg.src = pastaSalad;
    saladImg.alt = "Pasta Salad";
    saladImg.width = 750;
    saladImg.height = 750;
    fig1cap.textContent = 'Pasta and Salad';
    fig1.appendChild(saladImg);
    fig1.appendChild(fig1cap);

    mainContent.appendChild(headline);
    mainContent.appendChild(fig1);

    return mainContent;
}