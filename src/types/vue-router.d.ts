import layouts from '@/layouts'
declare module 'vue-router' {
  interface RouteMeta {
    layout: keyof typeof layouts
  }
}
