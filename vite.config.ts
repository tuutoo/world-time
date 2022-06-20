import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';
import { presetAttributify, presetIcons, presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components(),
    AutoImport({
      imports: ['vue'],
    }),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
});
