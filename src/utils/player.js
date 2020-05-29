import G from '@/g-core/G'
import Gitem from '@/g-core/Gitem'
import Gload from '@/g-core/Gload'
class Player extends Gitem {
  constructor() {
    const loader = Gload.getLoader()
    super(loader.resources['player'].texture, 'player')
  }
  init() {
    const config = G.getConfig()
    this.vy = 0
    this.vx = 0
    this.y = config.height / 2 - this.height
    this.buttonMode = true
    this.interactive = true
    this.anchor.set(0.5, 0.5)
    this.scale.set(2)
    this.createControlHandle()
  }
  createControlHandle() {
    const config = G.getConfig()
    let self = this
    self
      .on('pointerdown', event => {
        self.dragging = true
        self.data = event.data
      })
      .on('pointerup', () => {
        self.dragging = false
        self.data = null
      })
      .on('pointerupoutside', () => {
        self.dragging = false
        self.data = null
      })
      .on('pointermove', () => {
        if (self.dragging) {
          var newPosition = self.data.getLocalPosition(self.parent)
          self.x =
            newPosition.x < -config.width / 2 + self.width / 2
              ? -config.width / 2 + self.width / 2
              : newPosition.x > config.width / 2 - self.width / 2
              ? config.width / 2 - self.width / 2
              : newPosition.x
          // self.y = newPosition.y
        }
      })
  }
}
export default Player
