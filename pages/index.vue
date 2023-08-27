<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="">

    <!-- bandeau violet -->
    <div class="p-2 text-center w-full bg-primary">
      <h1 class="sm:text-8xl text-4xl mt-3 text-light" id="titre">Quilles2Huit<span class="text-black">.fr</span></h1>
      <div class="mx-auto lead text-xl text-light" id="center">
        Le futur des quilles de huit. Dès à présent.

        <br />
      </div>
    </div>

    <!-- blocs de présentation -->
    <div class="lg:my-12 lg:mx-20 m-4">

      <!-- bloc 1 -->
      <div class="border rounded lg:flex mb-4">
        <div class="lg:w-[20%] lg:h-[20%] shrink-0">
          <img src="favicon.ico" class="rounded w-full">
        </div>
        <div class="p-4">
          <h2 class="text-3xl pb-2">Présentation</h2>
          <p class="text-lg">
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

      <!-- bloc 2 -->
      <div class="border rounded lg:flex mb-4">
        <div class="lg:w-[20%] lg:h-[20%] shrink-0">
          <img src="presCarton.png" class="rounded w-full">
        </div>
        <div class="p-4">
          <h4 class="text-3xl pb-2">Page carton</h4>
          <p class="text-lg">La page carton permet aux joueurs de <span class="font-bold">renseigner leurs scores</span> durant la partie, et ainsi émuler un carton.
          <br/>
          A la fin de son <span class="font-bold">tour</span>, le joueur entre son <span class="font-bold">score</span> dans la <span class="font-bold">case</span> prévue à cet effet,
          puis il clique sur le <span class="font-bold">bouton "valider" vert</span> afin de valider et soumettre son score.
          <br/>
          <br/>

          Une fois rentré, un <span class="font-bold">score</span> peut être modifié en <span class="font-bold">cliquant</span> simplement dessus.
          <br/>
          <br/>

          A la fin de la partie, <span class="font-bold">2 choix</span> sont possibles : <br/>
          - <span class="font-bold">Terminer</span> : <span class="font-bold">sauvegarde</span> de la partie, mise à jour des <span class="font-bold">statistiques</span> et renvoi à un <span class="font-bold">carton vierge</span>.<br/>
          - <span class="font-bold">Partie suivante</span> : <span class="font-bold">sauvegarde</span> de la partie, mise à jour des <span class="font-bold">statistiques</span> et renvoi au <span class="font-bold">carton pré-rempli</span> pour la partie suivante.
          <br/>
          <br/>

          Une fois <span class="font-bold">commencé</span>, un <span class="font-bold">carton</span> peut être <span class="font-bold">continué</span> sur <span class="font-bold">n'importe quel appareil connecté au compte de la personne l'ayant créé</span>. <br/>
          Si, pour une raison ou pour une autre, le carton doit être <span class="font-bold">annulé</span>, en bas de la page se trouve un bouton <span class="font-bold">"Abandonner le carton en cours"</span>. <br/>
          Le carton sera <span class="font-bold">supprimé définitivement</span> et ne comptera pas dans les <span class="font-bold">statistiques</span>.
          <br/>
          <br/>

          Lors de la <span class="font-bold">création du carton</span>, <span class="font-bold">2 modes</span> sont au choix : <br/>
          - <span class="font-bold">Entrainement</span> : Peu d'informations sont demandées, le nombre de joueur est limité à 6, les scores ne sont pas comptabilisés dans les statistiques.<br/>
          - <span class="font-bold">Partie officielle</span> : Des renseignements sur le terrain, le jeu et les horaires sont requis, le nombre de joueur est fixé à 4, les scores sont comptabilisés dans les statistiques.<br/>
          </p>
         </div>
      </div>

      <!-- bloc 3 -->
      <div class="border rounded lg:flex mb-4">
        <div class="lg:w-[20%] lg:h-[20%] shrink-0">
          <img src="presProfil.png" class="rounded w-full">
        </div>
        <div class="p-4">
          <h4 class="text-3xl pb-2">Page profil</h4>
          <p class="text-lg">
          La page <span class="font-bold">profil</span> permet de <span class="font-bold">consulter ou modifier</span> ses <span class="font-bold">informations personnelles</span>, consulter ses <span class="font-bold">statistques de la saison ou des saisons précédentes</span> et de gérer son <span class="font-bold">équipe</span>.
          <br/>
          <br/>

          En haut de la page, se situent <span class="font-bold">3 onglets</span> : <br/>
          - <span class="font-bold">Profil</span> : Pour modifier ses <span class="font-bold">informations personnelles</span>, simplement <span class="font-bold">remplir</span> le champ puis <span class="font-bold">cliquer autre part</span>. Pour <span class="font-bold">changer son mot de passe</span>, le bouton <span class="font-bold">"Changer mon mot de passe"</span> en bas de la page est prévu à cet effet.<br/>
          <br/>
          - <span class="font-bold">Statistiques</span> : En haut de la page, se trouve un sélecteur pour <span class="font-bold">choisir une saison</span>. Par défaut, il sera réglé sur la <span class="font-bold">saison en cours</span>. <br/>
          Dans cet onglet, se trouvent <span class="font-bold">2 sous onglets</span> : <br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp - <span class="font-bold">Statistiques</span> : C'est ici que toutes les <span class="font-bold">statistiques</span> sont affichées. Pour certaines, il y a un <span class="font-bold">indicateur</span> qui montre si cette statistique augmente ou baisse.<br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp - <span class="font-bold">Parties</span> : Toutes vos <span class="font-bold">parties</span> sont répertoriées ici. Vous pouvez les <span class="font-bold">filtrer</span> pour affiner les résultats à l'aide du bouton <span class="font-bold">"filtrer"</span>.<br/>
          <br/>
          - <span class="font-bold">Equipe</span> : C'est ici qu'une <span class="font-bold">équipe</span> peut être <span class="font-bold">créée et/ou gérée</span>. Si une équipe est créée, il sera proposé au joueur de <span class="font-bold">jouer avec son équipe</span> lors de la <span class="font-bold">création d'un carton</span>. Cela aura pour effet de <span class="font-bold">remplir automatiquement</span> tous les joueurs (même les remplaçants, s'il y en a). Une fois dans une équipe, il est possible de : <br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp - <span class="font-bold">Ajouter des remplaçants</span> à l'aide du bouton "+". <br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp - <span class="font-bold">Effectuer des changements</span> entre les titulaires et les remplaçants. <br/>
          </p>
         </div>
      </div>
    </div>

  </div>
</template>
