#### Note: Under heavy refactoring, do not clone at this time 

[note: now being refactored, the old 2015-oct "ancient history" branch has been conserved for the convenience of those using it (`git checkout 2015-oct`)]

# react-starter
A minimalist latest version react, react-router, redux and jwt/bcrypt auth skeleton with node/express server and REST API server. An exploration for personal use (ES6, browserify, watchify, browsersync, sass, npm instead of gulp...)

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

### Then run in either dev or server modes

#### Serve up in dev mode 

Watches scss, js and runs server in parallel; browser refresh required to see changes.

```
npm run watch
```

Local browser-sync and/or hot reloader coming back soon...

#### Serve up in production server mode

```
NODE_ENV=production node index.js
```

#### Or just serve up

```
npm start
```

Access app at `http://example.com:3000` or directly to, for example `http://example.com:3000/docs`.

Try out incipient REST API at `http://localhost:3000/api/docs`.
