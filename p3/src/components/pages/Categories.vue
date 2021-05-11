<template>
<div class="content">
    <h1>Categories</h1>
    <ul class="clean-list">
        <li v-for="(category, id) in categories" v-bind:key="id">
            {{ category }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        categories() {
            let categories = this.articles.map((article) => {
                if (article.categories) {
                    return article.categories.split(",");
                }
            });
            let mergedCategories = [].concat.apply([], categories);
            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        },
        articles() {
            return this.$store.state.articles;
        },
    },
};
</script>

<style>
</style>
