<!--
 * @Author: lts
 * @Date: 2020-12-29 16:43:00
 * @LastEditTime: 2020-12-30 12:48:14
 * @FilePath: \admin\src\App.vue
-->
<template>
  <div class="app">
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  setup() {},
};
</script>
<style lang="less">
.app {
  height: 100vh;
}
</style>
