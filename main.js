// Step 1
import { Application, Assets } from 'pixi.js';
import { GifSprite } from 'pixi.js/gif';

(async() => {
  
  // Step 2
  const app = new Application();

  // Step 3
  await app.init({ background: '#1099bb', resizeTo: window });

  // Step 4
  document.body.appendChild(app.canvas);

  const source = await Assets.load (
    'dorb.gif',
  );
  
  const dorb = new GifSprite({
    source
  });
  

  app.stage.addChild(dorb);
  dorb.anchor.set(0.5);

  // Move the sprite to the center of the screen.
  dorb.x = app.screen.width / 2;
  dorb.y = app.screen.height / 2;
  
})();