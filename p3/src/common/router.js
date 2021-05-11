import {
    createRouter,
    createWebHistory
} from 'vue-router';

// Do we need this????
import {
    store
} from '@/common/store';

// Define all the routes of our application
const routes = [{
        path: '/',
        component: () => import('@/components/pages/Homepage.vue'),
    },
    {
        path: '/aboutme',
        component: () => import('@/components/pages/AboutMe.vue'),
    },
    {
        path: '/categories',
        component: () => import('@/components/pages/Categories.vue'),
    },
    {
        path: '/addentry',
        component: () => import('@/components/pages/AddEntry.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/account',
        component: () => import('@/components/pages/Account.vue'),
    },
    {
        path: '/article/:id',
        component: () => import('@/components/pages/Article.vue'),
        props: true,
    },
    {
        path: '/accessdenied',
        component: () => import('@/components/pages/AccessDenied.vue'),
    },

];

// Initialize our router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to) => {

    // Exact the meta information from our routes
    // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // Put the “decide what to do” code into a method so we can wait to invoke it
    // once we have the user data
    const decide = (user) => {
        if (requiresAuth && !user) { 
            // If they’re trying to access a requiresAuth route and they’re not logged in, 
            // they get sent to “Access Denied” page
            return '/accessdenied';
        } else {
            // Otherwise, allow them to intended destination
            return true;
        }
    }

    // If we don’t have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        let authUser = await store.dispatch('authUser');
        if (authUser !== null) {
            return decide(store.state.user);
        }
    } else {
        return decide(store.state.user);
    }
});

export {
    router
};