import {Home} from "../pages/Home/Home";
import {Xtd} from "../pages/Xtd/Xtd";
import {Cursos} from "../pages/Cursos/Cursos";
import {Becas} from "../pages/Becas/Becas";
import {Blog} from "../pages/Blog/Blog";
import {Alumni} from "../pages/Alumni/Alumni";
import {Colaboradores} from "../pages/Colaboradores/Colaboradores";
import NotFound from "../pages/NotFound/NotFound";

const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/xtd",
      component: Xtd,
    },
    {
      path: "/cursos",
      component: Cursos,
    },
    {
      path: "/becas",
      component: Becas,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/alumni",
      component: Alumni,
    },
    {
      path: "/colaboradores",
      component: Colaboradores,
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