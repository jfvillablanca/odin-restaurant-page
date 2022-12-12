import './css/normalize.css';
import './css/skeleton.css';
import './css/styles.css';

import ImgHero from './images/assets/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg';

const containerContent = document.querySelector("#content");

const divHero = document.createElement("div");
divHero.classList.add("hero");
const h1Welcome = document.createElement("h1");
h1Welcome.textContent = "Welcome to Jorrvaskr";
const h2Welcome = document.createElement("h2");
h2Welcome.textContent = "Where we feast like we're in Valhalla";
const imgHero = document.createElement("img");
imgHero.setAttribute("src", ImgHero);
imgHero.setAttribute("alt", "A lot of meat on the grill");

const headerWelcome = document.createElement("div");
headerWelcome.classList.add("headers");
headerWelcome.appendChild(h1Welcome);
headerWelcome.appendChild(h2Welcome);
divHero.appendChild(headerWelcome);
divHero.appendChild(imgHero);

const navTabs = document.createElement("nav");
navTabs.classList.add("tabs");
const ulTabs = document.createElement("ul");

const liTabHome = document.createElement("li");
const aTabHome = document.createElement("a");
aTabHome.setAttribute("href", "#");
aTabHome.textContent = "Home";
aTabHome.classList.add("current-tab");
liTabHome.appendChild(aTabHome);

const liTabMenu = document.createElement("li");
const aTabMenu = document.createElement("a");
aTabMenu.setAttribute("href", "#");
aTabMenu.textContent = "Menu";
liTabMenu.appendChild(aTabMenu);

const liTabContact = document.createElement("li");
const aTabContact = document.createElement("a");
aTabContact.setAttribute("href", "#");
aTabContact.textContent = "Contact";
liTabContact.appendChild(aTabContact);

ulTabs.appendChild(liTabHome);
ulTabs.appendChild(liTabMenu);
ulTabs.appendChild(liTabContact);

navTabs.appendChild(ulTabs);
containerContent.appendChild(navTabs);
containerContent.appendChild(divHero);
