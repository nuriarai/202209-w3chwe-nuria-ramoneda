import Component from "../Component/Component.js";
import type { PokemonApiStructure } from "../../apiServices/types.js";

class PokemonCard extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemon: PokemonApiStructure
  ) {
    super(parentElement, "pokemon", "article");
  }

  render() {
    super.render();

    const {
      name,
      id,
      base_experience: experience,
      height,
      weight,
      sprites: { front_default: image },
    } = this.pokemon;

    this.domElement.innerHTML = `
      <img class="pokemon__image" src="${image}" alt="${name}">
      <div class="pokemon__data">
        <h2 class="pokemon__name"><a href="">${name}</a></h2>
        <span class="pokemon__base-experience">Experience: <span>${experience}</span></span>
        <span class="pokemon__height">Height: <span>${height}</span></span>
        <span class="pokemon__weight">Weight: <span>${weight}</span></span>
      </div>
    `;
  }
}

export default PokemonCard;
