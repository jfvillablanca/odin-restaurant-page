import './css/menu.css';
import ImgBg from './images/assets/nico-smit-9ZJOs9hmuKs-unsplash.jpg';
import Food1 from './images/assets/chad-montano-MqT0asuoIcU-unsplash.jpg';

const divMenu = document.createElement("div");
divMenu.classList.add("menu");
divMenu.classList.add("page");

const imgBackground = document.createElement("img");
imgBackground.setAttribute("src", ImgBg);
imgBackground.setAttribute("alt", "A lot of meat on the grill");
imgBackground.classList.add("background-image");

const h1Menu = document.createElement("h1");
h1Menu.textContent = "Dishes";

const divMenuBanner = document.createElement("div");
divMenuBanner.classList.add("header");
divMenuBanner.appendChild(h1Menu);

// Food Divs
// Menu Item #1
const imgFood = document.createElement("img");
imgFood.setAttribute("src", Food1);
imgFood.setAttribute("alt", "Food");

const divFoodContainer = document.createElement("div");
divFoodContainer.classList.add("food-image");
divFoodContainer.appendChild(imgFood);

const h3FoodName = document.createElement("h3");
h3FoodName.textContent = "Yummy yum in my tum tum";

const pFoodDescription = document.createElement("p");
pFoodDescription.textContent = "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia.";


const h3FoodPrice = document.createElement("h3");
h3FoodPrice.textContent = "$ 69,420.00";

const divDescriptionContainer = document.createElement("div");
divDescriptionContainer.classList.add("food-description");
divDescriptionContainer.appendChild(h3FoodName);
divDescriptionContainer.appendChild(pFoodDescription);
divDescriptionContainer.appendChild(h3FoodPrice);

const divMenuItem = document.createElement("div");
divMenuItem.classList.add("food-menu-item");
divMenuItem.appendChild(divFoodContainer);
divMenuItem.appendChild(divDescriptionContainer);
// --------------------------------- //

divMenu.appendChild(imgBackground);
divMenu.appendChild(divMenuBanner);
divMenu.appendChild(divMenuItem);

export {divMenu};
