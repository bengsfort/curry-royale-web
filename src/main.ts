function gameLoop() {
  window.requestAnimationFrame(gameLoop);
  console.info("[CurrySumo] Tick.");
}

function main() {
  console.info("[CurrySumo] Starting game loop.");
  gameLoop();
}

main();
