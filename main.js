import "./style.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { router, addLinkListeners } from './router/router';

const header = document.querySelector("header");
header.innerHTML = Header();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

router();
addLinkListeners();

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

const darkModeIcon = document.querySelector('#darkMode-icon');
const body = document.body;
const darkModeLocalStorageKey = 'darkMode';

const enableDarkMode = () => {
  darkModeIcon.classList.replace('fa-moon', 'fa-sun');
  body.classList.add('dark-mode');
  localStorage.setItem(darkModeLocalStorageKey, 'enabled');
};

const disableDarkMode = () => {
  darkModeIcon.classList.replace('fa-sun', 'fa-moon');
  body.classList.remove('dark-mode');
  localStorage.setItem(darkModeLocalStorageKey, 'disabled');
};

const currentMode = localStorage.getItem(darkModeLocalStorageKey);
currentMode === 'enabled' ? enableDarkMode() : disableDarkMode();

darkModeIcon.onclick = () => {
  body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
};

const button = document.querySelector('#menu-icon');
const nav = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.navbar a');

button.addEventListener('click', () => {
  nav.classList.toggle('activo');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('activo');
  });
});
