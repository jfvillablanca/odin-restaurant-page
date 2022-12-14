import ImgHero from './images/assets/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg';

const divHome = document.createElement("div");
divHome.classList.add("home");
divHome.classList.add("page");
const h1Welcome = document.createElement("h1");
h1Welcome.textContent = "The Jorrvaskr";
const h2Welcome = document.createElement("h2");
h2Welcome.textContent = "Let's feast in Valhalla";
const imgBackground = document.createElement("img");
imgBackground.setAttribute("src", ImgBg);
imgBackground.setAttribute("alt", "A wooden plate with grilled ribs with pickles and tomatoes as sides");
imgBackground.classList.add("background-image");

const headerWelcome = document.createElement("div");
headerWelcome.classList.add("headers");
headerWelcome.appendChild(h1Welcome);
headerWelcome.appendChild(h2Welcome);
divHome.appendChild(imgBackground);
divHome.appendChild(headerWelcome);

export {divHome};
