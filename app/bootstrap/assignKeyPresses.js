import Store from '../stores/Store';
import { toggleDiagnostic } from '../stores/AppStore';

export default _ =>
  (window.onkeypress = e => {
    Store.dispatch(toggleDiagnostic());
  });
