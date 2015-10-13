# react-starter
A minimalist latest version react and react-router skeleton, an exploration for personal use

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

### Install

````
npm install
````

### Development cycle involves:

After install, one time:

````
mkdir public/js
mkdir public/css
npm run build
````

After any changes in the app

````
npm run build
````

### Serve up from public/index.html to http://localhost:3000

````
npm intall -g serve
serve public
````
