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
import TWEEN from 'tween.js';

const renderer = new Renderer({resolution: 1});
const app = new App();

document.body.appendChild(renderer.view);

Store.subscribe( ()=>{
  const { tick, previousTick } = Store.getState().Animation;
  if(tick !== previousTick) {
    TWEEN.update()
  }
})


// AnimationStore.addChangeListener(() => TWEEN.update());

renderer.addRenderable(app);
renderer.start();

