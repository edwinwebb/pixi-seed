import Store from '../stores/Store';
import { moveDown, moveUp, stopMoving } from '../engine/game-controls';
import { toggleDiagnostic } from '../stores/AppStore';

export default _ => {
  window.onkeydown = e => {
    switch (e.code) {
      case 'KeyS':
        moveUp();
        break;
      case 'KeyX':
        moveDown();
        break;
      case 'KeyD':
        Store.dispatch(toggleDiagnostic());
        break;
    }
  };

  window.onkeyup = _ => stopMoving();
};
