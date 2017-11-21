/**
 * App.js
 *
 * The main entry point from WebPack
 * - Appends render canvas to DOM
 * - Updates es6-tween and calls renderer.render
 * - Add Loading Screen and loads assets
 * - Adds Example Screen once loading is complete
 * - Subscribes and Dispatches to AppStore & DOM
 */
import * as TWEEN from 'es6-tween';
import { utils } from 'pixi.js';
import './index.html';
import Renderer from './Renderer/Renderer';
import ScaledContainer from './displayobjects/ScaledContainer/ScaledContainer';
import { AnimationStore } from './stores/Store';
import Store from './stores/Store';
import Example from './screens/Example';
import Loader from './screens/Loader';
import ColorFilter from './filters/color/color';
import { updateFilterColor, updateFilterIsOn } from './stores/AppStore';
import BG from './displayobjects/Background/diagnostic.png';
import BUNNY from './displayobjects/Bunny/bunny.png';
import SEEDS from './displayobjects/Background/millet.jpg';

const renderer = new Renderer({ resolution: window.devicePixelRatio }); // an extension of WebGLRenderer which dispatches to RendererStore
const app = new ScaledContainer(); // Auto scale to screen size, subscribed to RendererStore
const loader = new Loader(); // Basic Loading screen

// Controls for filter/DOM Redux example
const colorOnInput = document.querySelector('#checkbox');
const colorValueInput = document.querySelector('#color');
const colorFilter = new ColorFilter();

// append renderer to DOM
document.body.appendChild(renderer.view);

// animate loop for tween and render
AnimationStore.subscribe(() => {
  TWEEN.update();
  renderer.render(app);
});

// Update DOM and App.filters from AppStore
Store.subscribe(() => {
  const { color, coloron } = Store.getState().App;
  colorOnInput.checked = coloron;
  colorValueInput.value = utils.hex2string(color);
  colorFilter.color = color;
  app.filters = coloron ? [colorFilter] : [];
});

// Dispatch from DOM to AppStore
colorValueInput.addEventListener('change', v =>
  Store.dispatch(updateFilterColor(v.currentTarget.value))
);
colorOnInput.addEventListener('change', v =>
  Store.dispatch(updateFilterIsOn(v.currentTarget.checked))
);

// Add loader to App Display Object and start loading assets
app.addChild(loader);
loader.start([BG, BUNNY, SEEDS]);

// remove loader then show example once asset loading is complete
loader.onLoaded(() => {
  const example = new Example();
  app.removeChild(loader);
  app.addChild(example);
});

// start the render loop
renderer.start();
