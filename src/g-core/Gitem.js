import { Sprite } from 'pixi.js'
class Gitem extends Sprite {
  constructor(texture, tag = 'sprite') {
    super(texture)
    this.ax = 0
    this.ay = 0
    this.vx = 0
    this.vy = 0
    this.tag = tag
    this.init()
  }
  init() {}
  update() {
    this.vx += this.ax
    this.vy += this.ay
    this.x += this.vx
    this.y += this.vy
  }
}
export default Gitem
