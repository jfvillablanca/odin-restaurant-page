import ImgHero from './images/assets/volkan-vardar-1H30uRC1plc-unsplash.jpg';

const divContact = document.createElement("div");
divContact.classList.add("contact");
divContact.classList.add("page");
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
divContact.appendChild(headerWelcome);
divContact.appendChild(imgHero);

export {divContact};
