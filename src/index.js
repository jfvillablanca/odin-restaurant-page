import './css/normalize.css';
import './css/skeleton.css';
import './css/styles.css';

import {navTabs, aTabHome, aTabMenu, aTabContact} from './navbar.js';
import {divHome} from './home.js';
import {divMenu} from './menu.js';
import {divContact} from './contact.js';

const containerContent = document.querySelector("#content");
containerContent.appendChild(navTabs);
divHome.classList.add("current-tab");
aTabHome.classList.add("current-tab");
containerContent.appendChild(divHome);
containerContent.appendChild(divMenu);
containerContent.appendChild(divContact);

aTabHome.addEventListener("click", () => {
  aTabHome.classList.add("current-tab");
  divHome.classList.add("current-tab");

  aTabMenu.classList.remove("current-tab");
  divMenu.classList.remove("current-tab");

  aTabContact.classList.remove("current-tab");
  divContact.classList.remove("current-tab");
})

aTabMenu.addEventListener("click", () => {
  aTabHome.classList.remove("current-tab");
  divHome.classList.remove("current-tab");

  aTabMenu.classList.add("current-tab");
  divMenu.classList.add("current-tab");

  aTabContact.classList.remove("current-tab");
  divContact.classList.remove("current-tab");
})


aTabContact.addEventListener("click", () => {
  aTabHome.classList.remove("current-tab");
  divHome.classList.remove("current-tab");

  aTabMenu.classList.remove("current-tab");
  divMenu.classList.remove("current-tab");

  aTabContact.classList.add("current-tab");
  divContact.classList.add("current-tab");
})
