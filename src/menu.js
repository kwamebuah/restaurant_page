import meal1 from "./images/menu/keesha-s-kitchen-woC24wGXsQ8-unsplash.jpg";
import meal2 from "./images/menu/michele-blackwell-rAyCBQTH7ws-unsplash.jpg";
import meal3 from "./images/menu/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg";
import meal4 from "./images/menu/keesha-s-kitchen-KRbF_wsztBE-unsplash.jpg";

export function createMenu() {
    const mainContent = document.querySelector('#content');
    const heading = document.createElement('h3');

    // Clear previous page
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    heading.textContent = 'Menu';
    mainContent.appendChild(heading);

    const menuList = [
        {
            name: 'Nigerian Jollof Rice',
            desc: 'A tasty meal of sauced rice with chicken skewers. A tasty Nigerian dish.',
            img: meal1,
        },
        {
            name: 'Brothy Ramen Noodles',
            desc: 'A thick, warm pork broth with well-cooked ramen accompanied with soft-boiled eggs, shrimps and edamame. Savor this Japanese traditional meal.',
            img: meal2,
        },
        {
            name: 'Pasta with Tomato Sauce',
            desc: 'Al dente pasta in tomato sauce topped with parsely with chicken. A hark to the familiar Italian cuisine.',
            img: meal3,
        },
        {
            name: 'Grilled Red Fish',
            desc: 'Spiced charcoal-grilled red fish with lemons. Treat your taste buds to this delicacy from Ghana.',
            img: meal4,
        },
    ];

    menuList.forEach(menuItem => {
        const menuCard = document.createElement('article');
        const foodName = document.createElement('h4');
        const foodDesc = document.createElement('p');
        const foodImg = document.createElement('img');

        foodName.textContent = menuItem.name;
        foodDesc.textContent = menuItem.desc;
        foodImg.src = menuItem.img;
        foodImg.width = 400;
        foodImg.height = 400;
        menuCard.appendChild(foodName);
        menuCard.appendChild(foodImg);
        menuCard.appendChild(foodDesc);
        mainContent.appendChild(menuCard);
    });
}