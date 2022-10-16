import App from "./components/App/App.js";

const parentElement: HTMLElement = document.querySelector(".root");
const app = new App(parentElement);
await app.render();
