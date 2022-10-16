import App from "./components/App/App.js";
import Button from "./components/Button/Button.js";

const parentElement: HTMLElement = document.querySelector(".root");
const app = new App(parentElement);
await app.render();

const button = new Button(parentElement, "button__list", "button", "<<");
button.render();
