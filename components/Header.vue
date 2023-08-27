<template>
<div class="bg-[#6f42c1] ">
  <div class="h-[4rem] relative flex items-center px-2 mx-auto">
    <div class="w-full flex  justify-between">
      <h1 class="text-white self-center text-2xl">Q2H</h1>
      <button v-if="!authenticated" @click="showLoginModal = true" class="menu-button">Connexion <span><LucideLogIn class="inline" :size="16"/></span> </button>
      <div v-else>
        <button class="menu-button">{{infos.identifiant}} <span><LucideUser class="inline" :size="16"/></span> </button>
        <button @click="logUserOut" class="menu-button"><span><LucideLogOut class="inline"/>Déconnexion</span></button>

      </div>
    </div>
  </div>
  <Modal v-if="showLoginModal" @close="showLoginModal = false">
    <template v-slot:content>
      <Login @success="showLoginModal = false"/>
    </template>
  </Modal>
</div>
</template>
<script setup lang="ts">
const showLoginModal = ref(false)
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const router = useRouter();


const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, infos} = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push('/login');
};
</script>
