import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const height = 64;//document.body.clientHeight;
const width = 64;//document.body.clientWidth;
const universe = Universe.new(height, width);

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);