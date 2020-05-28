import { Application, Container } from 'pixi.js'
const config = {
  width: 360,
  height: 720,
  enemyVy: 5,
  enemyVx: 0
}
const layers = {
  scene: new Container(),
  game: new Container()
}
const instance = {
  app: null
}
class App {
  static getConfig() {
    return config
  }
  static getLayers() {
    return layers
  }
  static getApp() {
    if (!instance.app) {
      return null
    }
    return instance.app
  }
  static create(el) {
    config.width = el.clientWidth > 720 ? config.width : el.clientWidth
    config.height = el.clientWidth > 720 ? config.height : el.clientHeight
    let app = new Application({
      width: config.width,
      height: config.height,
      transparent: true,
      backgroundColor: '0x000000'
    })
    // 添加场景
    for (const key in layers) {
      let layer = layers[key]
      app.stage.addChild(layer)
      layer.x = config.width / 2
      layer.y = config.height / 2
    }
    el.appendChild(app.view)
    instance.app = app
    return app
  }
}
export default App
