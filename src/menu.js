import './css/menu.css';
import ImgBg from './images/assets/nico-smit-9ZJOs9hmuKs-unsplash.jpg';
import Food1 from './images/assets/chad-montano-MqT0asuoIcU-unsplash.jpg';
import Food2 from './images/assets/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg';

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
const createMenuItem = function(foodImage, foodName, foodDesc, foodPrice){

  const imgFood = document.createElement("img");
  imgFood.setAttribute("src", foodImage);
  imgFood.setAttribute("alt", "Food");

  const divFoodContainer = document.createElement("div");
  divFoodContainer.classList.add("food-image");
  divFoodContainer.appendChild(imgFood);

  const h3FoodName = document.createElement("h3");
  h3FoodName.textContent = foodName || "Yummy yum in my tum tum";

  const pFoodDescription = document.createElement("p");
  pFoodDescription.textContent = foodDesc || "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. ";


  const h3FoodPrice = document.createElement("h3");
  h3FoodPrice.textContent = foodPrice || "$ 69,420.00";

  const divDescriptionContainer = document.createElement("div");
  divDescriptionContainer.classList.add("food-description");
  divDescriptionContainer.appendChild(h3FoodName);
  divDescriptionContainer.appendChild(pFoodDescription);
  divDescriptionContainer.appendChild(h3FoodPrice);

  const divMenuItem = document.createElement("div");
  divMenuItem.classList.add("food-menu-item");
  divMenuItem.appendChild(divFoodContainer);
  divMenuItem.appendChild(divDescriptionContainer);

  return divMenuItem;
}
// --------------------------------- //

const menuItem1 = createMenuItem(Food1);
const menuItem2 = createMenuItem(
  Food2,
  "Greenies for mah green bois",
  "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
  "$ 1.00",
);

divMenu.appendChild(imgBackground);
divMenu.appendChild(divMenuBanner);
divMenu.appendChild(menuItem1);
divMenu.appendChild(menuItem2);

export {divMenu};
