import "./NotFound.css";

const template = () => {
  return `
  <section id="not-found">
    <div id="title">404 Error Page Not Found</div>
    <div class="circles">
      <p>404<br>
       <small>PAGE NOT FOUND</small>
      </p>
      <span class="circle big"></span>
      <span class="circle med"></span>
      <span class="circle small"></span>
    </div>
  </section>
</div>
  `;
};

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;