<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>


export default {
  name: 'App',

}

</script>

<style>
#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  margin-top: 0px;
}
body{
  margin:0;
  padding:0;
  border:0
}
.el-popover.monitor-yt-popover{
  background-color: rgba(52, 154, 245, 0.5);
  border-color: #146ebd;
  color: honeydew;
  font-size: 15px;
}

  .monitor-yt-popover .el-popover__title {
    background: linear-gradient(to bottom, #ffff, #f8fdff, #acf5ff, #67eeff, #24d8ff);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 20px;
    text-align: center;
  }

  .monitor-yt-popover .popper__arrow::after {
    border-top-color: rgba(52, 154, 245, 0.4) !important;
  }
</style>

