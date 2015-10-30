# react-starter
A minimalist latest version react and react-router skeleton, an exploration for personal use (ES6, browserify, watchify, browsersync, sass, npm instead of gulp...)

## Minimalist instructions

This project attempts to document itself in the commit comments (and related issues), so please review if interested.

### Global environment

* Install [node](https://nodejs.org/en/)
    * We are assuming node 4.x.x, npm 2.x.x
    * Recommendation on supporting OS: install [node binary manager `n`](https://github.com/tj/n)
        * `npm install -g n`
        * `n latest`
* Install and configure [git](https://git-scm.com/book/en/v2)
* Install [browserify](http://browserify.org/)
    * `npm install -g browserify`
* Install [watchify](https://github.com/substack/watchify)
    * `npm install -g watchify`

### Install

````
npm install
````

### Build

````
npm run build
````

### Serve up in dev mode with Browsersync

In one terminal, do `npm run watch-js` so that any JavaScript file changes will result in automatic build to `./public` via watchify.

In another, do `npm run watch-css` so that another process can watch the sass files.

In a third terminal, do `npm start` and Browsersync (installed locally via initial `npm install`) will fire up the app in your opened browser automagically. Browsersync is built into the express server `index.js`, and while watchify is watching the `./src` directory, Browsersync is triggered when watchify and node-sass complete any changes, altering the `./public` directory.

### Serve up in production mode without Browsersync

```
NODE_ENV=production node index.js
```

Access app at `http://localhost:3000` or directly to, for example `http://localhost:3000/docs`.

Try out incipient REST API at `http://localhost:3000/api/docs`.
