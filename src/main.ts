import { WebGLRenderer } from "three";
import { RenderedScene, PocScene } from "scenes";

let renderer: WebGLRenderer;
let activeScene: RenderedScene;

function setupRenderer() {
  if (!renderer) {
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  }
  return renderer;
}

function setupScene() {
  if (!activeScene) {
    activeScene = new PocScene();
  }
  return activeScene;
}

function gameLoop() {
  // Request a new frame after we finish
  window.requestAnimationFrame(gameLoop);
  activeScene.doRender(renderer);
}

function main() {
  console.info("[CurrySumo] Starting game.");
  setupRenderer();
  setupScene();
  gameLoop();
}

main();
