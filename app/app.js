/**
 * App.js
 *
 * The main entry point, appends PIXI to the DOM
 * and starts a render and animation loop
 *
 */

import './index.html';
import Store from './stores/Store';

console.log(Store);

Store.subscribe(() =>
console.log(Store.getState())
)

Store.dispatch({ type: 'ANIMATION.TICK' })


// import Renderer from './Renderer/Renderer';
// import App from './displayobjects/App/App';
// import AnimationStore from './stores/AnimationStore';
// import TWEEN from 'tween.js';

// const renderer = new Renderer(config.stageWidth, config.stageHeight);
// const app = new App(config.stageWidth, config.stageHeight);

// document.body.appendChild(renderer.view);

// AnimationStore.addChangeListener(() => TWEEN.update());

// renderer.addRenderable(app);
// renderer.start();

console.log('heello')
