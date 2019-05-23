import { WebGLRenderer } from "three";
import { globalTime } from "utils/time";
import { SceneRuntime } from "scene-runtime";
import { POC_GAMEPLAY_SCENE } from "scenes/poc-gameplay-scene";

let renderer: WebGLRenderer;
let runtime: SceneRuntime;

function setupRenderer(): WebGLRenderer {
  if (!renderer) {
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  }
  return renderer;
}

function setupScene(): SceneRuntime {
  if (!runtime) {
    runtime = new SceneRuntime(POC_GAMEPLAY_SCENE);
    runtime.create();
  }
  return runtime;
}

function gameLoop(): void {
  // Request a new frame after we finish
  window.requestAnimationFrame(gameLoop);
  globalTime.tick();
  runtime.tick(renderer);
}

function main() {
  console.info("[CurrySumo] Starting game.");
  setupRenderer();
  setupScene();
  gameLoop();
}

main();
