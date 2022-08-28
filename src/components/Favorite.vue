<script setup>
defineProps({
  f: Object,
})

const onFavoriteClick = (favorite) => {
  window.open(favorite.address)
}
</script>

<template>
  <div @click="onFavoriteClick(f)" :title="f.desc" class="prose h-40 shadow-xl dark:shadow-black rounded-lg p-4 flex flex-col justify-center items-center cursor-pointer transition transform hover:scale-105">{{ f.name }}</div>
</template>