<template>
  <div class="page">
    <div ref="main-stage" class="main-stage"></div>
    <div class="page-footer"></div>
  </div>
</template>

<script>
import G from '@/g-core/G'
import Gload from '@/g-core/Gload'
import Enemy from '@/utils/enemy'
import Bump from 'bump.js'
import * as PIXI from 'pixi.js'
import SceneManager from '@/utils/SceneManager'
import { resources } from '@/utils/resources'
export default {
  data() {
    return {
      app: null,
      player: null,
      score: 0,
      enemys: [],
      sceneManager: new SceneManager(),
      scene: {
        gameScene: null,
        uiScene: null
      }
    }
  },
  async mounted() {
    this.app = G.create(this.$refs['main-stage'])
    await Gload.loadAll(resources)
    this.initScene()
    // setInterval(() => {
    //   this.addEnemy()
    //   setTimeout(() => {
    //     this.addEnemy()
    //   }, 100)
    // }, 500)
    // this.app.ticker.add(this.gameLoop)
  },
  methods: {
    gameLoop() {
      this.enemys.forEach(item => {
        item.update()
        if (this.check(this.scene.gameScene.player, item)) {
          this.removeEnemy(item)
        }
      })
    },
    // 初始化场景
    initScene() {
      this.scene.gameScene = this.sceneManager.getGameScene()
      this.scene.gameScene.initPlayer()
      this.scene.uiScene = this.sceneManager.getUiScene()
      this.scene.uiScene.initScore()
      this.app.stage.addChild(this.scene.gameScene)
      this.app.stage.addChild(this.scene.uiScene)
    },
    addEnemy() {
      const enemy = new Enemy()
      this.scene.gameScene.addChild(enemy)
      this.enemys.push(enemy)
    },
    removeEnemy(item) {
      this.sceneManager.scenes['ui-scene'].addScore(10)
      item.visible = false
    },
    check(s1, s2) {
      if (s1.visible == false || s2.visible == false) {
        return false
      }
      const bump = new Bump(PIXI)
      if (bump.hit(s1, s2)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.page-footer {
  height: env(safe-area-inset-bottom);
  height: constant(safe-area-inset-bottom);
  background: white;
}
.main-stage {
  position: relative;
  flex: 1;
  width: 100%;
  background: url('../assets/image/game-bg.png') no-repeat top;
  background-size: auto 100%;
  margin: auto;
}
</style>
