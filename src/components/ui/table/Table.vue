<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    bordered?: boolean
  }>(),
  { bordered: true },
)
</script>

<template>
  <table
    :class="
      cn(
        'caption-bottom min-w-0 border-separate border-spacing-x-0 border-spacing-y-sp-sm text-sm',
        props.class,
      )
    "
  >
    <slot />
  </table>
</template>
