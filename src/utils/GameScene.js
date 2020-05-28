import Player from '@/utils/player'
import Scene from './Scene'
class GameScene extends Scene {
  constructor(...args) {
    super(args)
    this.player = null
  }
  initPlayer() {
    this.player = new Player()
    this.addChild(this.player)
  }
}
export default GameScene
