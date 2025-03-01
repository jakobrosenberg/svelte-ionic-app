import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from "path";

const pwaManifest = {
  name: 'Name of your app',
  short_name: 'Short name of your app',
  description: 'Description of your app',
  theme_color: '#ffffff',
  icons: [
    {
      src: 'pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    }
  ]
}


/* 
  experimenting with webcomponents in svelte 
  great guide: 
    https://www.thisdot.co/blog/web-components-with-svelte
    https://dev.to/tnzk/svelte-for-web-components-development-pitfalls-and-workarounds-as-of-july-2021-3lii
*/
const svelteWebcomponentConfig = {
  include: ['./src/lib/*.svelte'],
  compilerOptions: {
    customElement: true,
  }
}

const svelteNonWebcomponentConfig = {
  // exclude: ['./src/lib/*.svelte']
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    VitePWA({
      manifest: pwaManifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'assets/*'],
    }),

    //  svelte(svelteWebcomponentConfig),

    svelte(svelteNonWebcomponentConfig),
  ],
  publicDir: "src/static",
  resolve: {
    alias: {
      $lib: resolve('./src/lib'),
      $components: resolve('./src/components'),
      $services: resolve('./src/services'),
      $routes: resolve('./src/routes'),
      $static: resolve('./src/static'),
      $ionic: resolve('./src/lib/ionic'),
      $theme: resolve('./src/theme'),
    }
  }
})
