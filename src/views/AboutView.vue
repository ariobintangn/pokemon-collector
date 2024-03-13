<template>
  <h1>This is an about page</h1>
  <router-link :to="{ name: 'pokemon' }">
    list of pokemon
  </router-link>

  <div class="d-flex flex-row mb-3">
    <div class="p-2" style="background-color:aqua">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
  <div class="d-flex flex-row-reverse">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
