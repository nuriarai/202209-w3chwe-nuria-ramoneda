import getPokemonList from "../../apiServices/getPokemonList.js";
import Component from "../Component/Component.js";

class Pagination extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "pagination", "div");
  }

  async render() {
    super.render();
    const limit = 60;
    const offset = 60;
    const pokemonList = await getPokemonList(limit, offset);
    const { count, next, previous } = pokemonList;
    const fromCount = 1;

    this.domElement.innerHTML = `
      <span>Showing ${fromCount} to ${offset} from ${count}</span>
    `;
  }
}

export default Pagination;
