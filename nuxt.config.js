export default {
    srcDir: 'src/',
    head: {
      titleTemplate: 'Nuxt.js',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
    cache: {
      max: 1000,
      maxAge: 900000
    },
    subFolders: false
  }