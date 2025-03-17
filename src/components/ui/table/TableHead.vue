<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <th
    :class="
      cn(
        'relative h-12 whitespace-nowrap px-4 text-start align-middle text-black',
        'after:absolute after:end-0 after:top-1/2 after:h-8 after:w-px after:-translate-y-1/2 after:rounded-full after:bg-gray-400 last:after:content-none',
        'first:rounded-s-lg last:rounded-e-lg',
        '[&>[role=checkbox]]:translate-y-0.5',
        'bg-(--table-header-bg)',
        'z-10 data-[pinned=right]:z-20',
        'text-primary-11',
        props.class,
      )
    "
  >
    <slot />
  </th>
</template>
