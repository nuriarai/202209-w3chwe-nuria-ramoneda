import Button from "../components/Button/Button.js";
import Component from "../components/Component/Component.js";
import PokemonCard from "../components/PokemonCard/PokemonCard.js";
import getPokemonList from "./getPokemonList.js";
import type { PokemonApiStructure } from "./types";

const printPokemonCards = async (
  parentElement: HTMLElement,
  limit: number,
  offset: number
) => {
  const pokemonList = await getPokemonList(10, 5);

  const mainElement = document.querySelector("main");
  if (mainElement !== null) {
    const pokemonsWrapper = new Component(mainElement, "pokemons", "div");
    pokemonsWrapper.render();
    parentElement = pokemonsWrapper.domElement;
  }

  pokemonList.results.forEach(async (pokemon) => {
    const response = await fetch(pokemon.url);

    const pokemonData = (await response.json()) as PokemonApiStructure;
    const pokemonCard = new PokemonCard(parentElement, pokemonData);
    pokemonCard.render();

    const pokemonActions: HTMLElement =
      pokemonCard.domElement.querySelector(".pokemon__actions");
    const button = new Button(
      pokemonActions,
      "button__action--add",
      "button",
      "Add to favs"
    );
    button.render();

    const buttonDelete = new Button(
      pokemonActions,
      "button__action--delete",
      "button",
      "Delete"
    );
    buttonDelete.render();
  });
};

export default printPokemonCards;
