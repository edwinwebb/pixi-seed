/**
 * App.js
 *
 * The main entry point
 * -> appends PIXI to the DOM
 * -> starts a render and animation loop
 *
 */

import './index.html';
import Renderer from './Renderer/Renderer';
import ScaledContainer from './displayobjects/ScaledContainer/ScaledContainer';
import Store from './stores/Store';
import * as TWEEN from 'es6-tween';
import Example from './screens/Example';
import Loader from './screens/Loader';

import BG from './displayobjects/Background/diagnostic.png';
import BUNNY from './displayobjects/Bunny/bunny.png';
import SEEDS from './displayobjects/Background/millet.jpg';

const renderer = new Renderer({resolution: window.devicePixelRatio});
const app = new ScaledContainer();
const example = new Example();
const loader = new Loader();

// append
document.body.appendChild(renderer.view);

// animate loop for tween
Store.subscribe( ()=>{
  const { tick, previousTick } = Store.getState().Animation;
  if(tick !== previousTick) {
    TWEEN.update()
  }
});

// add loader and begin
app.addChild(loader);
loader.start([BG, BUNNY, SEEDS]);

// remove loader then show example once complete
loader.onLoaded( ()=>{
  app.removeChild(loader);
  app.addChild(example);
} );

// start the render loop
renderer.addRenderable(app);
renderer.start();

