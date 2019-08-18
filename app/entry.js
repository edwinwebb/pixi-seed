/**
 * App.js
 *
 * The main entry point from WebPack
 * - Appends render canvas to DOM
 * - Calls renderer.render
 * - Add Loading Screen and loads assets
 * - Adds Example Screen once loading is complete
 * - Subscribes and Dispatches to AppStore & DOM
 */
import { Container } from 'pixi.js';
import './index.html';
import Renderer from './Renderer/Renderer';
import { AnimationStore } from './stores/Store';
import Store from './stores/Store';

import Example from './screens/Example';
import Loader from './screens/Loader';
import assignKeyPresses from './bootstrap/assignKeyPresses';

import BG from './displayobjects/Background/soft.jpg';
import DIAGNOSTIC from './displayobjects/Background/diagnostic.png';
import COURT from './displayobjects/Court/court.png';

const renderer = new Renderer({ resolution: window.devicePixelRatio }); // an extension of WebGLRenderer which dispatches to RendererStore
const app = new Container(); // Auto scale to screen size, subscribed to RendererStore
const loader = new Loader(); // Basic Loading screen

// append renderer to DOM
document.body.appendChild(renderer.view);

// animate loop for render
AnimationStore.subscribe(() => {
  renderer.render(app);
});

// Add loader to App Display Object and start loading assets
app.addChild(loader);
loader.start([BG, DIAGNOSTIC, COURT]);

// remove loader then show example once asset loading is complete
loader.onLoaded(() => {
  const example = new Example();
  app.removeChild(loader);
  app.addChild(example);
});

assignKeyPresses();

// start the render loop
renderer.start();
