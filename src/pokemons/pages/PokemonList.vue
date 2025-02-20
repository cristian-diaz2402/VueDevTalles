<script setup lang="ts">
import pokemonApi from '../api/pokemonApi';
import type { PokemonListResponse } from '../interfaces/pokemons-list.response';
pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')
.then(resp => console.log(resp.data.results[0].name));
</script>

<template lang="">
    <div>
        <h2>pokemon list</h2>
    </div>
</template>

<style lang="">
    
</style>