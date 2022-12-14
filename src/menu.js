import './css/menu.css';
import ImgBg from './images/assets/nico-smit-9ZJOs9hmuKs-unsplash.jpg';
import Food1 from './images/assets/chad-montano-MqT0asuoIcU-unsplash.jpg';

const divMenu = document.createElement("div");
divMenu.classList.add("menu");
divMenu.classList.add("page");
const h1Welcome = document.createElement("h1");
h1Welcome.textContent = "The Jorrvaskr";
const h2Welcome = document.createElement("h2");
h2Welcome.textContent = "Let's feast in Valhalla";
const imgHero = document.createElement("img");
imgHero.setAttribute("src", ImgHero);
imgHero.setAttribute("alt", "A lot of meat on the grill");

const headerWelcome = document.createElement("div");
headerWelcome.classList.add("headers");
headerWelcome.appendChild(h1Welcome);
headerWelcome.appendChild(h2Welcome);
divMenu.appendChild(headerWelcome);
divMenu.appendChild(imgHero);

export {divMenu};
