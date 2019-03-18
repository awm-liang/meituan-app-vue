<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 100px;
  height: 100%;
  min-width: 320px;
  overflow-x: hidden;
}
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 0.28em;
  line-height: 1;
  color: #333;
  background-color: #f0efed;
}
.ab::after,
.ab::before {
  content: " ";
  display: block;
  clear: both;
}
a {
  text-decoration: none;
}

.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: 0.5s ease;
}

.v-leave {
  opacity: 0;
}
.v-leave-to {
  opacity: 1;
  // position: absolute;
}
.v-leave-active {
  transition: 0.5s ease;
}

.mint-toast-text {
  font-size: 0.25rem !important;
  padding: 0.2rem 0.4rem !important;
}
.mint-toast {
  border-radius: 0.2rem !important;
}
.mint-button--default {
  margin-right: .08rem;
}
</style>
