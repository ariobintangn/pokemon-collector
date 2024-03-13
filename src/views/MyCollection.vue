<script>
export default {
    data() {
        return {
            collectedPokemon: []
        }
    },
    methods: {
        addPokemon(pokemon) {
            this.collectedPokemon.push(pokemon);
            localStorage.setItem('collectedPokemon', JSON.stringify(this.collectedPokemon));
        }
    },
    mounted(){
        const storedPokemon = localStorage.getItem('collectedPokemon');
        if(storedPokemon){
            this.collectedPokemon = JSON.parse(storedPokemon);
        }
    }
}
</script>

<template>
    
</template>