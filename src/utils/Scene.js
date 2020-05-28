import { Container } from 'pixi.js'
import G from '@/g-core/G'
class Scene extends Container {
  constructor(...args) {
    const config = G.getConfig()
    super(args)
    this.x = config.width / 2
    this.y = config.height / 2
  }
  init() {}
}
export default Scene
