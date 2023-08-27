<script setup lang="ts">
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';


const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const emit = defineEmits(['success'])
const { authenticated } = storeToRefs(useAuthStore());
const mode = ref('login')
const user = ref({
  identifiant: '',
  password: '',
});

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    emit("success")
  }
}
</script>

<template>
<div>
  <div v-if="mode === 'login'">
    <form @submit.prevent="login">
      <h1 class="text-2xl mb-4"> Connexion</h1>
      <label for="login">Identifiant</label>
      <input type="text" v-model="user.identifiant" class="form-input mb-8">
      <label for="login">Mot de passe</label>
      <input type="password" v-model="user.password" class="form-input">
      <a href="#" @click="mode = 'register'" class="hover:text-blue-600">Pas encore de compte ? Crées-en un</a>
      <div class="flex w-full justify-end">
        <button class="btn-primary" >Se connecter</button>
      </div>
    </form>

  </div>
  <div v-else>
    <Register @backLogin="mode = 'login'"/>
  </div>

</div>
</template>

<style scoped>

</style>
