import ImgHero from './images/assets/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg';

const divHome = document.createElement("div");
divHome.classList.add("home");
divHome.classList.add("page");
const h1Welcome = document.createElement("h1");
h1Welcome.textContent = "The Jorrvaskr";
const h2Welcome = document.createElement("h2");
h2Welcome.textContent = "Let's feast in Valhalla";
const imgHero = document.createElement("img");
imgHero.setAttribute("src", ImgHero);
imgHero.setAttribute("alt", "A wooden plate with grilled ribs with pickles and tomatoes as sides");

const headerWelcome = document.createElement("div");
headerWelcome.classList.add("headers");
headerWelcome.appendChild(h1Welcome);
headerWelcome.appendChild(h2Welcome);
divHome.appendChild(headerWelcome);
divHome.appendChild(imgHero);

export {divHome};
