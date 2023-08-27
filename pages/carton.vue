<script setup lang="ts">
 const training = ref(false)
 const r = await useApi('/carton/categories')
 const categories = r.data
</script>

<template>
<div class="h-full p-1">
  <input class="" type="checkbox" v-model="training">
  <label class="ms-2">Entrainement</label>
  <Transition>
    <div v-if="training">
      <InputsQSelect value-displayed="nom" :items="categories" placeholder="Sélectionnez une catégorie" />
    </div>
    <div v-else>
      <div class=" rounded bg-warning text-center text-black p-3"> <LucideAlertCircle class="inline me-1"/>Les stats du mode entraînement ne sont pas comptabilisées</div>
      <InputsQSelect value-displayed="nom" :items="categories" placeholder="Sélectionnez une catégorie" />
    </div>
  </Transition>


</div>
</template>

<style scoped>

</style>
