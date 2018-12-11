<template>
    <div>
        <title>Login</title>
        <nav class="navbar navbar-expand-lg top-header row">
            <div class="col-2"></div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="card">
            <div class="card-body">
                <h1 class="title">Log in</h1>
                <p style="color: red; font-style: italic" v-show="logIn_alert">Your username or your password is wrong! Please try again!</p>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <input class="input-group" type="email" placeholder="Username" v-model="name">
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-group-prepend input-pass">
                        <input class="input-group" type="password" placeholder="Password" v-model="password">
                    </div>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Remember me
                    </label>
                </div>
                <button type="button" class="btn btn-login" v-on:click="logIn">Log in</button>
                <div class="card-footer">
                    <p class="footer">New member? <a href="/signup">Sign up</a> with us now!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'login',
        data() {
            return {
                name: null,
                password: null,
                logIn_alert: false
            };
        },
        methods: {
            logIn() {
                axios
                    .post('https://master-hieu.firebaseapp.com/v1/auth/access-token', {
                        name: this.name,
                        password: this.password
                    })
                    .then(response=>{
                        if (response.data.success) {
                            console.log(response);
                            localStorage.logged = response.data.token;
                            localStorage.logged_id = this.name;
                            this.$router.push('Timeline');
                        }
                        else {
                            this.logIn_alert = true;
                        }
                    })
            },
        }
    }

</script>

<style scoped>
    @import "../assets/myself.css";
</style>
