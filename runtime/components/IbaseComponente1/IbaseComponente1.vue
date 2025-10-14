<script setup>
const props = defineProps({
  showText: {type: Boolean, default: false},
  // ...otras props...
})
const { t } = useI18n()
</script>

<template>
  <div class="p-5 m-5">
    <div v-if="showText" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-2">
        <p>{{t('ibase.componentBase1.componentWithParams')}}</p>
      </div>
      <p v-else class="mt-4 bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded">
       {{t('ibase.componentBase1.componentWithoutParams')}}
      </p>
  </div>
</template>
