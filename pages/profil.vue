<script setup lang="ts">
    //const route = useRoute()
    const onglet = ref('profil')
</script>

<template>
    <div class="w-[35%] mx-auto">
        
        <input v-model="onglet"/>
        
        <div class="" id="nav">
            <div class="text-center bg-primary rounded my-2 p-2 text-light cursor-pointer" @click="onglet='profil'">Profil</div>
            <div class="text-center bg-primary rounded my-2 p-2 text-light cursor-pointer" @click="onglet='stat'">Statistiques</div>
            <div class="text-center bg-primary rounded my-2 p-2 text-light cursor-pointer" @click="onglet='equipe'">Équipe</div>
        </div>
        
        <div v-if="onglet=='profil'">PUTE</div>
        <div v-if="onglet=='stat'">NEGRO</div>
        <div v-if="onglet=='equipe'">CACA</div>
    </div>
</template>