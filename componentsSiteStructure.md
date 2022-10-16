# Pokemon Site components

## App

### Show data

- A Header component
- A Nav component
- A PokemonsList component with a list of pokemons.
- A pagination component with two counters and two buttons components.

## Header

### Show data

- The Title received inside an h1

## PokemonsList

### Show data

- A card for each Pokemon of the received list of Pokemons

## Pagination

### Show data

- The total number of existing pokemons
- The number of pokemons showed in this page
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
  - Its experience
- A button to add the pokemon to favorites
- A button to delete the porkemon from favorites

## Button

### Show data

- The received text inside the button:
  - In pagination component:
    - Button 1:
      - "Previous page"
    - Button 2:
      - "Next page"
  - In pokemon component:
    - Button 1:
      - "Add to favs"
    - Buttons 2:
      - "Delete from favs"

### Get actions

- Call the received action on click:
- In pagination component:
  - Button 1 (previous page):
    - An action that shows previous page of Pokemons.
  - Button 2 (next page):
    - An action that shows next page of Pokemons.
- In pokemon component:
  - Button 1 (add to favs):
    - An action that add the current pokemon to the local list of pokemons
  - Buttons 2:
    - An action that delete the current pokemon from the local list of pokemons
