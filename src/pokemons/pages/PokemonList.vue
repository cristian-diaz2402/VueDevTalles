<script setup lang="ts">
import {ref} from 'vue';
import {getpokemons} from '../helpers/get-pokemons';
import  type {Pokemon} from '../interfaces/pokemon';
// const data = await getpokemons();

// const pokemons = ref<Pokemon[]>(data);

// getpokemons()
// .then((data) =>pokemons.value = data);



</script>

<template lang="">
    <div>
        <h1>pokemon list</h1>
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">
                {{pokemon.name}}
            </li>
        </ul>
    </div>
</template>

<style lang="">
    
</style>