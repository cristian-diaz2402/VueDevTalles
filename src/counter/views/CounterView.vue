<script setup lang="ts">

import {ref} from 'vue';
const counter = ref(5);

</script>

<template>
<h1>Counter View: {{ counter }}</h1>
<button @click="counter++">+1</button>
</template>