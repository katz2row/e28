<template>
<router-view v-for="article in articles" v-bind:key="article.id">
    <hr />
    <display-abstract v-bind:article="article"></display-abstract>
    <p class="readmore">
        <router-link v-bind:to="'/article/' + article.id" v-bind:key="article.id" data-test="read-more">Read More</router-link>
    </p>
</router-view>
<span style="display:none" data-test="article-count">{{this.articles.length}}</span>
</template>

<script>
import BlogAbstracts from '@/components/BlogAbstracts.vue';

export default {
    components: {
        "display-abstract": BlogAbstracts
    },
   emits: ["updateArticles"],
    data() {
        return {};
    },
    computed: {
        articles() {
            return this.$store.state.articles;
        }
    },
};
</script>

<style>
.readmore {
    padding: 5px 0 15px 20px;
    margin: 0 0 15px 0;
    font-weight: bold;
    font-size: 16px;
}
</style>
