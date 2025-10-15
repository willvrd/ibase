<script setup lang="ts">

import { useLazyAsyncData } from '#imports'

import {ibaseCategoryRepository} from '#ibase/utils/repository'
import type {Category} from "#ibase/types/category";

const {data: categories} = useLazyAsyncData<Category[]>(
  'categories:index',
  () => ibaseCategoryRepository.index({
    include: 'translations',
  }).then(r => r.data),
  {server: false, default: () => []} //TODO: Ojo con esto del server
)

</script>

<template>
  <h4 class="text-center text-3xl font-bold mb-6">Categorias desde FETCH</h4>
  <ul class="max-w-md mx-auto bg-white rounded-lg shadow divide-y divide-gray-200">

    <li v-for="cat in categories" :key="cat.id" class="px-6 py-4 hover:bg-gray-50 transition-colors flex flex-col gap-1">
      <span class="text-lg font-semibold text-gray-800">{{ cat.title }}</span>
      <span class="text-sm text-gray-500">{{ cat.description }}</span>
    </li>
  </ul>
</template>

