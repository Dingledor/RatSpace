// Step 1
import { Application, AnimatedSprite, Assets } from 'pixi.js';
import '@pixi/sprite-animated'

(async() => {
  // Step 2
  const app = new Application();

  // Step 3
  await app.init({ background: '#1099bb', resizeTo: window });

  // Step 4
  document.body.appendChild(app.canvas);

  const dorbPath = new URL('/dorbanimation.json', import.meta.url).href;
  const dorbPNGPath = new URL('/dorbanimation.png', import.meta.url).href;

  const sheet = await Assets.load(dorbPath);
  const dorb= new AnimatedSprite(sheet.animations['0']);

  app.stage.addChild(dorb);
  dorb.anchor.set(0.5);

  dorb.x = app.screen.width / 2;
  dorb.y = app.screen.height / 2;
  dorb.play()
})();
