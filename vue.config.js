module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'Index Page'
    }
  },
  configureWebpack: {
    externals: {
      // PIXI: 'PIXI'
    }
  }
}
