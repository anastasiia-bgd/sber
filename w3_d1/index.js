import { Pokemon as RenamePoke } from './classes.js';
import mockedPokemons from './mockedPokemons.js';
import {fillPokemonCard} from './seeder.js'
const btn = document.querySelector('button');
const input= document.querySelector('input');

const pokemonsList = mockedPokemons.map((pokemon) => {
    const {
        name,
        abilities,
        base_experience: experience,
        sprites: { front_default: image },
    } = pokemon;
    // const { front_default: image } = sprites;
    // const abilitiesNames = abilities.map(el => el.ability.name);
    const abilitiesNames = abilities.map((el) => {
        const {
            ability: { name },
        } = el;
        return name;
    });
    return new RenamePoke(name, abilitiesNames, experience, image);
});
 
btn.addEventListener('click', (event) => {
    let random = pokemonsList[Math.floor(Math.random()*pokemonsList.length)];
    console.log(fillPokemonCard(random));
  });
  input.onchange = function() {
    alert(this.value)
  };