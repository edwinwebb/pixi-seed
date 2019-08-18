import BG from '../displayobjects/Background/soft.jpg';
import DIAGNOSTIC from '../displayobjects/Background/diagnostic.png';
import COURT from '../displayobjects/Court/court.png';
import BALL from '../displayobjects/Court/ball.png';
import PADDLE from '../displayobjects/Court/paddle.png';
import Example from '../screens/Example';
import Loader from '../screens/Loader';

export default app => {
  const loader = new Loader(); // Basic Loading screen
  // Add loader to App Display Object and start loading assets
  app.addChild(loader);
  loader.start([BG, DIAGNOSTIC, COURT, BALL, PADDLE]);

  // remove loader then show example once asset loading is complete
  loader.onLoaded(() => {
    const example = new Example();
    app.removeChild(loader);
    app.addChild(example);
  });
};
