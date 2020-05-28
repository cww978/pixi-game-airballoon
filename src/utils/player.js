import G from './G'
import Gitem from './Gitem'
class Player extends Gitem {
  constructor(texture) {
    super(texture)
  }
  getSprite() {
    return this.sprite
  }
  init() {
    const config = G.getConfig()
    this.sprite.vy = 0
    this.sprite.vx = 0
    this.sprite.y = config.height / 2 - this.sprite.height
    this.sprite.buttonMode = true
    this.sprite.interactive = true
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(2)
    this.createControlHandle()
  }
  createControlHandle() {
    const config = G.getConfig()
    let self = this.sprite
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
