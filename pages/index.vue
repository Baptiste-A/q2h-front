<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="h-full">

    <div class="w-full px-4 h-full flex flex-col justify-between">
      <div class="border rounded p-2">
        <h2 class="text-2xl">Présentation</h2>
        <p>
          Quilles2Huit.fr est un outil permettant aux joueurs de <a href="https://fr.wikipedia.org/wiki/Quilles_de_huit" target="_blank" class="text-blue-500 no-underline hover:underline">quilles de huit</a> de <span class="font-bold">suivre leur carrière en temps réel.</span>
          <br/>
          Cela comprend un carton virtuel, des statistiques en temps réel, une gestion d'équipe, ...
          Les différentes foncionnalités sont :
          <br/>
          - <span class="font-bold">Carton</span> : durant la partie, permet de renseigner ses scores.
          <br/>
          - <span class="font-bold">Profil</span> : modifications de ses infos (si erreur par exemple), consultation de ses statistiques et gestion de son équipe.
        </p>
      </div>
    </div>

  </div>
</template>
