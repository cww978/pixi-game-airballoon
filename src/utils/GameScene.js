import Player from '@/utils/player'
import Enemy from '@/utils/enemy'
import Scene from './Scene'
import Bump from 'bump.js'
import * as PIXI from 'pixi.js'
const bump = new Bump(PIXI)
class GameScene extends Scene {
  constructor(...args) {
    super(args)
    this.player = null
    this.enemys = []
    this.pause = false
  }
  initPlayer() {
    this.player = new Player()
    this.addChild(this.player)
  }
  generateEmemy() {
    let enemy = new Enemy()
    this.enemys.push(enemy)
    this.addChild(enemy)
  }
  pause() {
    this.pause = true
  }
  update() {
    if (this.pause) {
      return
    }
    this.enemys.forEach(enemy => {
      enemy.update()
      if (bump.hit(enemy, this.player) && enemy.visible) {
        enemy.visible = false
        this.emit('play:hit')
      }
    })
  }
}
export default GameScene
