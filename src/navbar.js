const navTabs = document.createElement("nav");
navTabs.classList.add("tabs");
const ulTabs = document.createElement("ul");

const liTabHome = document.createElement("li");
const aTabHome = document.createElement("a");
aTabHome.setAttribute("href", "#");
aTabHome.textContent = "Home";
aTabHome.classList.add("current-tab");
liTabHome.appendChild(aTabHome);

const liTabMenu = document.createElement("li");
const aTabMenu = document.createElement("a");
aTabMenu.setAttribute("href", "#");
aTabMenu.textContent = "Menu";
liTabMenu.appendChild(aTabMenu);

const liTabContact = document.createElement("li");
const aTabContact = document.createElement("a");
aTabContact.setAttribute("href", "#");
aTabContact.textContent = "Contact";
liTabContact.appendChild(aTabContact);

ulTabs.appendChild(liTabHome);
ulTabs.appendChild(liTabMenu);
ulTabs.appendChild(liTabContact);

navTabs.appendChild(ulTabs);

export {navTabs, aTabHome, aTabMenu, aTabContact};
