import { Sprite } from 'pixi.js'
import Gload from './Gload'
class Gitem {
  constructor(texture) {
    this.create(texture)
    this.ax = 0
    this.ay = 0
    this.vx = 0
    this.vy = 0
    this.init()
  }
  create(texture) {
    const loader = Gload.getLoader()
    this.sprite = new Sprite(loader.resources[texture].texture)
  }
  getSprite() {
    return this.sprite
  }
  init() {}
  update() {
    this.vx += this.ax
    this.vy += this.ay
    this.sprite.x += this.vx
    this.sprite.y += this.vy
  }
}
export default Gitem
