<script setup lang="ts">
import layouts from './layouts'
const router = useRouter()
const currentLayout = shallowRef('div')
router.afterEach((to) => {
  currentLayout.value = layouts[to.meta?.layout] || 'div'
})
provide('PAGE_LAYOUT', currentLayout)
</script>

<template>
  <component :is="currentLayout || 'div'">
    <RouterView v-slot="{ Component, route }">
      <Transition appear mode="out-in" name="page-transition">
        <component
          :is="Component"
          :key="$route.params.id"
          :data-transition="route.meta.transition"
        />
      </Transition>
    </RouterView>
  </component>
</template>
