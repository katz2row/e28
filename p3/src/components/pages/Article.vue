<template>
<div>
    <div v-if="articleNotFound">
        <p>{{article.title}} not found.</p>
        <router-link v-bind:to="'/'">Go back to homepage</router-link>
    </div>

    <div v-else-if="article">
        <router-view v-bind:key="$route.fullPath">
        <display-article v-bind:article="article"></display-article>
        </router-view>
    </div>
</div>
</template>

<script>
import DisplayArticle from "@/components/DisplayArticle.vue";

export default {
    components: {
        "display-article": DisplayArticle
    },
    props: {
        id: {
            type: String,
        },
    },
    data() {
        return {};
    },
    computed: {
        articles() {
            return this.$store.state.articles;
    },
        article() {
            return this.$store.getters.getArticleById(this.id);
        },
        articleNotFound() {
            return this.article == null;
        },
    },
};
</script>

<style>

</style>
