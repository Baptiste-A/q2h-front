<template>
<div class="bg-[#6f42c1] ">
  <div class="h-[4rem] relative flex items-center px-2 mx-auto">
    <div class="w-full flex  justify-between">
      <h1 class="text-white self-center text-2xl">Q2H</h1>
      <button @click="showLoginModal = true" class="menu-button">Connexion <span><LucideLogIn class="inline" :size="16"/></span> </button>
    </div>
  </div>
  <Modal v-if="showLoginModal" @close="showLoginModal = false">
    <template v-slot:content>
      <Login/>
    </template>
  </Modal>
</div>
</template>
<script setup lang="ts">
const showLoginModal = ref(false)
</script>
