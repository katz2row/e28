<template>
<div id="account-page">
    <div v-if="user">
        <h2 data-test="welcome-message" class="extraspacing">Hi, {{ user.name }}!</h2>
        <button v-on:click="logout" data-test="logout-button">
            Logout
        </button>
    </div>

    <div v-else id="loginForm">
        <h2 class="extraspacing">Register or Login</h2>

        <button v-on:click="registration = true; userfields = true; loginselect = false" data-test="registration-button">
            Register
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button v-on:click="loginselect = true; userfields = true; registration = false" data-test="loginselect-button">
            Login
        </button>

        <!-- Start registration form -->
        <span v-show="registration">
            <h1 class="extraspacing">Register Your Account</h1>
            <p>To be able to contribute to the blog, register for an account, which will give you access to create new entries.</p>

            <div>
                <label>
                    Full Name:
                    <input type="text" v-model="data.name" data-test="name-input" id="username" v-on:blur="validate" />
                </label><br />
                <server-errors v-if="errors && 'name' in errors" v-bind:errors="errors.name" class="error"></server-errors>
            </div>
        </span>

        <!-- Start login form -->
        <span v-show="loginselect">
            <h1 class="extraspacing">Login</h1>
            <p>Using the email address and password you entered during registration, log in to your account, and you can then add blog entries.</p>
        </span>

        <!-- Start standard user fields form -->
        <span v-show="userfields">
            <div>
                <label>
                    Email:
                    <input type="text" v-model="data.email" data-test="email-input" id="useremail" v-on:blur="validate" />
                </label><br />
                <server-errors v-if="errors && 'email' in errors" v-bind:errors="errors.email" class="error"></server-errors>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" v-model="data.password" data-test="password-input" id="userpassword" v-on:blur="validate" />
                </label><br />
                <server-errors v-if="errors && 'password' in errors" v-bind:errors="errors.password" class="error"></server-errors>
            </div>
        </span>

        <button v-on:click="register" data-test="register-button" v-show="registration">Register</button>
        <button v-on:click="login" data-test="login-button" v-show="loginselect">Login</button>

        <transition name="fade">
            <div class="confirm" v-if="showConfirmation">Success!</div>
        </transition>

        <div class="error" v-if="errors">
            Please correct the above errors.
        </div>
    </div>
</div>
</template>

<script>
import {
    axios
} from '@/common/app.js';
import ServerErrors from '@/components/ServerErrors.vue';
import Validator from 'validatorjs';

export default {
    components: {
        "server-errors": ServerErrors,
    },
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
            data: {
                name: "Jill Harvard",
                email: "jill@harvard.edu",
                password: "asdfasdf",
            },
            errors: null,
            showConfirmation: false,
            registration: false,
            loginselect: false,
            userfields: false,
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        validate() {
            let validator = new Validator(this.data, {
                name: "required|between:2,250|string",
                email: "required|email",
                password: "required|string|between:8,16",
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }

            return validator.passes();
        },
        register() {
             if(this.validate()) {
            axios.post("/register", this.data).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmation = false;
                } else {
                        axios.post("login", this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit("setUser", response.data.user);}})
                }
            });
             }
        },
        login() {
             if(this.validate()) {
            axios.post("login", this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit("setUser", response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
             }
        },
        logout() {
            axios.post("logout").then((response) => {
                if (response.data.success) {
                    this.$store.commit("setUser", false);
                }
            });
        },
    },
};
</script>

<style>
#account-page {
    padding: 5px 20px 30px 20px;
}

a.button {
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
</style>
