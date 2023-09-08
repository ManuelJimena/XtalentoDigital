import "./Header.css";
export const Header = () => `
<div class="site-logo">
    <h1 class="banner">
        <a href="/">
        <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694195097/logo_rumexl_cveh8o.webp" alt="logo por talento digital" /></a>
     </h1> 
        </div> 
        <div class="socialnav"> 
        <ul>
        <li><a
            class="facebook"
            href="https://www.facebook.com/fundaciononce"
            target="_blank" aria-label="acceso a facebook"
          ><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a
        class="twitter"
        href="https://twitter.com/Fundacion_ONCE"
        target="_blank" aria-label="acceso a twitter">
        <i class="fa-brands fa-x-twitter"></i></a></li>
        <li><a
          class="youtube"
          href="https://www.youtube.com/user/FundacionONCE"
          target="_blank" aria-label="acceso a youtube
          ><i class="fa-brands fa-youtube"></i></a></li>
        <li><a
          class="instagram"
          href="https://www.instagram.com/fundaciononce/"
          target="_blank" aria-label="acceso a instagram"
          ><i class="fa-brands fa-instagram"></i></a></li>
        <li><a
          class="linkedin"
          href="https://es.linkedin.com/company/fundacion-once-inserta"
          target="_blank" aria-label="acceso a linkedin"
          ><i class="fa-brands fa-linkedin-in"></i></a></li>
        
        </div> 
        <div class="logoonce"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694195097/logo-gso2022_iyfxv0_hj9snk.webp" alt="Logo once" /></a></div>
</div>     

    <button id="menu-icon" aria-label="desplegar menú">
    <span></span>
    <span></span>
    <span></span></button>
    <nav class="navbar" id="navbar">
        <ul>
            <li><a href="/xtd" id="xtdlink">¿Qué es XTD?</a></li>
            <li><a href="/cursos" id="cursoslink">Cursos</a></li>
            <li><a href="/becas" id="becaslink">Becas</a></li>
            <li><a href="/blog" id="bloglink">Blog</a></li>
            <li><a href="/alumni" id="alumnilink">Alumni</a></li>
            <li><a href="/colaboradores" id="colaboradoreslink">Colaboradores</a></li>
            <li class="bx bx-moon" id="darkMode-icon"></li>
        </ul>
    </nav>
`;










