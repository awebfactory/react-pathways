## <img src="https://github.com/awebfactory/react-pathways/blob/master/public/images/react-pathways-36x36.png" name="ReactPathways" style="float:left"> ReactPathways

*Work in progress, no docs as yet, but it might be worthwhile to checkout the commits, for example, look at https://github.com/awebfactory/react-pathways/issues/15, initial integration of [bootstrap](http://getbootstrap.com/) and [bootswatch](http://bootswatch.com/) based ReactPathly "sub-theme" so I can work directly in Sass in my watchify/browser sync workflow.*

*Initial MVP of this educational app will be ready some time in May. Currently adding redux and redux async middleware to communicate with server.*

An app to help you choose your own path to ReactJS and follow it step by step. And which also serves as an up-to-date non-trivial React, React Router and Redux example with custom SCSS bootswatch/bootstrap theme, ReactPathly.

The ReactPathways example app is based on the latest versions of React, React Router and Redux, served up by a NodeJS/Express server which also exposes a REST API to provide data for the app.

## About

Full stack Ecosystem (minimalist set of dependencies):

* NodeJS server side
    * [x] NodeJS/Express based REST API and react-router savvy static serving
    * [x] MongoDB data persistence and mongoose Schemas
    * [ ] Token based JWT token based authentication server
    * [x] Modular structure
* React front end app
    * [x] React and ReactDOM
    * [x] Redux
    * [x] Redux Thunk middleware for asynchronous dispatch
    * [x] Isomorphic fetch and babel polyfill for asynchronous requests to the server
    * Support for token based JWT authentication
    * [x] Bootstrap Sass / Material-UI custom theming support integrated into build system
* Build system
    * [x] Browserify/Watchify/Babelify integrated into npm scripts for JSX and ES2015 transpiling, and node-sass Sass preprocessing. So you can get all the "hot" benefits and still see/control what's going on. Look ma', no webpack or gulp!
    * [x] Separate development and production workflows
    * [x] Browsersync starts your "hot" browser right up and keeps it in sync

If you're interested in seeing what's going on behind the scenes, check out the MVP01 [issue queue](https://github.com/awebfactory/react-pathways/issues). There are two versions of MVP01 in this repo:

* Staging is right here on `master` branch (demo coming soon). Run that if you want to check current stable version of ReactPathways.
* Dev is on branch `mvp01`.

## Instructions

ReactPathways now persists data in mongodb, exposed on the server (`server.js`) via a REST API, and is consumed and maintained in application state via [Redux](http://redux.js.org/). See results of `store.getState()` in console:

![state](https://raw.githubusercontent.com/awebfactory/react-pathways/master/app/reducers/state.png)

There are some sample mongodb scripts in `./scripts/db`, including `./scripts/db/db-insert-steps.js` which you can run in order to insert some sample data, using the following command:

```
$ mongo ./scripts/db/db-insert-steps.js
```

### Installation

No global dependencies other than `node` and `git`, in order to manage tool-chain releases on a per-project basis.

```
$ git clone https://github.com/awebfactory/react-pathways.git
$ npm install
```

### Build only mode

In order to transpile ES6, JSX found in `src` and CSS pre-processor files found in `styles`, on a one-time basis, producing a `public/js/bundle.js` file and a `public/css/main.css` file ready to be run locally with `npm start` or for deployment on a server, do:

```
$ npm run build
```

Then, to run the app (assuming that mongodb is running locally on the usual port and has some sample data (see `./scripts/db`):

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

To start a dev watch session (automatic rebuilding and rebundling for src/js and styles/sass files), do:

```
$ npm run watch
```

Note that this can be used locally or on a server or cloud based IDE!

#### Without BrowserSync

Leave those processes running in the terminal, start another and do:

```
$ npm start
```

and point your browser at `http://localhost:3000`.

In conjunction with dev watch on a server or cloud IDE, I'll typically have three terminal tabs or windows open:

* one for git and other dev process tasks
* one running `npm run watch`
* one running `npm start`

#### With BrowserSync (on a local dev environment)

Leave those watch processes running in one terminal, start another and do:

```
$ npm run dev
```

After a bit, your open browser gets another tab, the app "magically" comes up of its own accord (and is refreshed automatically with any changes in `*.js` or `*.sass` files) and you should be seeing something like the following:

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

With BrowserSync I'll typically have three terminal tabs or windows open:

* one for git and other dev process tasks
* one running `npm run watch`
* one running `npm run dev`
