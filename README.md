# Mix-it-Up

Mix it Up is a NodeJs project that generates a random drink, the ingredients and the instructions on how to make it. Cheers!

## Project Setup

Initialize NPM
```
npm init
```

Install NPM packages
```
npm i axios concurrently ejs express
```

Install DEV dependencies for Tailwind CSS
```
npm i -D tailwindcss postcss autoprefixer
```

Add Type in package.json

```
"type": "module",
```

Create tailwind.config.js file
```
npx tailwindcss init
```

Edit tailwind.config.js file
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add "start" script in package.json
```
"scripts": {
    "start": "concurrently \"nodemon index.js\" \"npx tailwindcss -i src/styles.css -o dist/styles.css --watch \""
  }
```

Run the code

```
npm run start
```

Go to ```http://localhost:3000/``` to see Mix it Up in action!
