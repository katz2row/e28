# Project 3
+ By: Charity Katz
+ Production URL: <http://e28p3.katz2row.me>

## Outside resources
- Images for Access Denied page
    -- Homer nope: <https://media4.giphy.com/media/eJiX4lpUuD2fxmVZ8g/200.gif>
    -- Danny Davito nope: <https://i.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy.gif>
    -- Access Denied: <https://i.makeagif.com/media/5-09-2015/al4lVy.gif>

## Notes for instructor
- I should have said this on P2, but I specifically did not use the "created_at" field for date because everything would have the same dates since I was working on the data in real time, and I wanted it to have some differnt dates. I can't say it is a logical reason, but since I had pulled very old blog posts from a very old blog, I just wanted them to be related to their original post dates. In a real world application, it would have made more sense to use the "created_at" field from the database to populate that, and leave the date field off my new entry form.
- It looks like an XMLHttpRequest I used in P2 with no errors is now showing a warning in the console, perhaps just based of some crazy timing or because of the additions for P3, but based on just how much time it took me to get it working and because it is a warning about deprecation and now an error or issue with the code components for this course, I am leaving the referenced code in, which is on the ArticleHTML.vue component.

## How is authentication being used in your application?
- During registration, also logs in user
- Access to Add an Entry is denied unless the user is authenticated. When authenticated, the user can add a new blog entry.

## What data entities of your application are being managed via Vuex?
- Articles
- User (this appears to be required for the authentication to work properly, but is being managed via Vuex)

## E2E Testing screenshot
![ADD Blog passing E2E tests](https://raw.githubusercontent.com/susanBuck/e28/main/zipfoods/e2e-tests.png)