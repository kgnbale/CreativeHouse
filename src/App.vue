<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body, html {
    width: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
}
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: -apple-system,
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Ubuntu',
  'Helvetica Neue',
  Helvetica,
  Arial,
  'PingFang SC',
  'Hiragino Sans GB',
  'Microsoft Yahei UI',
  'Microsoft Yahei',
  'Source Han Sans CN',
  sans-serif;
}
</style>
