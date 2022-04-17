<template>
  <div>
      <app-header />

        <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>

      <app-player />

      <app-auth></app-auth>

  </div>
</template>

<script>
import AppPlayer from './components/Player.vue';
import AppHeader from './components/Header.vue';
import AppAuth from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50; //test
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
