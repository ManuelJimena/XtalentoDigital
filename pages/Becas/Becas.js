import "./Becas.css";
import { cleanPage } from "../../utils/cleanPage";
export const Becas = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div class="treasure">
    <div class="treasure-animation">
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_W2mq7z.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
  </div>
  
  <h2>
¡Enhorabuena, has encontrado un tesoro!
  </h2>
  </div>
`;
};