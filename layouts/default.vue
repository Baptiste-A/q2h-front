<template class="">
  <div class="flex flex-col min-h-screen">
    <Header />

      <slot />

   <Footer v-if="$route.name !== 'index'"/>
  </div>
</template>
<script setup lang="ts">
</script>
