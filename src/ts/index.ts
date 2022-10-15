import getPokemonList from "./apiServices/getPokemonList.js";
import type {
  PokemonsStructure,
  PokemonStructure,
} from "./apiServices/types.js";
import App from "./components/App/App.js";
import Header from "./components/Header/Header.js";

const pokemons: PokemonsStructure = await getPokemonList(10, 5);

const parentElement: HTMLElement = document.querySelector(".root");
const app = new App(parentElement);
app.render();

const headerParent: HTMLElement = document.querySelector(".app");
const header = new Header(headerParent, "Pokemon List");
header.render();
