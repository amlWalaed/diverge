<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    hoverable?: boolean
  }>(),
  { hoverable: false },
)
</script>

<template>
  <tr
    :class="
      cn(
        'group/row transition-colors data-[state=selected]:bg-(--table-row-bg-color) data-[state-selected]:(--table-row-bg-color)',
        hoverable && 'hover:bg-primary-100',
        props.class,
      )
    "
  >
    <slot />
  </tr>
</template>
