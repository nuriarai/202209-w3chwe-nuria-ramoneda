import getPokemonList from "./apiServices/getPokemonList.js";
import type {
  PokemonsStructure,
  PokemonStructure,
} from "./apiServices/types.js";
import App from "./components/App/App.js";

const pokemons: PokemonsStructure = await getPokemonList(10, 5);

const parentElement: HTMLElement = document.querySelector(".root");
const app = new App(parentElement);
app.render();
