<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '../router/index';
import type { RouterLink } from '@/router/list-routes';
const routeLink: RouterLink[] = pokemonRoute.children?.map(({name, path, props}) =>{
    
    console.log({name});
    return {
        name: name?.toString() ?? '',
        path: path,
        title: (props as {title: string}).title,
    }
}) || [];






</script>

<template lang="">
    <NavBar :links="routeLink" is-Secondary/>
    <div>        
        <RouterView />
    </div>
</template>

<style lang="">
    
</style>