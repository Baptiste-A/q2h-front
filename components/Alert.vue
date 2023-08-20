<script setup>
const alertClass = ref('alert-success')
const props = defineProps({
  type: String,
})
onMounted(e => {
  if (props.type === null){
    alertClass.value = "alert-success"
  }else {
    alertClass.value `alert-${props.type}`
  }
})
</script>

<template>
  <div class="w-full p-3" :class="{alertClass}">
    <slot></slot>
  </div>
</template>
