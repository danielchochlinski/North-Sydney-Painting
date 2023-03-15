import "./ContactForm.module.css";
import FormMap from "./FormMap";
import FormInput from "./FormInput";

function ContactForm(props) {
  return (
    <div id="contact" className="container">
      <div className="intro">
        <h3>Contact Us</h3>
        <p>We are ready to help with all your painting and decorating needs.</p>
      </div>
      <div className="grid">
        <div className="class">
          <img src="images/icons/map.png" alt="map" />
          <h4>0487 556 397</h4>
          <p>73 Lower Bent St Neutral Bay NSW 2089 Australia</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?q=north%20sydney%20painting&oq=north+sydney+painting&aqs=edge..69i57j69i59j0i22i30j69i60l3j69i64.3797j0j1&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=APq-WBsW6RHzOWjwbEIWOuL4A9I0037mdA:1644417262868&rflfq=1&num=10&rldimm=13538309938954931654&lqi=ChVub3J0aCBzeWRuZXkgcGFpbnRpbmdIs7Pul9K2gIAIWiMQAhgAGAEYAiIVbm9ydGggc3lkbmV5IHBhaW50aW5nKgIIA5IBB3BhaW50ZXKqARAQASoMIghwYWludGluZygA&ved=2ahUKEwiI8MLW6_L1AhWGYMAKHUtcCUIQvS56BAhMEF0&rlst=f#rlfi=hd:;si:13538309938954931654,l,ChVub3J0aCBzeWRuZXkgcGFpbnRpbmdIs7Pul9K2gIAIWiMQAhgAGAEYAiIVbm9ydGggc3lkbmV5IHBhaW50aW5nKgIIA5IBB3BhaW50ZXKqARAQASoMIghwYWludGluZygA;mv:[[-33.830095,151.21540349999998],[-33.8428588,151.2055264]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:2"
          >
            <p>Find Us</p>
          </a>
        </div>
        <div className="class">
          <img src="images/icons/phone.png" alt="phone" />
          <h4>0487 556 397</h4>
          <p>Mon-Sun 24/7</p>
          <a href="tel:0487556397">
            <p>Call Us Now</p>
          </a>
        </div>
        <div className="class">
          <img src="images/icons/email.png" alt="email" />
          <h4>northsydneypaint@gmail.com</h4>
          <p>Mon-Sun 24/7</p>
          <a
            href="mailto: northsydneypaint@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Email Us</p>
          </a>
        </div>
      </div>
      <div className="contactUs">
        <div className="form">
          <FormInput />
        </div>
        <div className="map">
          <FormMap googleKey={props.googleKey} />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13256.71461188464!2d151.21293412866106!3d-33.83350309560993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afe2e1b787dd%3A0xbbe1bd29128c8dc6!2sNorth%20Sydney%20Painting!5e0!3m2!1sen!2spl!4v1678883614992!5m2!1sen!2spl"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
