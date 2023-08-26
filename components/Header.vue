<template>
<div class="bg-primary">
  <div class="h-[4rem] relative flex items-center px-2 mx-auto">
    <div class="w-full flex px-2 justify-between">
      <h1 class="text-white self-center text-2xl">Q2H</h1>
      <button @click="showLoginModal = true" class="btn-success">Connexion<span><LucideLogIn class="inline ms-1" :size="16"/></span> </button>
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
