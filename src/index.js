import './css/normalize.css';
import './css/skeleton.css';
import './css/styles.css';

import {navTabs, divHero, aTabHome, aTabMenu, aTabContact} from './home.js';

const containerContent = document.querySelector("#content");

aTabHome.addEventListener("click", () => {
  console.log("Home");
})

containerContent.appendChild(navTabs);
containerContent.appendChild(divHero);
