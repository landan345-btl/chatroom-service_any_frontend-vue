<template>
  <div>
    <Header/>
    <main id="main" role="main">
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/commons/Header/index.vue'
import Footer from '~/commons/Footer/index.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
</style>