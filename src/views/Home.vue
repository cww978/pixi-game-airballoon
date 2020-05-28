<template>
  <div class="page">
    <div ref="main-stage" class="main-stage">
      <div class="game-ui-score">得分： {{ score }}</div>
    </div>
    <div class="page-footer"></div>
  </div>
</template>

<script>
import G from '@/utils/G'
import Gload from '@/utils/Gload'
import Player from '@/utils/player'
import Enemy from '@/utils/enemy'
import Bump from 'bump.js'
import * as PIXI from 'pixi.js'
export default {
  data() {
    return {
      app: null,
      player: null,
      score: 0,
      enemys: []
    }
  },
  async mounted() {
    await Gload.loadAll()
    this.app = G.create(this.$refs['main-stage'])
    // this.initScene()
    this.addPlayer()
    // this.start()
    // setInterval(() => {
    //   this.addEnemy()
    //   setTimeout(() => {
    //     this.addEnemy()
    //   }, 100)
    // }, 500)
  },
  methods: {
    start() {
      this.app.ticker.add(() => {
        this.enemys.forEach(item => {
          item.update()
          if (this.check(this.player.getSprite(), item.getSprite())) {
            this.removeEnemy(item)
          }
        })
      })
    },
    // 初始化场景
    initScene() {},
    addPlayer() {
      const layers = G.getLayers()
      this.player = new Player('player')
      layers['game'].addChild(this.player.getSprite())
    },
    addEnemy() {
      const layers = G.getLayers()
      const enemy = new Enemy('player')
      layers['game'].addChild(enemy.getSprite())
      this.enemys.push(enemy)
    },
    removeEnemy(item) {
      this.score += 10
      item.getSprite().visible = false
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
}
.game-ui-score {
  position: absolute;
  left: 0;
  top: 0;
  color: #f4da25;
  padding: 1em;
  font-size: 24px;
}
</style>
