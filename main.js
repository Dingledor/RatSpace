// Step 1
import {Application, Assets, Sprite} from 'pixi.js';
import { GifSprite } from 'pixi.js/gif';

(async() => {
  
  // Step 2
  const app = new Application();

  // Step 3
  await app.init({ background: '#1099bb', resizeTo: window });

  // Step 4
  document.body.appendChild(app.canvas);

  const dorbgif = await Assets.load (
    'dorb.gif',
  );

  const dorb = new GifSprite({
    dorbgif,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    anchor: 0.5,
  });

  app.stage.addChild(dorb);

  dorb.anchor.set(0.5);

  dorb.x = app.screen.width / 2;
  dorb.y = app.screen.height / 2;
  
})();