import {/*computed*/ ref} from 'vue';
import { getpokemons } from "../helpers/get-pokemons"
import type { Pokemon } from "../interfaces";



export const usePokemons =() => {
    const pokemons = ref<Pokemon[]>([]); 
    const isLoading = ref(true);
    getpokemons()
    .then(data => {
        pokemons.value = data;
        isLoading.value = false;
    });
    
    return  {
        pokemons, 
        isLoading,
        // count: computed(()=> pokemons.value.length)
        count: pokemons.value.length,
    }
    
}