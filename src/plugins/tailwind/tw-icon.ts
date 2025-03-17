import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

export const icons = iconsPlugin({
  // Select the icon collections you want to use
  // You can also ignore this option to automatically discover all icon collections you have installed
  collections: {
    app: {
      icons: {
        loading: {
          // svg body
          body: '<defs><linearGradient id="b"><stop stop-color="currentColor" stop-opacity="0" offset=".5"/><stop stop-color="currentColor" stop-opacity=".5" offset="1"/></linearGradient><linearGradient id="a"><stop stop-color="currentColor" offset="0"/><stop stop-color="currentColor" stop-opacity=".5" offset="1"/></linearGradient></defs><g fill="transparent" stroke-width="3"><path d="m3 12a9 9 0 0 1 18 0" stroke="url(#b)"/><path d="m21 12a9 9 0 1 1-18 0" stroke="url(#a)"/><path d="m3 12z" stroke="currentColor" stroke-linecap="round"/><animateTransform attributeName="transform" dur="1.2s" from="0 12 12" repeatDur="indefinite" to="360 12 12" type="rotate"/></g>',
          // svg width and height, optional
          width: 24,
          height: 24,
        },
        'loading-dots': {
          // svg body
          body: '<circle fill="currentColor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="1;0.2;1" repeatCount="indefinite" begin="0.1"/></circle><circle fill="currentColor" stroke="none" cx="50" cy="10" r="6"><animate attributeName="opacity" dur="1s"  values="1;0.2;1" repeatCount="indefinite" begin="0.2"/></circle><circle fill="currentColor" stroke="none" cx="75" cy="10" r="6"><animate attributeName="opacity" dur="1s"  values="1;0.2;1" repeatCount="indefinite" begin="0.3"/></circle>',
          // svg width and height, optional
          width: 100,
          height: 20,
        },
        'loading-dots-2': {
          // svg body
          body: '<g fill="currentColor" stroke="none"> <circle cx="25" cy="10" r="6" > <animate attributeName="r" begin="0.1s" dur="1s" values="1;7;1" repeatCount="indefinite" /> <animate attributeName="opacity" begin="0.1" dur="1s" values="0.2;1;0.2" repeatCount="indefinite" /> </circle> <circle cx="50" cy="10" r="6" > <animate attributeName="r" begin="0.3s" dur="1s" values="1.5;7;1.5" repeatCount="indefinite" /> <animate attributeName="opacity" begin="0.2" dur="1s" values="0.2;1;0.2" repeatCount="indefinite" /> </circle> <circle cx="75" cy="10" r="6" > <animate attributeName="r" begin="0.5s" dur="1s" values="2;7;2" repeatCount="indefinite" /> <animate attributeName="opacity" begin="0.3" dur="1s" values="0.2;1;0.2" repeatCount="indefinite" /> </circle> </g>',
          // svg width and height, optional
          width: 100,
          height: 20,
        },
      },
    },
    ...getIconCollections(['mdi']),
  },
})
