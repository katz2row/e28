import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Homepage from '@/components/pages/Homepage.vue';
import AboutMe from '@/components/pages/AboutMe.vue';
import Categories from '@/components/pages/Categories.vue';
import Article from '@/components/pages/Article.vue';
import AddEntry from '@/components/pages/AddEntry.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: Homepage },
    { path: '/aboutme', component: AboutMe },
    { path: '/categories', component: Categories },
    { path: '/addentry', component: AddEntry },
    { path: '/article/:id', component: Article, props: true },
    ]
});


    let tinymceScript = document.createElement('script')
tinymceScript.setAttribute('src', 'https://cdn.tiny.cloud/1/405u4ei43xep8lur4w8xbyeree64bypy3zohnk1lrgtcrvk8/tinymce/5/tinymce.min.js')
document.head.appendChild(tinymceScript)
tinymceScript.setAttribute('referrerpolicy', 'origin')

createApp(App).use(router).mount('#app');