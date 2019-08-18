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

import assignKeyPresses from './bootstrap/assignKeyPresses';
import loadAssets from './bootstrap/loadAssets';

const renderer = new Renderer({ resolution: window.devicePixelRatio }); // an extension of WebGLRenderer which dispatches to RendererStore
const app = new Container(); // Auto scale to screen size, subscribed to RendererStore

// append renderer to DOM
document.body.appendChild(renderer.view);

// animate loop for render
AnimationStore.subscribe(() => {
  renderer.render(app);
});

assignKeyPresses();
loadAssets(app);

// start the render loop
renderer.start();
