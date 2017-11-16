import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import Animation from "./AnimationStore";
import Renderer from "./RendererStore";

const combinedReducers = combineReducers({
  Animation,
  Renderer
});

const store = createStore(
  combinedReducers,
  process.env.DEBUG &&
    devToolsEnhancer({ actionsBlacklist: ["ANIMATION.TICK"] })
);

if (process.env.DEBUG) {
  window.store = store;
}

export default store;
