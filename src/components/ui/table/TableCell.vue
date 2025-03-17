<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <td
    :class="
      cn(
        'group/cell whitespace-nowrap px-4 py-2 align-middle text-gray-900',
        '[&>[role=checkbox]]:translate-y-0.5',
        'first:rounded-s-lg last:rounded-e-lg',
        'h-sp-4xl text-component-2',
        'z-10 data-[pinned=right]:z-20 data-[pinned=left]:bg-(--table-row-bg-color) data-[pinned=right]:bg-[--table-row-bg-color]',
        props.class,
      )
    "
  >
    <slot />
  </td>
</template>
