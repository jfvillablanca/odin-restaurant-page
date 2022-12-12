import './css/normalize.css';
import './css/skeleton.css';
import './css/styles.css';

import {navTabs, aTabHome, aTabMenu, aTabContact} from './navbar.js';
import {divHero as divHome} from './home.js';

const containerContent = document.querySelector("#content");

aTabHome.addEventListener("click", () => {
  console.log("Home");
  aTabHome.classList.add("current-tab");
  aTabMenu.classList.remove("current-tab");
  aTabContact.classList.remove("current-tab");
})

aTabMenu.addEventListener("click", () => {
  console.log("Menu");
  aTabHome.classList.remove("current-tab");
  aTabMenu.classList.add("current-tab");
  aTabContact.classList.remove("current-tab");
})


aTabContact.addEventListener("click", () => {
  console.log("Contact");
  aTabHome.classList.remove("current-tab");
  aTabMenu.classList.remove("current-tab");
  aTabContact.classList.add("current-tab");
})

containerContent.appendChild(navTabs);
containerContent.appendChild(divHome);
