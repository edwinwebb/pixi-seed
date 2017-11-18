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
import { AnimationStore } from './stores/Store';
import Store from './stores/Store';
import * as TWEEN from 'es6-tween';
import Example from './screens/Example';
import Loader from './screens/Loader';
import ColorFilter from './filters/color/color';
import { utils } from 'pixi.js';
import { updateFilterColor, updateFilterIsOn } from './stores/AppStore';

import BG from './displayobjects/Background/diagnostic.png';
import BUNNY from './displayobjects/Bunny/bunny.png';
import SEEDS from './displayobjects/Background/millet.jpg';

const renderer = new Renderer({ resolution: window.devicePixelRatio });
const app = new ScaledContainer();
const loader = new Loader();

const colorOnInput = document.querySelector('#checkbox');
const colorValueInput = document.querySelector('#color');
const colorFilter = new ColorFilter();

// append
document.body.appendChild(renderer.view);

// animate loop for tween
AnimationStore.subscribe(() => {
  TWEEN.update();
  renderer.render(app);
});

Store.subscribe(() => {
  const { color, coloron } = Store.getState().App;
  colorOnInput.checked = coloron;
  colorValueInput.value = utils.hex2string(color);
  colorFilter.color = color;
  app.filters = coloron ? [colorFilter] : [];
});

colorValueInput.addEventListener('change', v =>
  Store.dispatch(updateFilterColor(v.currentTarget.value))
);
colorOnInput.addEventListener('change', v =>
  Store.dispatch(updateFilterIsOn(v.currentTarget.checked))
);

// add loader and begin
app.addChild(loader);
loader.start([BG, BUNNY, SEEDS]);

// remove loader then show example once complete
loader.onLoaded(() => {
  const example = new Example();
  app.removeChild(loader);
  app.addChild(example);
});

// start the render loop
renderer.start();
