import { Loader } from 'pixi.js'
const loader = new Loader()
class Gload {
  static getLoader() {
    return loader
  }
  static loadAll(resources) {
    return new Promise(resolve => {
      for (const key in resources) {
        try {
          loader.add({
            name: key,
            url: resources[key]
          })
        } catch {
          continue
        }
      }
      loader
        .on('load', (loader, res) => {
          console.log(`loader:load ${res.url}`)
        })
        .load(() => {
          resolve()
        })
    })
  }
}
export default Gload
