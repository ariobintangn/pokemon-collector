<script>
import { mapWritableState, mapActions } from "pinia";
import { onMounted } from "vue";
import { useCounterStore } from "../stores/counter";
import CardRow from "../components/CardRow.vue";
import modalPokemon from "../components/modalPokemon.vue";
export default {
    components: {
        CardRow,
        modalPokemon,
    },
    props: {
        pokemon: Object,
    },
    setup() {
        // const {setSelectedPokemon} = useCounterStore();

        const showModal = (pokemon) => {
            setSelectedPokemon(pokemon)
        };

        return { showModal }
    },
    methods: {
        ...mapActions(useCounterStore, ["getPokemons", "setSelectedPokemon"]),

    },
    computed: { ...mapWritableState(useCounterStore, ["pokemons", "index"]) },
    created() {
        console.log("<<< POKEMON DI LIST");
        this.getPokemons();
    },
};
</script>
<template>
    <div class="flex flex-col gap-4 lg:gap-12 xl:px-12 py-8">
        <h1 class="text-real-yellow2 font-extrabold text-4xl lg:text-6xl drop-shadow-2xl text-center" style="text-shadow: -2px -2px 0 #3b5ba7,  
                                                          3px -2px 0 #3b5ba7,  
                                                         3px 2px 0 #3b5ba7,  
                                                          -2px 2px 0 #3b5ba7;">Gotta Catch 'em All!</h1>
        <div class="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-4 lg:gap-8 xl:gap-12 items-center">
            <CardRow v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon" @click="showModal(pokemon)" />
        </div>
    </div>

</template>
<style></style>
