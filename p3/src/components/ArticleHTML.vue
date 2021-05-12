<template>
<h1 data-test="article-h1">{{article.title}}</h1>
<!-- The first span is used for the files that come pre-populated with this site. 
The second span is used when the article comes from the add an entry due to being unable to figure out how to create a file on form submit. -->
<div class="article-content" data-test="article-blog">
    <span v-bind:w3-include-html="'/blog-entries/' + article.url + '.html'"></span>
    <span v-html="article.article"></span>
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
    computed: {
        articles() {
            return this.$store.state.articles;
        }
    },
    mounted() {
        function includeHTML() {
            var z, i, elmnt, file, xhttp;
            /* Loop through a collection of all HTML elements: */
            z = document.getElementsByTagName("*");
            for (i = 0; i < z.length; i++) {
                elmnt = z[i];
                /*search for elements with a certain atrribute:*/
                file = elmnt.getAttribute("w3-include-html");
                if (file) {
                    /* Make an HTTP request using the attribute value as the file name: */
                    xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4) {
                            if (this.status == 200) {
                                elmnt.innerHTML = this.responseText;
                            }
                            if (this.status == 404) {
                                elmnt.innerHTML = "Page not found.";
                            }
                            /* Remove the attribute, and call this function once more: */
                            elmnt.removeAttribute("w3-include-html");
                            includeHTML();
                        }
                    }
                    xhttp.open("GET", file, true);
                    xhttp.send();
                    /* Exit the function: */
                    return;
                }
            }
        }

        includeHTML();
    },
};
</script>

<style>
.article-content {
    padding: 5px 20px 20px 20px;
}
</style>
