<template>
<div id="wrapper">
    <div id="header">
        <p>
            <a href="/"><img alt="P2 logo" src="@/assets/images/logo2.png"></a>
        </p>
    </div>

    <div id="page">
        <router-view v-on:update-articles="loadArticles" v-bind:articles="articles"></router-view>
    </div>

    <div id="footer">
        <nav>
            <ul>
                <li>
                    <router-link v-for="link in links" v-bind:key="link" v-bind:to="paths[link]">{{link}}</router-link>
                </li>
            </ul>
        </nav>
        <div style="clear: both;">&nbsp;</div>
        <div id="copyright">
            <p>&copy; Charity Katz. All rights reserved. Created for Spring 2021, DGMD E-28, Susan Buck. Design adapted from <a href="http://templated.co" rel="nofollow" target="_blank">TEMPLATED</a>.</p>
        </div>
    </div>
</div>
</template>

<script>
import {
    axios
} from '@/common/app.js';

export default {
    name: "App",
    emits: ["articles"],
    data() {
        return {
            articles: [],
            links: ["homepage", "about me", "categories", "add entry"],
            paths: {
                homepage: "/",
                "about me": "/aboutme",
                categories: "/categories",
                "add entry": "/addentry",
            },
        };
    },
    mounted() {
        this.loadArticles();
    },
    methods: {
        loadArticles() {
            axios.get("article").then((response) => {
                this.articles = response.data.article;
            });
        },
    },
};
</script>

<style src="@/assets/css/styles.css"></style>
