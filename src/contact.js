import './css/contact.css';
import ImgBg from './images/assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg';
import ImgLoc1 from './images/assets/volkan-vardar-1H30uRC1plc-unsplash.jpg';
import ImgLoc2 from './images/assets/adrien-olichon-ZgREXhl8ER0-unsplash.jpg';

const divContact = document.createElement("div");
divContact.classList.add("contact");
divContact.classList.add("page");

const h1Welcome = document.createElement("h1");
h1Welcome.textContent = "Book a reservation";

const headerWelcome = document.createElement("div");
headerWelcome.classList.add("header");
headerWelcome.appendChild(h1Welcome);

const imgBackground = document.createElement("img");
imgBackground.setAttribute("src", ImgBg);
imgBackground.setAttribute("alt", "A picture of a rustic restaurant");
imgBackground.classList.add("background-image");

divContact.appendChild(imgBackground);
divContact.appendChild(headerWelcome);

export {divContact};
