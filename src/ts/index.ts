import getPokemonList from "./apiServices/getPokemonList.js";
import printPokemonCards from "./apiServices/printPokemonsCards.js";
import type { PokemonApiStructure } from "./apiServices/types.js";
import App from "./components/App/App.js";
import Header from "./components/Header/Header.js";
import Pagination from "./components/Pagination/Pagination.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.js";

const parentElement: HTMLElement = document.querySelector(".root");
const app = new App(parentElement);
app.render();

const headerParent: HTMLElement = document.querySelector(".app");
const header = new Header(headerParent, "Pokemon's List");
header.render();

await printPokemonCards(headerParent, 60, 60);

const pagination = new Pagination(headerParent);
await pagination.render();
