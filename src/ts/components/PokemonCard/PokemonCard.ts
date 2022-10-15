import Component from "../Component/Component.js";
import type { PokemonStructure } from "../../apiServices/types.js";

class PokemonCard extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemon: PokemonStructure
  ) {
    super(parentElement, "pokemon", "article");
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
      <img class="pokemon__image" src="${this.pokemon.image}" alt="${this.pokemon.name}">
      <div class="pokemon__data">
        <h2 class="pokemon__name"><a href="">${this.pokemon.name}</a></h2>
        <span class="pokemon__base-experience">Experience:<span>${this.pokemon.baseExperience}</span></span>
        <span class="pokemon__height">Height:<span>${this.pokemon.height}</span></span>
        <span class="pokemon__weight">Weight:<span>${this.pokemon.weight}</span></span>
      </div>
    `;
  }
}

export default PokemonCard;
