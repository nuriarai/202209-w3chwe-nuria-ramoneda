import printPokemonCards from "../../apiServices/printPokemonsCards.js";
import Component from "../Component/Component.js";
import Header from "../Header/Header.js";
import Pagination from "../Pagination/Pagination.js";

class App extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "app", "div");
  }

  async render() {
    super.render();

    const header = new Header(this.domElement, "Pokemon's List");
    header.render();

    const main = new Component(this.domElement, "", "main");
    main.render();

    const mainElement = this.domElement.querySelector("main");
    const pagination = new Pagination(mainElement);
    await pagination.render();

    await printPokemonCards(mainElement, 60, 60);
  }
}

export default App;
