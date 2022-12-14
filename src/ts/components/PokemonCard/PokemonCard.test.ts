import type { PokemonApiStructure } from "../../apiServices/types.js";
import PokemonCard from "./PokemonCard";

let screen: HTMLElement;

beforeEach(() => {
  screen = document.createElement("div");
});

describe("Given a Pokemon component", () => {
  describe("When it's rendered with Pikachu data", () => {
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

    test("Then it should show the name of Pikachu inside a h2", () => {
      const pokemonCard = new PokemonCard(screen, pokemon);
      pokemonCard.render();

      const title = pokemonCard.domElement.querySelector("h2");

      expect(title.textContent).toBe(pokemon.name);
    });

    test("Then it should show the text 'Experience: 7'", () => {
      const pokemonCard = new PokemonCard(screen, pokemon);
      pokemonCard.render();

      const experienceText = `Experience: ${pokemon.base_experience}`;

      expect(screen.textContent).toContain(experienceText);
    });

    test("Then it should show the text 'Height: 9", () => {
      const pokemonCard = new PokemonCard(screen, pokemon);
      pokemonCard.render();

      const heightText = `Height: ${pokemon.height}`;

      expect(screen.textContent).toContain(heightText);
    });

    test("Then it shoud show the image of Pikachu and the alt text with pokemon name", () => {
      const pokemonCard = new PokemonCard(screen, pokemon);
      pokemonCard.render();

      const image = screen.querySelector("img");

      expect(image.src).toBe(pokemon.sprites.front_default);
      expect(image.alt).toBe(pokemon.name);
    });
  });
});
