import { createStore, combineReducers } from 'redux'
import Animation from './AnimationStore';
import Renderer from './RendererStore';

const Combi = combineReducers({
  Animation,
  Renderer
});

export const AnimationStore = createStore(Animation);
export const RendererStore = createStore(Renderer);

export default createStore(Combi)
