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

const divReservationContainer = document.createElement("div");
divReservationContainer.classList.add("res-container");

const imgRestaurantLocation1 = document.createElement("img");
imgRestaurantLocation1.setAttribute("src", ImgLoc1);
imgRestaurantLocation1.setAttribute("alt", "A restaurant with stairs to the right and patrons on the left");

const imgRestaurantLocation2 = document.createElement("img");
imgRestaurantLocation2.setAttribute("src", ImgLoc2);
imgRestaurantLocation2.setAttribute("alt", "A warmly lit restaurant with tables");

const divImageShowcaseContainer = document.createElement("div");
divImageShowcaseContainer.classList.add("img-container");
divImageShowcaseContainer.appendChild(imgRestaurantLocation1);
divImageShowcaseContainer.appendChild(imgRestaurantLocation2);

const divContactDetails = document.createElement("div");
divContactDetails.classList.add("text-container");

divReservationContainer.appendChild(divImageShowcaseContainer);
divReservationContainer.appendChild(divContactDetails);

divContact.appendChild(imgBackground);
divContact.appendChild(headerWelcome);
divContact.appendChild(divReservationContainer);

export {divContact};
