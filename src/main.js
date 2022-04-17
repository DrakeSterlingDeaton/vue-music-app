import { createApp } from 'vue';
import App from './App.vue'; // imports the main app component
import store from './store'; // imports the vuex store
import router from './router'; // imports the router
import Icon from './directives/icon';
import VeeValidatePLugin from './includes/validations';
import { auth } from './includes/firebase';
import i18n from './includes/i18n';
import './registerServiceWorker';

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(i18n);
    app.use(store);
    app.use(router);
    app.use(VeeValidatePLugin);
    app.directive('icon', Icon);
    console.log('app loaded');
    app.mount('#app');
  }
});
