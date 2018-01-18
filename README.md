![PixiSeed](https://github.com/edwinwebb/pixi-seed/raw/master/app/displayobjects/Logo/logo%402x.png "Pixi Seed")

# Pixi Seed

[Demo](http://edwinwebb.github.io/pixi-seed/)

This project is designed to bootstrap your [Pixi.js](https://github.com/pixijs/pixi.js) development with modern tooling, technology and project organisation. Use as boilerplate for your next project.

Webpack with ES6 provides a more class based approach to Pixi.js development and allows you to include assets within your JS. [Reactman](https://www.npmjs.com/package/reactman) enables you to quickly add code to your project and the using Redux Stores helps keep your data in one place.

The project comes with Render and Animation stores and a ScaledContainer to help work across multiple devices with a ‘best-fit’ rendering methodology. The code contains demos for TweenJS and renderer update loops.

## V3 Updates
* Change stores to REDUX /w ducks
* Update to Webpack V2
* Update to Pixi V4.6
* Added a loader screen
* Added a custom [glsl filter example](https://github.com/edwinwebb/pixi-seed/tree/master/app/filters/color)
* PopMotion with minor [examples](https://github.com/edwinwebb/pixi-seed/tree/master/app/displayobjects/RedLine/RedLine.js)
* Animation loop [examples](https://github.com/edwinwebb/pixi-seed/tree/master/app/displayobjects/THingie/Thingie.js)
* HTML forms to Redux/Pixi.js examples

## TODO
* Move loader to REDUX
* Script to redo package.json on new project
* Add a screen manager

## Getting started

Clone the project, remove the git repository and install to get going:

```bash
git clone --depth=1 https://github.com/edwinwebb/pixi-seed.git my-project
cd my-project
rm -rf .git
npm install
npm start
```

Then visit http://localhost:8080

## Strapped Files
You can configure your canvas size in the AppConstants.js file.

```js
export const canvasWidth = 1920;
export const canvasHeight = 1080;
```

The ScaledObjectContainer will try a best fit approach. Used in Logo and Background to auto scale.

RedLine.js gives a Popmotion example

Thingie.js gives an animation loop update example.


## npm scripts

* `npm start` - Build and start the app in development mode at http://localhost:8080
* `npm run build` - Run a production build, outputs to ./build/
* `npm run lint` - Lint your code
* `npm run reactman` - Generate code for a DisplayObject or Store from command prompt. See [here](http://edwinwebb.github.io/reactman/).

## Static assets

`import` asset files from within your JavaScript component files. To add more
filetypes, look at the webpack.config.js and add a file loader.

```javascript
// Filename: app.js
import assetURL from './logo.png';
```

## License

Copyright (c) 2017 Edwin Webb

MIT (http://opensource.org/licenses/MIT)
