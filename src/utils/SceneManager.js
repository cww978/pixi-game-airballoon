import GameScene from './GameScene'
import UiScene from './UiScene'
class SceneManager {
  constructor() {
    this.scenes = {}
  }
  getGameScene() {
    if (!this.scenes['game-scene']) {
      this.scenes['game-scene'] = new GameScene()
    }
    return this.scenes['game-scene']
  }
  getUiScene() {
    if (!this.scenes['ui-scene']) {
      this.scenes['ui-scene'] = new UiScene()
    }
    return this.scenes['ui-scene']
  }
  goGameScene() {}
  goOverScene() {}
}
export default SceneManager
