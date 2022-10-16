import getPokemonList from "./apiServices/getPokemonList.js";
import printPokemonCards from "./apiServices/printPokemonsCards.js";
import type {
  PokemonApiStructure,
  PokemonsApiStructure,
  PokemonStructure,
} from "./apiServices/types.js";
import App from "./components/App/App.js";
import Header from "./components/Header/Header.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.js";

const parentElement: HTMLElement = document.querySelector(".root");
const app = new App(parentElement);
app.render();

const headerParent: HTMLElement = document.querySelector(".app");
const header = new Header(headerParent, "Pokemon's List");
header.render();

const pokemon: PokemonApiStructure = {
  ["base_experience"]: 7,
  height: 9,
  id: 25,
  name: "Pikachu",
  sprites: {
    ["front_default"]:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  weight: 6,
};
const pokemonCardParent: HTMLElement = document.querySelector(".app");
const pokemonCard = new PokemonCard(pokemonCardParent, pokemon);
pokemonCard.render();

await printPokemonCards(pokemonCardParent, 100, 100);
