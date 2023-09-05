import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";
export const Contact = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span></h2>

        <form action="https://formspree.io/f/mleydvze" method="POST">
  <div class="input-box">
    <input type="text" name="Full Name" placeholder="Full Name">
    <input type="email" name="Email Address" placeholder="Email Address">
  </div>
  <div class="input-box">
    <input type="tel" name="Mobile Number" placeholder="Mobile Number">
    <input type="text" name="Email Subject" placeholder="Email Subject">
  </div>
  <textarea name="Message" cols="30" rows="10" placeholder="Your Message"></textarea>
  <input type="submit" value="Send Message" class="btn">
</form>
    </section>`;
};