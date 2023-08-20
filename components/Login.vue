<script setup lang="ts">
const mode = ref('login')
</script>

<template>
<div>
  <div v-if="mode === 'login'">
    <h1 class="text-2xl mb-4"> Connexion</h1>
    <label for="login">Identifiant</label>
    <input type="text" class="form-input mb-8">
    <label for="login">Mot de passe</label>
    <input type="password" class="form-input">
    <a href="#" @click="mode = 'register'" class="hover:text-blue-600">Pas encore de compte ? Crées-en un</a>
    <div class="flex w-full justify-end">
      <button class="btn-primary" >Se connecter</button>
    </div>
  </div>
  <div v-else>
    <Register @backLogin="mode = 'login'"/>
  </div>

</div>
</template>

<style scoped>

</style>
