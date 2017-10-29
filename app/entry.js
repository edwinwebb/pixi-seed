/**
 * App.js
 *
 * The main entry point, appends PIXI to the DOM
 * and starts a render and animation loop
 *
 */

import './index.html';
import Renderer from './Renderer/Renderer';
import App from './displayobjects/App/App';
import Store from './stores/Store';
import * as TWEEN from 'es6-tween';

const renderer = new Renderer({resolution: window.devicePixelRatio});
const app = new App();

document.body.appendChild(renderer.view);

Store.subscribe( ()=>{
  const { tick, previousTick } = Store.getState().Animation;
  if(tick !== previousTick) {
    TWEEN.update()
  }
})

renderer.addRenderable(app);
renderer.start();

