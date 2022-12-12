import './css/normalize.css';
import './css/skeleton.css';
import './css/styles.css';

import ImgHero from './images/assets/nico-smit-9ZJOs9hmuKs-unsplash.jpg';

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

const divTabs = document.createElement("div");
divTabs.classList.add("tabs");
const divTabHome = document.createElement("div");
divTabHome.classList.add("home");
divTabHome.textContent = "Home";
const divTabMenu = document.createElement("div");
divTabMenu.classList.add("menu");
divTabMenu.textContent = "Menu";
const divTabContact = document.createElement("div");
divTabContact.classList.add("contact");
divTabContact.textContent = "Contact";

divTabs.appendChild(divTabHome);
divTabs.appendChild(divTabMenu);
divTabs.appendChild(divTabContact);

containerContent.appendChild(divHero);
containerContent.appendChild(divTabs);
