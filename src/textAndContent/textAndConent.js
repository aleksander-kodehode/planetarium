import earth from "../img/earth.svg";
import jupiter from "../img/jupiter.svg";
import mars from "../img/mars.svg";
import mercury from "../img/mercury.svg";
import neptune from "../img/neptune.svg";
import saturn from "../img/saturn.svg";
import uranus from "../img/uranus.svg";
import venus from "../img/venus.svg";
import sun from "../img/sun.png";

//Object that contains images and text used across the site
export const TEXT_AND_CONTENT = {
  PLANET_INFO: {
    IMG: [uranus, neptune, jupiter, mars, mercury, saturn, earth, venus, sun],
    ALT: [
      "Uranus",
      "Neptune",
      "Jupiter",
      "Mars",
      "Mercury",
      "Saturn",
      "Earth",
      "Venus",
      "Sun",
    ],
  },
  NAVIGATION: {
    NAVIGATION_BAR: {
      PLANETARIUM: "Planetarium",
      MERCURY: "Mercury",
      VENUS: "Venus",
      EARTH: "Earth",
      MARS: "Mars",
      JUPITER: "Jupiter",
      SATURN: "Saturn",
      URANUS: "Uranus",
      NEPTUNE: "Neptune",
      CONTACT: "Contact",
    },
  },
  CONTACT_FORM: {
    INPUT_ONE: "Name",
    INPUT_TWO: "Email",
    INPUT_THREE: "Phone number",
    BTN_TEXT: "Send Message",
  },
};
