## <img src="https://github.com/awebfactory/react-pathways/blob/master/public/images/react-pathways-36x36.png" name="ReactPathways" style="float:left"> ReactPathways

*Work in progress, no docs as yet, but it might be worthwhile to checkout the commits, for example, look at https://github.com/awebfactory/react-pathways/issues/15, initial integration of [bootstrap](http://getbootstrap.com/) and [bootswatch](http://bootswatch.com/) based ReactPathly "sub-theme" so I can work directly in Sass in my watchify/browser sync workflow.*

*Initial MVP of this educational app will be ready some time in May. Currently adding redux and redux async middleware to communicate with server.*

An app to help you choose your own path to ReactJS and follow it step by step. And which also serves as an up-to-date non-trivial React, React Router and Redux example with custom SCSS bootswatch/bootstrap theme, ReactPathly.

The ReactPathways example app is based on the latest versions of React, React Router and Redux, served up by a NodeJS/Express server which also exposes a REST API to provide data for the app.

If you're interested in seeing what's going on behind the scenes, check out the MVP01 [issue queue](https://github.com/awebfactory/react-pathways/issues). There are two versions of MVP01 in this repo:

* Staging is right here on `master` branch (demo coming soon). Run that if you want to check current stable version of ReactPathways.
* Dev is on branch `thunkit`.

At this time, both supporting a build workflow based on Browserify, Watchify and BrowserSync, with both build and dev workflows.

## Instructions

### Installation

ReactPathways now persists data in mongodb. There are some sample scripts in `./data/scripts/`.

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
