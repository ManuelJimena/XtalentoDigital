import "./NotFound.css";
const template = () => {
  return `
<section class="circles">
  <p>404<br>
    <small>PAGE NOT FOUND</small>
  </p>
  <span class="circle big"></span>
  <span class="circle med"></span>
  <span class="circle small"></span>
</section>`;
};

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;