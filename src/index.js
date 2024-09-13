import "./styles.css";
import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";


const pageContent = document.querySelector('#content');
createHomePage();

const homeButton = document.querySelector('#homeBtn');
homeButton.textContent = 'Home';
homeButton.addEventListener('click', ()=>{
    pageContent.innerHTML = "";
    createHomePage();
});

const menuButton = document.querySelector('#menuBtn');
menuButton.textContent = 'Menu';
menuButton.addEventListener('click', ()=>{
    pageContent.innerHTML = "";
    createMenuPage();
});

const contactButton = document.querySelector('#contactBtn');
contactButton.textContent = 'Contacts';
contactButton.addEventListener('click', ()=>{
    pageContent.innerHTML = "";
    createContactPage();
});


