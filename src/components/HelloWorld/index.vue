<template>

</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
class HelloWorld extends Vue {
  @Prop() private msg!: string;
}

export default HelloWorld;
</script>
