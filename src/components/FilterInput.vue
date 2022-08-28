<script setup>
import { useFavStore } from '../store'

const favStore = useFavStore()
</script>

<template>
  <input v-model="favStore.key" placeholder="🤔" class="prose p-3 fixed top-5 right-20 rounded-lg outline-none transition bg-gray-300 caret-purple-700 dark:bg-gray-900 focus:ring-2 focus:ring-purple-600">
</template>