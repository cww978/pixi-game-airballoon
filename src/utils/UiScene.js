import Scene from './Scene'
import { Text } from 'pixi.js'
import G from '@/g-core/G'
class UiScene extends Scene {
  constructor(...args) {
    super(args)
    this.score = 0
    this.scoreText = null
  }
  initScore() {
    const config = G.getConfig()
    this.scoreText = new Text('', {
      fontFamily: 'Arial',
      fontSize: 24,
      fill: 0xf4da25,
      align: 'center'
    })
    this.scoreText.text = `得分：${this.score}`
    this.scoreText.x = -config.width / 2 + 20
    this.scoreText.y = -config.height / 2 + 20
    this.addChild(this.scoreText)
  }
  addScore(num = 0) {
    this.score += num
    this.scoreText.text = `得分：${this.score}`
  }
}
export default UiScene
