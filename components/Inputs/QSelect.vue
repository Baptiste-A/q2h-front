<script setup lang="ts">
import type { Ref } from 'vue'
import { useField } from 'vee-validate';
import {Sticker} from "lucide-vue-next";

const props = defineProps({
  name: String,
  placeholder: {type:String, default: "Sélectionnez une valeur"},
  valueDisplayed: {type: String},
  label: {type: String, required: true},
  items: {type: Array, required: false },
  modelValue: {type: String}
})
//@ts-ignore
const { value, errorMessage } = useField( () =>props.name);

const emit = defineEmits<{
  update:[modelValue:string]
}>()
const isSelected = ref(false)
const selectedItem : Ref<string | null> = ref(null)

function select(item: string){
  selectedItem.value = item
 value.value = item

}

</script>

<template >
  <div >
    <label >{{label}}</label>
    <div class="relative mt-2" @click="isSelected = !isSelected ">
      <button type="button" class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <span class="flex items-center" v-if="selectedItem !== null ">
        <span class="ml-3 block truncate">{{props.valueDisplayed !== undefined ? selectedItem[props.valueDisplayed] :selectedItem}}</span>
      </span>
        <span class="flex items-center" v-else>
        <span class="ml-3 block text-gray-400 truncate">{{ props.placeholder }}</span>
      </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
        </svg>
      </span>
      </button>

      <!--
        Select popover, show/hide based on select state.

        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <Transition >
        <ul v-if="isSelected" class="absolute z-10 mt-1 max-h-28 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
          <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"
          -->
          <li v-for="item of items"  @click="select(item)" class="text-gray-900 hover:text-white hover:bg-indigo-600 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
            <div class="flex items-center">
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="font-normal ml-3 block truncate">{{props.valueDisplayed !== undefined ? item[props.valueDisplayed] :item}}</span>
            </div>

            <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-indigo-600"
            -->
            <span v-if="selectedItem === item" class=" absolute inset-y-0 right-0 flex items-center pr-4">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
        </span>
          </li>

          <!-- More items... -->
        </ul>
      </Transition>
    </div>
  </div>

</template>

<style scoped>

</style>
