const { resolve } = require("path");
const { defineConfig } = require("vite");
import pugPlugin from "vite-plugin-pug";

module.exports = defineConfig({
  plugins: [pugPlugin({ pretty: true })],
  build: {
    rollupOptions: {
      // we can use most of rollup plugin in vite app
      input: {
        // this is config to build vite app into multiple pages
        // register your html files here
        // each page having html files inside folder is advised, so you can explicitly separate css or js for certail page.
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        about: resolve(__dirname, "about/index.html"),
      },
    },
  },
});
