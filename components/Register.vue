<script setup lang="ts">
import * as yup from 'yup';
import {useForm} from "vee-validate";
const sexes = ['Homme', 'Femme']

const schema = yup.object({
    identifiant: yup.string().required("Un identifiant est requis"),
    password: yup.string().required("Mot de passe requis"),
    passwordConfirmation: yup.string().required("Confirmation requise").oneOf([yup.ref('password')], "les mots de passe ne correspondent pas"),
    nom: yup.string().required("Nom est requis"),
    prenom: yup.string().required("Prénom est requis"),
    sexe: yup.string().required("Prénom est requis").oneOf(sexes),
    licence: yup.string().required("Licence requise").matches(/\d+/, {message: "Ne peut contenir que des chiffres"}),
    date_naissance: yup.date().required("Date de naissance requise"),
  })
const {values,meta,  defineInputBinds, handleSubmit, errors} = useForm({validationSchema : schema})
const identifiant = defineInputBinds('identifiant');
const password = defineInputBinds('password');
const passwordConfirmation = defineInputBinds('passwordConfirmation');
const nom = defineInputBinds('nom');
const prenom = defineInputBinds('prenom');
const sexe = defineInputBinds('sexe')
const licence = defineInputBinds('licence')
const date_naissance = defineInputBinds("date_naissance")


const registrationMessage = ref('')
const registrationOk = ref(false)
const tryRegistration = ref(false)

const submit = handleSubmit(async values =>{
  const r  = await useApi('/register', { method: 'POST',
    body: {
      identifiant: values.identifiant,
      password: values.password, nom: values.nom,
      prenom: values.prenom,
      sexe: values.sexe,
      licence: values.licence,
      date_naissance: values.date_naissance,
  }})
  if (r.status.value === "success"){
    registrationOk.value = true
  }
  tryRegistration.value = true

}, )
</script>

<template>
  <Transition>
    <Alert v-if="tryRegistration" :type="registrationOk ? 'success' : 'danger'">{{registrationMessage.length > 0 ? registrationMessage : "Enregistrement réussi"}}</Alert>

  </Transition>
  <h1 class="text-2xl"> Création d'un compte</h1>
  <form @submit="submit">
    <div class="mb-2">
      <label for="login">Identifiant</label>
      <input type="text" v-bind="identifiant" class="form-input ">
      <Transition name="collapse">
        <div class="text-red-600" v-if="errors.identifiant != undefined">{{errors.identifiant}}</div>
      </Transition>

    </div>

    <div class="mb-2">
      <label for="login">Mot de passe</label>
      <input type="password" v-bind="password" class="form-input ">
      <Transition name="collapse">
        <div class="text-red-600" v-if="errors.password != undefined">{{errors.password}}</div>
      </Transition>
    </div>

    <div class="mb-2">
      <label for="login">Confirmation du mot de passe</label>
      <input type="password" v-bind="passwordConfirmation" class="form-input ">
      <Transition name="collapse">
        <div class="text-red-600" v-if="errors.passwordConfirmation != undefined">{{errors.passwordConfirmation}}</div>
      </Transition>
    </div>

    <div class="mb-2">
      <label >Nom</label>
      <input type="text" v-bind="nom" class="form-input ">
      <Transition name="collapse">
        <div class="text-red-600" v-if="errors.nom != undefined">{{errors.nom}}</div>
      </Transition>
    </div>

    <div class="mb-2">
      <label >Prénom</label>
      <input type="text" v-bind="prenom" class="form-input ">
      <Transition name="collapse">
        <div class="text-red-600" v-if="errors.prenom != undefined">{{errors.prenom}}</div>
      </Transition>
    </div>


    <InputsQSelect name="sexe" label="Sexe" :items="sexes" class="mb-2"/>

    <div class="mb-2">
      <label >Numéro de licence</label>
      <input type="text" v-bind="licence" class="form-input ">
      <Transition name="collapse">
        <div class="text-red-600" v-if="errors.licence!= undefined">{{errors.licence}}</div>
      </Transition>
    </div>
    <div class="mb-2">
      <label >Date de naissance</label>
      <input type="date" v-bind="date_naissance" class="form-input ">
      <Transition name="collapse">
        <div class="text-red-600" v-if="errors.date_naissance!= undefined">{{errors.date_naissance}}</div>
      </Transition>
    </div>
    <div class="flex w-full justify-between">
      <button class="btn-secondary" @click="$emit('backLogin')">Se connecter</button>
      <button class="btn-primary" :disabled="!meta.touched">S'enregistrer</button>
    </div>



  </form>

</template>

<style scoped>

</style>
