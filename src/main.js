import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import './assets/main.css'
import VeeValidatePLugin from './includes/validation.js'
import { auth } from './includes/firebase.js';

let app;

auth.onAuthStateChanged( () => {

    if (!app) {
        app = createApp(App)
    
        app.use(store)
        app.use(router)
        app.use(VeeValidatePLugin)
    
        app.mount('#app')
    }

});