import { createStore, combineReducers } from 'redux';
import Animation from './AnimationStore';
import Renderer from './RendererStore';
import App from './AppStore';

const Combi = combineReducers({
  Renderer,
  App
});

export const AnimationStore = createStore(Animation);

export default createStore(Combi);
