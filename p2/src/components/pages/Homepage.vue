<template>
<router-view v-for="article in articles" v-bind:key="article.id">
    <hr />
    <display-abstract v-bind:article="article"></display-abstract>
    <p class="readmore">
        <router-link v-bind:to="'/article/' + article.id" v-bind:key="article.id">Read More</router-link>
    </p>
</router-view>
</template>

<script>
import BlogAbstracts from '@/components/BlogAbstracts.vue';

export default {
    components: {
        "display-abstract": BlogAbstracts
    },
    props: {
        articles: {
            type: Array,
            default: null,
        },
    },
    emits: ["updateArticles"],
    data() {
        return {};
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
