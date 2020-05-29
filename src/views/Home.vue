<template>
  <div class="page">
    <div ref="main-stage" class="main-stage"></div>
    <div class="page-footer"></div>
  </div>
</template>

<script>
import G from '@/g-core/G'
import Gload from '@/g-core/Gload'
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
    //   this.scene.gameScene.generateEmemy()
    // }, 500)
    this.app.ticker.add(this.gameLoop)
  },
  methods: {
    gameLoop() {
      this.scene.gameScene.update()
    },
    // 初始化场景
    initScene() {
      this.scene.gameScene = this.sceneManager.getGameScene()
      this.scene.gameScene.initPlayer()
      this.scene.gameScene.on('play:hit', this.handleHit)
      this.scene.uiScene = this.sceneManager.getUiScene()
      this.scene.uiScene.initScore()
      this.app.stage.addChild(this.scene.gameScene)
      this.app.stage.addChild(this.scene.uiScene)
    },
    handleHit() {
      this.sceneManager.scenes['ui-scene'].addScore(10)
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
