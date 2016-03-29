### AWebFactory react-starter

Minimalist latest version React, React Router and Redux skeleton served up by a NodeJS/Express server which also exposes a REST API to provide data for the app.

This is a step-by-step approach to building a small starter set as an exploration for personal use, with the objective of avoiding overwhelming ourselves with un-needed complexity.

Now supporting a build workflow based on Webpack, with an alternative dev workflow including Webpack Dev Server with Hot Reloading.

## Minimalist instructions

### Installation

No global dependencies other than `node` and `git`, in order to manage tool-chain releases on a per-project basis.

```
$ git clone https://github.com/awebfactory/react-starter.git
$ npm install
```

### Build mode

In order to transpile ES6, JSX and CSS pre-processor files found in `src`, on a one-time basis, producing a `public/js/bundle.js` file ready to be run locally with `npm start` or for deployment on a server, do:

```
$ npm run build
```

Then, to run the app:

```
$ npm start
```

### Dev mode
