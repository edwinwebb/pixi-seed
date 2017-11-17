import { createStore, combineReducers } from 'redux'
import Animation from './AnimationStore';
import Renderer from './RendererStore';

const Combi = combineReducers({
  Renderer
});

export const AnimationStore = createStore(Animation);

export default createStore(Combi)
