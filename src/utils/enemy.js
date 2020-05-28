import Gitem from './Gitem'
import G from './G'
class Enemy extends Gitem {
  constructor(texture) {
    super(texture)
  }
  init() {
    this.vy = 3
    this.ay = 0.1
    this.sprite.y = this.getPosition().y
    this.sprite.x = this.getPosition().x
  }
  getPosition() {
    const config = G.getConfig()
    let m = -config.width / 2
    let n = config.width / 2 - this.sprite.width
    let c = m - n + 1
    return {
      y: -config.height / 2 + this.sprite.height,
      x: Math.floor(Math.random() * c + n)
    }
  }
}
export default Enemy
