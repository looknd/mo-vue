<template>
  <div id="app" class="app">
    <app-aside></app-aside>
    <div class="app-main">
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
      padding: 1rem;
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
  }
</style>
