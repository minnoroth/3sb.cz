<script setup lang="ts">
import { withBase } from 'vitepress';
import type { Sponsor } from '../types/sponsor';

defineProps({
  data: { type: Array<Sponsor>, required: true },
});
</script>

<template>
  <p class="sponsor-container">
    <a
      v-for="sponsor of data"
      :key="sponsor.name"
      :href="sponsor.url"
      target="_blank"
      class="sponsor-item"
    >
      <img :src="withBase('sponsor/' + sponsor.logo)">
    </a>
  </p>
</template>

<style scoped>
.sponsor-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
}

.sponsor-item {
  display: flex;
  align-items: center;
  max-width: 33%;
  min-width: 180px;
  padding: 20px;
  box-sizing: border-box;
}

.sponsor-item > img {
  max-height: 50px;
  margin: auto;
}
</style>
