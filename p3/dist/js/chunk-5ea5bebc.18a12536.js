(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ea5bebc"],{"193d":function(t,e,c){},5513:function(t,e,c){"use strict";c("b7cc")},"71ea":function(t,e,c){"use strict";c("193d")},9175:function(t,e,c){"use strict";c.r(e);var i=c("7a23"),n={key:0},r=Object(i["g"])("Go back to homepage"),a={key:1};function l(t,e,c,l,u,o){var s=Object(i["v"])("router-link"),d=Object(i["v"])("display-article"),b=Object(i["v"])("router-view");return Object(i["q"])(),Object(i["e"])("div",null,[o.articleNotFound?(Object(i["q"])(),Object(i["e"])("div",n,[Object(i["h"])("p",null,Object(i["x"])(o.article.title)+" not found.",1),Object(i["h"])(s,{to:"/"},{default:Object(i["C"])((function(){return[r]})),_:1})])):o.article?(Object(i["q"])(),Object(i["e"])("div",a,[Object(i["h"])(b,{key:t.$route.fullPath},{default:Object(i["C"])((function(){return[Object(i["h"])(d,{article:o.article},null,8,["article"])]})),_:1})])):Object(i["f"])("",!0)])}var u={id:"article-content"},o={class:"previous","data-test":"previous-article"},s=Object(i["g"])("Previous Article"),d={class:"next","data-test":"next-article"},b=Object(i["g"])("Next Article"),h=Object(i["h"])("div",{style:{clear:"both"}}," ",-1);function j(t,e,c,n,r,a){var l=Object(i["v"])("article-html"),j=Object(i["v"])("router-link");return Object(i["q"])(),Object(i["e"])("div",u,[Object(i["h"])(l,{article:c.article},null,8,["article"]),Object(i["D"])(Object(i["h"])("div",o,[Object(i["h"])(j,{to:"/article/"+(c.article.id-1)},{default:Object(i["C"])((function(){return[s]})),_:1},8,["to"])],512),[[i["A"],this.article.id>1]]),Object(i["D"])(Object(i["h"])("div",d,[Object(i["h"])(j,{to:"/article/"+(c.article.id+1)},{default:Object(i["C"])((function(){return[b]})),_:1},8,["to"])],512),[[i["A"],this.article.id<this.articles.length]]),h])}var O=c("0091"),f={"data-test":"article-h1"},p={class:"article-content","data-test":"article-blog"};function v(t,e,c,n,r,a){return Object(i["q"])(),Object(i["e"])(i["a"],null,[Object(i["h"])("h1",f,Object(i["x"])(c.article.title),1),Object(i["h"])("div",p,[Object(i["h"])("span",{"w3-include-html":"/blog-entries/"+c.article.url+".html"},null,8,["w3-include-html"]),Object(i["h"])("span",{innerHTML:c.article.article},null,8,["innerHTML"])])],64)}var m={props:{article:{type:Object}},data:function(){return{}},computed:{articles:function(){return this.$store.state.articles}},mounted:function(){function t(){var e,c,i,n,r;for(e=document.getElementsByTagName("*"),c=0;c<e.length;c++)if(i=e[c],n=i.getAttribute("w3-include-html"),n)return r=new XMLHttpRequest,r.onreadystatechange=function(){4==this.readyState&&(200==this.status&&(i.innerHTML=this.responseText),404==this.status&&(i.innerHTML="Page not found."),i.removeAttribute("w3-include-html"),t())},r.open("GET",n,!0),void r.send()}t()}};c("5513");m.render=v;var g=m,y={components:{"article-html":g},props:{article:{type:Object}},data:function(){return{articles:[]}},mounted:function(){this.countArticles()},methods:{countArticles:function(){var t=this;O["a"].get("article").then((function(e){t.articles=e.data.article}))}}};c("71ea");y.render=j;var w=y,k={components:{"display-article":w},props:{id:{type:String}},data:function(){return{}},computed:{articles:function(){return this.$store.state.articles},article:function(){return this.$store.getters.getArticleById(this.id)},articleNotFound:function(){return null==this.article}}};k.render=l;e["default"]=k},b7cc:function(t,e,c){}}]);
//# sourceMappingURL=chunk-5ea5bebc.18a12536.js.map