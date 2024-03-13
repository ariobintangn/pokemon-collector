<script>
import { defineComponent } from 'vue';
import { useCounterStore } from "../stores/counter";

export default defineComponent({
    name: 'PokemonModal',
    setup() {
        const { selectedPokemon, closeModal } = useCounterStore();
        return {
            selectedPokemon,
            closeModal,
        }
    }
});
</script>


<template>
    <div>
        <h1>testing!</h1>
    </div>
</template>

<style></style>