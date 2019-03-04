<template>
  <html class="">
    <Header><Header/>
  <section class="container">
    <div>
      <h1 class="title">
        nuxt
      </h1>
      <h2 class="subtitle">
        My tiptop TEST Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
  </html>

</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

import Header from '@/commons/Header/index.vue'; // @ is an alias to /src
import Nav from '@/commons/Nav/index.vue'; // @ is an alias to /src
import Footer from '@/commons/Footer/index.vue'; // @ is an alias to /src

import AxiosHelper from '@/helpers/Axios';
import { warn } from 'vue-class-component/lib/util';
let oAxiosHelper = new AxiosHelper();

@Component({
  name: 'Test',
  components: {
    Header,
    Nav,
    Footer,
  },
})
class Index extends Vue {
  public created(): void {

    // debugger;
  }
}
export default Index;
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
