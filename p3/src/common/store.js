import {
    createStore,
    createLogger
} from 'vuex'
import {
    axios
} from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            articles: [],
            user: null,
        }
    },
    mutations: {
        setArticles(state, payload) {
            state.articles = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        getArticles(context) {
            axios.get("article").then((response) => {
                context.commit('setArticles', response.data.article);
            });
        },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },
    },
    getters: {
        getArticleById(state) {
            return function(id) {
                return state.articles.filter((article) => {
                    return article.id == id;
                }, id)[0];
            }
        }
    }
})