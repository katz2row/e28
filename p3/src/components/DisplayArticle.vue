<template>
<div id="article-content">
    <article-html v-bind:article="article"></article-html>

    <div class="previous" v-show="this.article.id > 1">
        <router-link v-bind:to="'/article/' + (article.id - 1)">Previous Article</router-link>
    </div>
    <div class="next" v-show="this.article.id < this.articles.length">
        <router-link v-bind:to="'/article/' + (article.id + 1)">Next Article</router-link>
        </div>
    <div style="clear: both;">&nbsp;</div>
</div>
</template>

<script>
import { axios } from '@/common/app.js';
import ArticleHTML from "@/components/ArticleHTML.vue";

export default {
    components: {
        "article-html": ArticleHTML,
    },
    props: {
        article: {
            type: Object
        },
    },
    data() {
        return {
            articles: [],
        };
    },
    mounted() {
        this.countArticles();
    },
    methods: {
        countArticles() {
            axios.get("article").then((response) => {
                this.articles = response.data.article;
            });
        },
    },
};
</script>

<style>
#article-content {
    padding: 5px 20px 30px 20px;
}

.previous {
    float: left;
    background-color: #1e8965;
    padding: 5px 20px;
    margin: -20px auto -10px auto;
    display: inline-block;
    border: 0.16em solid rgba(255, 255, 255, 0);
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    text-align: center;
    transition: all 0.2s;
}

.next {
    float: right;
    background-color: #1e6d89;
    padding: 5px 20px;
    margin: -20px auto -10px auto;
    display: inline-block;
    border: 0.16em solid rgba(255, 255, 255, 0);
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    text-align: center;
    transition: all 0.2s;
}

.previous a,
.next a {
    color: #f3e9ec;
}

.previous a:hover,
.next a:hover {
    color: #370c1a;
}
</style>
