<script>
import { onMounted, ref } from 'vue';
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Button from '../components/Button.vue'


const postData = ref({})

const getPost = async () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/35/')
        .then(response => response.json())
}
export default {
    data() {
        return {
            hpPerIcon: 20,
            attPerIcon: 20,
            defPerIcon: 20,
        }
    },
    components: { Button },
    computed: {

        ...mapWritableState(useCounterStore, ["pokemonById", "myPokemons"]),
        hpIcons() {
            const numIcons = Math.ceil(this.pokemonById.hp / this.hpPerIcon);
            return Array.from({ length: numIcons }, (_, i) => i);
        },
        attIcons() {
            const numIcons = Math.ceil(this.pokemonById.attack / this.attPerIcon);
            return Array.from({ length: numIcons }, (_, i) => i);
        },
        defIcons() {
            const numIcons = Math.ceil(this.pokemonById.defense / this.defPerIcon);
            return Array.from({ length: numIcons }, (_, i) => i);
        }
    },

    methods: {
        ...mapActions(useCounterStore, ["fetchPokemonDetails", "addPokemon"]),
        // addPokemon(pokemon) {
        //     this.$emit('addPokemon', pokemon);
        // }
    },

    created() {
        const id = this.$route.params.id
        this.fetchPokemonDetails(this.$route.params.id)
    },
    onMounted() {

    }

}

</script>
<template>
    <div class="container">
        <div>
            <h1>{{ this.pokemonById.name }}</h1>
            <!-- <img :src={postData.sprites.other.home.front_default} /> -->
            <img class="image" :src="this.pokemonById.image" />
        </div>
        <div class="details">
            <h3>HP: {{ this.pokemonById.hp }}
                <div class="icon" v-for="icon in hpIcons">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>

                </div>
            </h3>
            <h3>Attack: {{ this.pokemonById.attack }}
                <div class="icon" >

                    <svg v-for="icon in attIcons" fill="red" max-height="200px" max-width="200px" version="1.1" id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 57 57"
                        xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M57,0h-8.837L18.171,29.992l-4.076-4.076l-1.345-4.034c-0.22-0.663-0.857-1.065-1.55-0.98 c-0.693,0.085-1.214,0.63-1.268,1.327l-0.572,7.438l5.982,5.982L4.992,46H2.274C1.02,46,0,47.02,0,48.274v6.452 C0,55.98,1.02,57,2.274,57h6.452C9.98,57,11,55.98,11,54.726v-3.421l10-10l6.021,6.021l6.866-1.145 c0.685-0.113,1.182-0.677,1.21-1.37c0.028-0.693-0.422-1.295-1.096-1.464l-3.297-0.824l-4.043-4.043L57,8.489V0z M9,54.726 C9,54.877,8.877,55,8.726,55H2.274C2.123,55,2,54.877,2,54.726v-6.452C2,48.123,2.123,48,2.274,48h0.718h5.734 C8.877,48,9,48.123,9,48.274v5.031V54.726z M11,48.477v-0.203C11,47.02,9.98,46,8.726,46H7.82l8.938-8.938l1.417,1.417l1.411,1.411 L11,48.477z M30.942,44.645l-3.235,0.54l-5.293-5.293l0,0l-2.833-2.833l-8.155-8.155l0.292-3.796l0.63,1.89l4.41,4.41l0,0 l4.225,4.225l8.699,8.699L30.942,44.645z M25.247,37.066l-2.822-2.822l-2.839-2.839L48.991,2h4.243L23.829,31.406 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L55,3.062v4.592L25.247,37.066z">
                            </path>
                        </g>
                    </svg>


                </div>
            </h3>
            <h3>Defense: {{ this.pokemonById.defense }}
                <div class="icon">
                    <svg v-for="icon in defIcons" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.7056 1.29136L12.7045 1.29032L12.7023 1.28812L12.6989 1.28483C12.6972 1.28313 12.6966 1.28263 12.6966 1.28263L12.6978 1.28374C12.7004 1.28627 12.703 1.28881 12.7056 1.29136ZM11.3022 1.28374C11.3002 1.28552 11.2961 1.28933 11.2896 1.29508C11.2719 1.31064 11.237 1.34044 11.1829 1.38252C11.0748 1.46665 10.8893 1.60023 10.6105 1.76751C10.0531 2.10195 9.12034 2.57246 7.68377 3.05132C6.21419 3.54118 5.25494 3.77921 4.67888 3.89442C4.39127 3.95194 4.20126 3.97843 4.09269 3.99049C4.0385 3.99651 4.00499 3.9989 3.99011 3.99977C3.98708 3.99995 3.98335 4.00014 3.98335 4.00014C3.43875 4.00903 3 4.45328 3 5V12C3 15.4464 5.28175 18.2003 7.3415 20.0026C8.39238 20.9221 9.43854 21.6408 10.22 22.1292C10.7159 22.4392 11.2047 22.7454 11.7564 22.9286C11.9145 22.9811 12.0855 22.9811 12.2436 22.9286C12.7953 22.7454 13.2841 22.4392 13.78 22.1292C14.5615 21.6408 15.6076 20.9221 16.6585 20.0026C18.7183 18.2003 21 15.4464 21 12V5C21 4.45327 20.5613 4.00902 20.0166 4.00014C20.0166 4.00014 20.0129 3.99995 20.0099 3.99977C19.995 3.9989 19.9615 3.99651 19.9073 3.99049C19.7987 3.97843 19.6087 3.95194 19.3211 3.89442C18.7451 3.77921 17.7858 3.54118 16.3162 3.05132C14.8797 2.57246 13.9469 2.10195 13.3895 1.76751C13.1107 1.60023 12.9252 1.46665 12.8171 1.38252C12.763 1.34044 12.7281 1.31064 12.7105 1.29508C12.7039 1.28933 12.6998 1.28552 12.6978 1.28374C12.3097 0.905419 11.6903 0.905419 11.3022 1.28374ZM12 3.25517C11.8933 3.32603 11.7735 3.40211 11.6395 3.48249C10.9469 3.89805 9.87966 4.42754 8.31623 4.94868C6.78581 5.45882 5.74506 5.72079 5.07112 5.85558C5.04695 5.86041 5.02325 5.86509 5 5.8696V12C5 14.5536 6.71825 16.7997 8.6585 18.4974C9.60762 19.3279 10.5615 19.9842 11.28 20.4333C11.5633 20.6103 11.8084 20.7541 12 20.8628C12.1916 20.7541 12.4367 20.6103 12.72 20.4333C13.4385 19.9842 14.3924 19.3279 15.3415 18.4974C17.2817 16.7997 19 14.5536 19 12V5.8696C18.9768 5.86509 18.953 5.86041 18.9289 5.85558C18.2549 5.72079 17.2142 5.45882 15.6838 4.94868C14.1203 4.42754 13.0531 3.89805 12.3605 3.48249C12.2265 3.40211 12.1067 3.32603 12 3.25517Z"
                                fill="blue"></path>
                        </g>
                    </svg>
                </div>
            </h3>
        </div>
        <button class="button" @click.prevent="addPokemon(pokemonById)">Add to collection</button>
    </div>
    <h2>
        <router-link :to="{ name: 'pokemon' }">
            <svg style="max-width: 100px; color:grey" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

        </router-link>
    </h2>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;

}

.image {
    background-color: white;
    border-radius: 5%;
    margin: 1rem;
    padding: 2rem;
}

.icon {
    display: flex;
    flex-direction: row;
}

.details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
}
</style>