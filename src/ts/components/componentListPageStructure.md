# Pokemon List Page components

## App

### Show data

- A Header component
- A PokemonsListWrapper

## Header

### Show data

- The Title "Pokemons List" inside an h1

## PokemonsListWrapper

### Show data

- A Pokemons Info component that is provided with:
  - The total number of existing pokemons
  - The number of pokemons showed in this page
- A PokemonsList component with a list of pokemons.
- A pagination component with two buttons components that are provided with:
  - Button 1:
    - "Previous page"
    - An action that shows previous page of Pokemons.
  - Button 2:
    - "Next page"
    - An action that shows next page of Pokemons.

## PokemonsInfo

## Show data

- A total count of Pokemons
- The count of pokemons showed on this page

## PokemonsList

### Show data

- A card for each Pokemon of the received list of Pokemons

## Pagination

### Show data

- A button to next page
- A button to previous page

### Get actions:

- Show next pokemons page foreward on button next page click
- Show previous porkemons page on button previous page click

## PokemonCard

### Show data

- The received pokemon's data:
  - Its name inside a heading
  - Its link to the detail page
  - Its picture with an alt
  - Its height
  - Its weight

## Button

### Show data

- The received text inside the button

### Get actions

- Call the received action on click
