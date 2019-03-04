<template>
  <html class="">
  <section class="container">
    <div>
      <h1 class="title">
        nuxt
      </h1>
      <h2 class="subtitle">
        My tiptop INDEX Nuxt.js project
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

<script>
import { Component, Vue } from 'vue-property-decorator';

class Index extends Vue {

}
export default Index;
</script>

<style scoped lang="scss">
.top{background-color: #ebebeb;height: 30px;}
    .nav_top,.nav_top1,.nav_top2{width: 1200px; margin: 0 auto;}
    .top .nav_top{font-size: 14px;line-height: 30px;}
    .top .nav_top img{margin-right: 5px; margin-top: -3px;}
      .FloatRight{float: right;}
  .top_logo{height: 100px;}
  .top_nav{height: 50px;background-color: #37b0e9;}
    .nav_top2 ul li{text-align: center;height: 50px;width: 170px;float: left;font-size: 16px;color: white;line-height: 50px;}
    .displayN{display: none !important;}
    .displayB{display: block !important;}
  .top_content{background-color: #ebebeb;padding-bottom: 30px;}
    .content{width: 1200px; margin: 0 auto;padding-top: 20px;}
      .content>div{background: #FFFFFF;border-top: 2px solid #37b0e9;padding: 20px;margin-bottom: 20px;}
        .content>div table th{height: 50px;background-color: #ebebeb;width: 400px;text-align: center;    line-height: 50px;}
        .content>div>table th:first-child{width: 600px;}
        .content>div>table th:last-child{width: 200px;}
        .content>div table td{height: 75px;text-align: center;line-height: 100px;position:relative;}
         .content>div table tr td:first-child{line-height: 50px;}
          .content>div table td .img{width: 50px;height: 50px;left: 111px;top: 23px;position: absolute;}
          .content>div table td p{position: absolute;margin-top: 6px;margin-left: 174px;}
          .content>div table td div{position: absolute;margin-left: 166px;margin-top: 41px;}
           .content>div table td div span{width: 30px; height: 30px; border-radius: 50%; background-color: #37b0e9; display: inline-block; line-height: 30px; color: white; margin-left: 20px;}

            .content>div table tr:nth-child(odd){background-color: #e9e9e9;}
     @media all and (max-width: 820px) {
        nav{width: 75rem;}
        main{width: 75rem;}
        .content>div>table{width:73rem;font-size:45px; }
        .content>div>table th{height: 100px;}
        .content>div>table tr td:first-child{width:60%;}
        .content>div table td img{width: 70px; height: 70px; position: relative; top: 56px;} 
        .content>div table td .img{width: 150px; height: 150px; left: 32px; top: 23px;}
        .content>div table td div{margin-left: 178px; margin-top: 110px; }
        .content>div table td div span{width: 75px; height: 75px; line-height: 75px;}

      }
</style>
