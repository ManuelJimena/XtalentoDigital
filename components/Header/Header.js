import "./Header.css";
export const Header = () => `
<div class="site-logo">
    <h1 class="banner">
        <a href="/">
        <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693931765/Xtalentodigital/logo_rumexl.png" alt="Inicio" /></a>
     </h1> 
        </div> 
        <div class="socialnav"> 
        <ul>
        <li><a
            class="facebook"
            href="https://www.facebook.com/fundaciononce"
            target="_blank"
          ><i class="bx bxl-facebook-circle" alt="Facebook icon"></i
        ></a></li>
        <li><a
          class="twitter"
          href="https://twitter.com/Fundacion_ONCE"
          target="_blank"
          ><i class="bx bxl-twitter" alt="Twiiter icon"></i
        ></a></li>
        <li><a
          class="youtube"
          href="https://www.youtube.com/user/FundacionONCE"
          target="_blank"
          ><i class="bx bxl-youtube" alt="YouTube icon"></i
        ></a></li>
        <li><a
          class="instagram"
          href="https://www.instagram.com/fundaciononce/"
          target="_blank"
          ><i class="bx bxl-instagram-alt" alt="Instagram icon"></i
        ></a></li>
        <li><a
          class="linkedin"
          href="https://es.linkedin.com/company/fundacion-once-inserta"
          target="_blank"
          ><i class="bx bxl-linkedin" alt="linkedin icon"></i
        ></a></li>
        
        </div> 
        <div class="logoonce"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694014784/Xtalentodigital/logo-gso2022_iyfxv0.png" alt="Logo once" /></a></div>
</div>     

    <button class="bx bx-menu" id="menu-icon"></button>
    <nav class="navbar" id="navbar">
        <ul>
            <li><a href="/xtd" id="xtdlink">¿Qué es XTD?</a></li>
            <li><a href="/cursos" id="cursoslink">Cursos</a></li>
            <li><a href="/becas" id="becaslink">Becas</a></li>
            <li><a href="/blog" id="bloglink">Blog</a></li>
            <li><a href="/alumni" id="alumnilink">Alumni</a></li>
            <li><a href="/colaboradores" id="colaboradoreslink">Colaboradores</a></li>
        </ul>
    </nav>
<div class="bx bx-moon" id="darkMode-icon"></div>
`;










