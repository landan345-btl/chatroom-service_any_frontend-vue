declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

import Vue from 'vue'

declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $authenticaionSocket: any,
    $chatroomSocket: any,
  }
}