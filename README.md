# Vite Boilerplate

## Start project using SASS without Tailwind

1. Remove all tailwind related dependency

```bash
$ npm uninstall tailwindcss autoprefixer postcss
```

2. Remove `tailwind.config.js` `postcss.config.js` (tailwind related files) since we wont need them

3. Remove `@tailwind` base style in `styles.scss`

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

P.S. Some page will be broken when Tailwind removed.

---

## project using Tailwind with SASS

1. You are all set already, Good luck have fun!

---

## Script Command

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server at localhost:5000
$ npm run build
$ npm run serve
```

For detailed explanation on how things work, check out [Vite.js docs](https://vitejs.dev/).
