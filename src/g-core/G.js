import { Application } from 'pixi.js'
const config = {
  width: 360,
  height: 720
}
const instance = {
  app: null
}
class App {
  static getConfig() {
    return config
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
    el.style.width = config.width + 'px'
    el.style.height = config.height + 'px'
    let app = new Application({
      width: config.width,
      height: config.height,
      transparent: true,
      backgroundColor: '0x000000'
    })
    el.appendChild(app.view)
    instance.app = app
    return app
  }
}
export default App
