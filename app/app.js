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

const renderer = new Renderer({});
const app = new App();

document.body.appendChild(renderer.view);

// AnimationStore.addChangeListener(() => TWEEN.update());

renderer.addRenderable(app);
renderer.start();

