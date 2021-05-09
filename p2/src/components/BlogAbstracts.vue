<template>
<div class="abstract">
    <h1>{{article.title}}</h1>
    <p class="date"><strong><em>{{article.date}}</em></strong></p>
    <p class="categories"><em>Categories:</em> {{article.categories}}</p>
    <p style="clear: both;">&nbsp;</p>
    <p>{{article.abstract}}</p>
</div>
</template>

<script>
export default {
    
    props: {
        article: {
            type: Object,
        },
    },
    data() {
        return {};
    },
};
</script>

<style>
.abstract {
    padding: 5px 20px;
}

.date {
    float: left;
}

.categories {
    float: right;
}
</style>
