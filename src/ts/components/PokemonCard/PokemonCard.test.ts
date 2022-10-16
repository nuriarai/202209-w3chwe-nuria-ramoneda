import type {
  PokemonsStructure,
  PokemonStructure,
} from "../../apiServices/types.js";
import PokemonCard from "./PokemonCard";

let screen: HTMLElement;

beforeEach(() => {
  screen = document.createElement("div");
});

describe("Given a Pokemon component", () => {
  describe("When it's rendered with Pikachu data", () => {
    const pokemon: PokemonStructure = {
      abilities: [],
      baseExperience: 7,
      height: 9,
      id: 2,
      name: "Pikachu",
      order: 2,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      weight: 6,
    };

    test("Then it should show the name of Pikachu inside a h2", () => {
      const pokemonCard = new PokemonCard(screen, pokemon);
      pokemonCard.render();

      const title = pokemonCard.domElement.querySelector("h2");

      expect(title.textContent).toBe(pokemon.name);
    });
  });
});
