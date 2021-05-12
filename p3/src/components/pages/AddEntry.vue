<template>
<div id="inputs">
    <h1 class="extraspacing">Add Blog Entry</h1>

    <p><label for="title">Title:</label><br />
        <input type="text" v-model.lazy="article.title" id="title" v-on:blur="validate" data-test="title-entry"/><br />
        <small>Min: 3; Max: 250 characters</small></p>
    <server-errors v-if="errors && 'title' in errors" v-bind:errors="errors.title" class="error"></server-errors>

    <p><label for="date">Publish Date:</label><br />
        <input type="text" v-model.lazy="article.date" id="date" v-on:blur="validate" data-test="date-entry" /><br />
        <small>Format date with MM-DD-YYYY</small></p>
    <server-errors v-if="errors && 'date' in errors" v-bind:errors="errors.date" class="error"></server-errors>

    <p><label for="categories">Categories:</label><br />
        <input type="text" v-model.lazy="article.categories" id="categories" v-on:blur="validate" data-test="categories-entry" /><br />
        <small>Enter categories as a comma-separated list. At least one category is required.</small></p>
    <server-errors v-if="errors && 'categories' in errors" v-bind:errors="errors.categories" class="error"></server-errors>

    <p><label for="abstract">Abstract:</label><br />
        <textarea v-model.lazy="article.abstract" id="abstract" v-on:blur="validate" data-test="abstract-entry"></textarea><br />
        <small>Min: 100 characters</small></p>
    <server-errors v-if="errors && 'abstract' in errors" v-bind:errors="errors.abstract" class="error"></server-errors>

    <p><label for="article">Article Content (Use inline body HTML):</label><br />
        <textarea v-model.lazy="article.article" id="article" v-on:blur="validate" data-test="article-entry"></textarea><br />
        <small>Min: 100 characters. Inline, basic HTML elements are allowed and should be used for formatting.</small></p>
    <server-errors v-if="errors && 'article' in errors" v-bind:errors="errors.article" class="error"></server-errors>

    <button v-on:click="addEntry" data-test="add-button">Add Entry</button>

    <transition name="fade">
        <div class="confirm" v-if="showConfirmation" data-test="confirmation-message">Your entry was added.</div>
    </transition>
    <div class="error" v-if="errors">
        Please correct the above errors.
    </div>
</div>
</template>

<script>
import {
    axios
} from "@/common/app.js";
import ServerErrors from "@/components/ServerErrors.vue";
import Validator from 'validatorjs';

export default {
    components: {
        "server-errors": ServerErrors,
    },
    data() {
        return {
            showConfirmation: false,
            errors: null,
            article: {},
        };
    },
    methods: {
        validate() {
            let validator = new Validator(this.article, {
                title: "required|between:3,250",
                abstract: "required|min:100",
                date: "required|size:10|alpha_dash",
                categories: "required",
                article: "required|min:100",
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }

            return validator.passes();
        },
        addEntry() {
            if(this.validate()) {
            axios.post("/article", this.article).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmation = false;
                } else {
                    this.$emit("update-articles");
                    this.showConfirmation = true;
                    setTimeout(() => (this.showConfirmation = false), 3000);
                }
            });
            }
        },
    },
};
</script>

<style>
#inputs {
    padding: 5px 20px 30px 20px;
}
</style>
