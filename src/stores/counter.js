import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Swal from 'sweetalert2'
import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    pokemons: [],
    pokemonById: [],
    myPokemons: [],
    selectedPokemon: null,
  }),

  mutations: {
    setSelectedPokemon(state, pokemon){
      state.selectedPokemon = pokemon
    },
    clearSelectedPokemon(state){
      state.selectedPokemon = null
    }
  },
  actions: {
    async getPokemons() {
      try {
        const pokemons = [];
        for (let i = 0; i < 5; i++) {
          let id = Math.ceil(Math.random() * 200);

          const data = await axios({
            method: "GET",
            url: BASE_URL + id,
          });

          pokemons.push(data.data);
        }
        this.pokemons = pokemons;
      } catch (error) {
        // next(error)
        console.log(error);
      }
    },

    async addPokemon(pokemonById) {
      try {

        // console.log(pokemonById.id);
        // this.myPokemons = [localStorage.getItem("myPokemons")]

        let newPokemon = {
          id: pokemonById.id,
          name: pokemonById.name,
          attack: pokemonById.attack,
          defense: pokemonById.defense,
          hp: pokemonById.hp
        }

        // console.log(this.myPokemons[0].length, "MY POKEMONS");
        // console.log(this.myPokemons, "MY POKEMONS");
        
        // if(this.myPokemons[0].length > 4){
        //   Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'You already have 5 Pokemons!',
        //     footer: '<a href="">Why do I have this issue?</a>'
        //   })
        // } else {
          this.myPokemons.push(newPokemon);
          localStorage.setItem("myPokemons", JSON.stringify(this.myPokemons));
          Swal.fire(
            'Success Add Pokemon!',
            'You clicked the button!',
            'success'
          )
        // }
      } catch (error) {
        console.log(error);
      }
    },
    // initialize() {
    //   const collection = JSON.parse(localStorage.getItem('myCollection')) || []
    //   this.collection = collection
    // },

    async fetchPokemonDetails(id) {
      try {
        const data = await axios({
          method: "GET",
          url: BASE_URL + id,
        });
        let pokemon = {
          id: data.data.id,
          name: data.data.name,
          image: data.data.sprites.other.home.front_default,
          hp: data.data.stats[0].base_stat,
          attack: data.data.stats[1].base_stat,
          defense: data.data.stats[2].base_stat,
        };
        this.pokemonById = pokemon;
        console.log(data.data);
        console.log(pokemon, "POKEMON");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
