import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'
import nesting from 'postcss-nesting'

export default defineConfig({
  plugins: [
    vue(),
    unocss({
      presets: [
        presetWind({
          dark: 'class',
        }),
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        nesting(),
      ],
    },
  },
})
