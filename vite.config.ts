import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import RekaResolver from 'reka-ui/resolver'
import tailwindcss from '@tailwindcss/vite'
import { icons } from './src/plugins/tailwind/tw-icon'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Components({
      resolvers: [
        RekaResolver(),
        {
          resolve: (componentName) => {
            if (['Icon'].includes(componentName)) {
              return {
                name: componentName,
                from: '@iconify/vue',
              }
            }
          },
          type: 'component',
        },
      ],
    }),
    AutoImport({
      dirs: [
        './src/composables/**/*.ts',
        './src/views/**/*.ts',
        './src/utils/*',
        './src/api/**/*.ts',
        './src/layouts/**/*.ts',
        './src/components/*.ts',
        './src/components/*.d.ts',
      ],
      vueTemplate: true,
      dts: true,
      imports: [
        'vue',
        'vue-router',
        {
          '@tanstack/vue-table': ['createColumnHelper'],
        },
        {
          'reka-ui': ['useForwardPropsEmits', 'useForwardProps', 'useEmitAsProps'],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
