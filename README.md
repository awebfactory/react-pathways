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

### Build only mode

In order to transpile ES6, JSX found in `src` and CSS pre-processor files found in `styles`, on a one-time basis, producing a `public/js/bundle.js` file and a `public/css/main.css` file ready to be run locally with `npm start` or for deployment on a server, do:

```
$ npm run build
```

Then, to run the app:

```
$ npm start
```

and point your browser at `http://localhost:3000`.

See the npm scripts in `package.json`

### Dev mode

In dev mode, changes in either sass or js/jsx files will automatically trigger rebuilding the `./public/css/main.css` and/or `./public/js/bundle.js` files on-the=fly, and a refresh of the browser will show the changes without have to manually re-run the build process.

If this is a first time session installation, do: 

```
npm run build
```

To start a dev session, do:

```
$ npm run watch
```

#### Without BrowserSync

Leave those processes running in the terminal, start another and do:

```
$ npm start
```

and point your browser at `http://localhost:3000`.

#### Without BrowserSync

Leave those watch processes running in one terminal, start another and do:

```
$ npm run dev
```

You should be seeing something like the following

```
BrowserSync server listening url 0.0.0.0 on port 3000 in development mode
[BS] Proxying: http://localhost:3000
[BS] Access URLs:
 ------------------------------------
       Local: http://localhost:3001
    External: [device ip:port]
 ------------------------------------
          UI: http://localhost:3002
 UI External: [device ip:port]
 ------------------------------------
[BS] Watching files...
```
