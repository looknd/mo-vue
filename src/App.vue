<template>
  <div id="app" class="app">
    <app-aside></app-aside>
    <div class="app-main">
      <header class="app-header mui-clearfix">
        <div class="mo-right">
          <a href="https://github.com/S-mohan/mo-vue" class="mo-right">github项目地址</a>
          <iframe src="https://ghbtns.com/github-btn.html?user=S-mohan&repo=mo-vue&type=star&count=true" frameborder="0" scrolling="0" height="20px"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=S-mohan&repo=mo-vue&type=fork&count=true" frameborder="0" scrolling="0" height="20px"></iframe>
        </div>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppAside from './view/aside'
  export default {
    name: 'app',
    components : {
      AppAside
    }
  }
</script>

<style lang="scss">
  @import '~scss/base.scss';
  .app {
    padding-left: rem(240);
    .app-main {
      padding: 4rem 1rem;
      position: relative;
      .app-scroll {
        position: relative;
        overflow: auto;
        @include clearFix; 
      }
      .demo-name {
        font-size: 2rem;
      }
      .demo-title {
        font-size: rem(20);
        margin-top: 3rem;
        color: $color-negative;
        i {
          font-size: rem(24);
          vertical-align: middle;
          position: relative;
          top: rem(-2);
          margin-right: rem(5);
        }
      }
    }
    .app-aside {
      z-index: 11;
      background-color: #fff;
    }
    .app-header {
      position: fixed;
      left: 0;
      right: 0;
      height: 3rem;
      background-color: rgba(#fff, .75);
      z-index: 10;
      top: 0;
      padding: rem(10 20 10 260);
      line-height: 28px;
      font-size: 1rem;
      box-shadow: $box-shadow;
      iframe {
        display: inline;
        max-width: 6rem;
        margin-top: 5px;
      }
    }
  }
</style>
