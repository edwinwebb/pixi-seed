import Store from '../stores/Store';
import { toggleDiagnostic } from '../stores/AppStore';

export default _ => {
  window.onkeydown = e => {
    switch (e.code) {
      case 'KeyD':
        Store.dispatch(toggleDiagnostic());
        break;
    }
  };
};
