<template>
<div id="inputs">
    <h1 class="extraspacing">Add Blog Entry</h1>

    <p><label for="title">Title:</label><br />
        <input type="text" v-model.lazy="article.title" id="title" /></p>
    <p v-if="errors && errors.title" class="error">Title must be between 3 and 250 characters.</p>

    <!--   <p><label for="url">Filename (Enter a short filename without an extension and no spaces. E.g., blogtitle):</label><br />
        <input type="text" v-model.lazy="article.url" id="url" /></p>
    <p v-if="errors && errors.url" class="error">Filename must be between 3 and 250 characters, lowercase, without spaces.</p> -->

    <p><label for="date">Publish Date (Formatted: MM-DD-YYYY):</label><br />
        <input type="text" v-model.lazy="article.date" id="date" /></p>
    <p v-if="errors && errors.date" class="error">Publish date is required and should be published in MM-DD-YYYY format.</p>

    <p><label for="categories">Categories (Comma-Separated):</label><br />
        <input type="text" v-model.lazy="article.categories" id="categories" /></p>
    <p v-if="errors && errors.categories" class="error">At least one category is required, and multiple categories are to be comma-separated.</p>

    <p><label for="abstract">Abstract:</label><br />
        <textarea v-model.lazy="article.abstract" id="abstract"></textarea></p>
    <p v-if="errors && errors.abstract" class="error">Abstract must be at least 100 characters in length.</p>

    <p><label for="article">Article Content (Use inline body HTML):</label><br />
        <textarea v-model.lazy="article.article" id="article"></textarea></p>
    <p v-if="errors && errors.article" class="error">Article must be at least 100 characters in length, and use only plain and inline HTML elements.</p>

    <button v-on:click="addEntry">Add Entry</button>

    <div class="error" v-if="showConfirmation">Your entry was added.</div>
</div>
</template>

<script>
import {
    axios
} from "@/common/app.js";

export default {
    data() {
        return {
            showConfirmation: false,
            errors: null,
            article: {
                title: "Prepopulated Title",
                date: "05-11-2021",
                categories: "School, Vue",
                abstract: "This is a sample abstract. You should replace this with the actual article abstract. This abstract should be a short, non-formatted paragraph, or even just one or two sentences, but it does need to be at least 100 characters.",
                article: "<p>This is a sample article. You should replace this with the actual article.</p><p>This article can have limited and inline HTML. It will be written in a div and should not have any style sheets or JavaScript.</p><p>It needs to be at least 100 characters.</p>"
            }
        };
    },
    methods: {
        addEntry() {
            axios.post("/article", this.article).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmation = false;
                } else {
                    this.$emit("update-articles");
                    this.showConfirmation = true;
                }
            });
        },
    },
};
</script>

<style scoped>
#inputs {
    padding: 5px 20px 30px 20px;
}

label {
    font-weight: bold;
    font-size: 14pt;
}

input {
    width: 100%;
}

button {
    background-color: #1e7889;
    padding: 5px 20px;
    margin: -20px auto 20px auto;
    display: inline-block;
    border: 0.16em solid rgba(255, 255, 255, 0);
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    text-align: center;
    transition: all 0.2s;
    font-weight: bold;
}

input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
}

.extraspacing {
    margin-bottom: 30px;
}

.error {
    color: #891e42;
    font-weight: bold;
    font-size: 14pt;
    padding: 0 0 20px 0;
}
</style>
