import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store'
import AuthHandler from './components/AuthHandler';
import UploadForm from './components/UploadForm';
import ImageList from './components/ImageList';

// ADD ROUTER
Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history', // Use browser router instead of hash router (avoid # at redirect)
    routes: [
        { path: '/', component: ImageList },
        { path: '/upload', component: UploadForm },
        { path: '/oauth2/callback', component: AuthHandler },
    ]
});

new Vue({
    store,
    render: h => h(App),
    router
}).$mount('#app');
