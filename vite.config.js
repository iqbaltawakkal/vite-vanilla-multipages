const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      // this is config to build vite app into multiple pages
      // we can use all rollup plugin in vite app
      input: {
        // register your html files here
        // each page having html files inside folder is better so you can explicitly separate css or js for certail page.
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        about: resolve(__dirname, 'about/index.html')
      }
    }
  }
});
