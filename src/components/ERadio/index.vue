<template>
  <div>
    <el-radio v-model="radio" label="1">
      <slot></slot>
    </el-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: '1',
      };
    },
  };
</script>