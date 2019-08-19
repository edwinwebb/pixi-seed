import * as io from 'socket.io-client';
import { updateGame } from '../stores/AnimationStore';
import { AnimationStore } from '../stores/Store';

const socket = io.connect('http://localhost:3000');

class Connect {
  init() {
    socket.on('game-update', function(gameState) {
      // TODO: decouple service from action
      AnimationStore.dispatch(updateGame(gameState));
    });
  }
}

export default new Connect();
