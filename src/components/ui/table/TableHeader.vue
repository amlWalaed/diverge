<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <thead :class="cn('bg-primary-200 text-primary-900', props.class, 'table-header')">
    <slot />
  </thead>
</template>
<style></style>
