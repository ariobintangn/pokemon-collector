<script>
import { mapWritableState, mapActions, mapState } from 'pinia';
import { useCounterStore } from "../stores/counter"
// import Swal from "sweetalert2"
export default {
    data() {
        return {
            loading: false
        }
    },
    props: {
        pokemon: Object
    },
    // computed: {
    //     ...mapState(useCounterStore, ["pokemons"],),
    // },
    methods: {
        DetailPage() {
            console.log(this.pokemon.id);
            this.$router.push(`pokemon/${this.pokemon.id}`)
        },
        Capitalize(word) {
            return (

                word.charAt(0).toUpperCase() + word.slice(1)
            )
        },
        triggerLoading() {
            // Set loading to true when the detail page is being loaded
            this.loading = true;

            // Simulate loading for 2 seconds
            setTimeout(() => {
                this.loading = false; // Hide the loading overlay
                // Navigate to detail page or perform other actions here
            }, 1500);
        }
    },
    mounted() {
        this.triggerLoading()
    },
    computed: {
        typeClass() {
            const typeName = this.pokemon.types[0].type.name;
            return {
                'bg-real-navy': typeName === 'normal',
                'bg-rose-800': typeName === 'dragon',
                'bg-purple-800': typeName === 'poison',
                'bg-fuchsia-900': typeName === 'psychic',
                'bg-orange-600': typeName === 'fire',
                'bg-red-400': typeName === 'fighting',
                'bg-pink-500': typeName === 'fairy',
                'bg-amber-800': typeName === 'ground',
                'bg-green-600': typeName === 'grass' || typeName === 'bug',
                'bg-blue-500': typeName === 'water',
                'bg-blue-300': typeName === 'ice',
                'bg-yellow-500': typeName === 'electric',
                'bg-gray-600': typeName === 'rock',
                'bg-gray-800': typeName === 'dark',
            };
        },
        pokemonType() {
            const classType = this.pokemon.types[0].type.name;
            return {
                'bg-water': classType === 'water',
                'bg-fire': classType === 'fire',
                'bg-grass': classType === 'grass',
                'bg-bug': classType === 'bug',
                'bg-psychic': classType === 'psychic',
                'bg-dragon': classType === 'dragon',
                'bg-rock': classType === 'rock',
            };
        }
    }
}
</script>

<template>
    <div class="border-[18px] rounded-2xl border-real-navy  duration-200 ease-in-out hover:scale-105 max-w-[300px] relative"
        @click="DetailPage()">
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
            <!-- Replace 'loading.gif' with the path to your loading GIF -->
            <img src="@/assets/loading.gif" alt="Loading" class="w-16 h-16" />
        </div>
        <div :class="pokemonType">
            <img :src="pokemon.sprites.other.home.front_default" alt="Card image cap">
        </div>
        <div class=" p-4 pb-6 text-real-black bg-real-yellow/70 flex flex-col gap-6">
            <div class="flex flex-row justify-between items-center">
                <p class="font-bold text-2xl">{{ Capitalize(pokemon.name) }}</p>
                <div :class="typeClass" class="p-2 px-3 text-real-white font-semibold rounded-lg">
                    {{ pokemon.types[0].type.name }}
                </div>
            </div>

            <div class="flex flex-row flex-wrap gap-3 text-xs">
                <div class="p-1 px-2 bg-real-white rounded-lg">
                    <strong>
                        HP
                    </strong>
                    {{ pokemon.stats[0].base_stat }}
                </div>
                <div class="p-1 px-2 bg-real-white rounded-lg">
                    <strong>
                        Attack
                    </strong>
                    {{ pokemon.stats[1].base_stat }}
                </div>
                <div class="p-1 px-2 bg-real-white rounded-lg">
                    <strong>
                        Defense
                    </strong>
                    {{ pokemon.stats[2].base_stat }}
                </div>
                <div class="p-1 px-2 bg-real-white rounded-lg">
                    <strong>
                        Type
                    </strong>
                    {{ pokemon.types[0].type.name }}
                </div>

            </div>
        </div>
    </div>
</template>

<style>

</style>
