<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tbody
    :class="cn('bg-(--table-row-bg-color) [&_tr:last-child]:border-0', 'table-body', props.class)"
  >
    <slot />
  </tbody>
</template>

<style></style>
