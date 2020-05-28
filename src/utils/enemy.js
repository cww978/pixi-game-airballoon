import Gitem from '@/g-core/Gitem'
import G from '@/g-core/G'
import Gload from '@/g-core/Gload'
class Enemy extends Gitem {
  constructor() {
    const loader = Gload.getLoader()
    super(loader.resources['player'].texture)
  }
  init() {
    this.vy = 3
    this.ay = 0.1
    this.y = this.getPosition().y
    this.x = this.getPosition().x
  }
  getPosition() {
    const config = G.getConfig()
    let m = -config.width / 2
    let n = config.width / 2 - this.width
    let c = m - n + 1
    return {
      y: -config.height / 2 + this.height,
      x: Math.floor(Math.random() * c + n)
    }
  }
}
export default Enemy
