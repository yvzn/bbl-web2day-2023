import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

/** @type {import('vite').UserConfig} */
export default {
  build: {
    outDir: 'docs',
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'slides'),
    }),
  ],
};
