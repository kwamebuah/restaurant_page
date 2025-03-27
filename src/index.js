import { createHomePage } from "./home.js";
import { createContact } from "./contact.js";
import { createMenu } from "./menu.js";

(function startWebsite() {
    createHomePage();
    createEventlisteners();
})();

function createEventlisteners() {
    document.querySelector('#home').addEventListener('click', createHomePage);
    document.querySelector('#menu').addEventListener('click', createMenu);
    document.querySelector('#contact').addEventListener('click', createContact);
}