import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import RekaResolver from 'reka-ui/resolver'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Components({
      resolvers: [RekaResolver()],
    }),
    AutoImport({
      dirs: [
        './src/composables/**/*.ts',
        './src/views/**/*.ts',
        './src/utils',
        './src/layouts/**/*.ts',
        './src/components/*.ts',
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
