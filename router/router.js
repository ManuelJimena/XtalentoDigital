import {Home} from "../pages/Home/Home";
import {About} from "../pages/About/About";
import {Skills} from "../pages/Skills/Skills";
import {Contact} from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/skills",
      component: Skills,
    },    
    {
        path: "/contact",
        component: Contact,
      },
  ];
  
  export const router = () => {
    const path = window.location.pathname;
    const { component } = routes.find((route) => route.path === path) || {
      component: NotFound,
    };
    if (component) {
      component();
    }
  };
  
  
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);

export const addLinkListeners = () => {
    const menuLinks = document.querySelectorAll("nav a");
    menuLinks.forEach((link) => {
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      const href = link.getAttribute("href");
      history.pushState(null, null, href);
      router();
    });
  });
};