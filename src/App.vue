<script setup>
import ThemeToggler from './components/ThemeToggler.vue'
import { useFavStore } from './store'
import FilterInput from './components/FilterInput.vue';
import Favorite from './components/Favorite.vue';

const favStore = useFavStore()
</script>

<template>
  <div class="w-full h22 fixed top-0 right-0 bg-$bg z10 shadow-md dark:shadow-black">
    <ThemeToggler/>
    <FilterInput/>
  </div>

  <div class="grid grid-cols-5 gap-6 at-lg:grid-cols-4 at-md:grid-cols-3 at-sm:grid-cols-2 lt-sm:grid-cols-1">
    <Favorite :f="f" v-for="f of favStore.favoritesFilter" />
  </div>
</template>
