<template>
    <body>
    <title>Twter-Register</title>
    <nav class="navbar navbar-expand-lg top-header row">
        <div class="col-2"></div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a href="#">HOME</a>
                </li>
                <li class="nav-item">
                    <a href="login.html">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="card">
        <div class="card-body">
            <h1 class="title">Register</h1>
            <div class="row register">
                <div class="input-group col-6">
                    <div class="input-group-prepend input-pass">
                        <input v-model="newUser.username" class="input-group" type="e" placeholder="Username">
                    </div>
                </div>
                <div class="input-group col-6">
                    <div class="input-group-prepend input-pass">
                        <input v-model="newUser.email" class="input-group" type="email" placeholder="Email">
                    </div>
                </div>
                <div class="input-group col-6">
                    <div class="input-group-prepend input-pass">
                        <input v-model="newUser.password" class="input-group" type="password" placeholder="Password">
                    </div>
                </div>
                <div class="input-group col-6">
                    <div class="input-group-prepend input-pass">
                        <input v-model="newUser.rePassword" class="input-group" type="password"
                               placeholder="Retype password">
                    </div>
                </div>
            </div>
            <div class="register">
                <button type="button" class="btn btn-login" v-on:click="postNewUser">Register</button>
            </div>
            <div class="card-footer">
                <p class="footer">Have an account? Back to <a href="login">log in</a> right now!</p>
            </div>
        </div>
    </div>
    </body>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Signup",
        data() {
            return {
                newUser: {
                    username: null,
                    email: null,
                    password: null,
                    rePassword: null
                }
            }
        },
        methods: {
            postNewUser() {
                console.log(this.newUser);
                axios
                    .post('http://localhost:3000/api/users', {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            'username': this.newUser.username,
                            'email': this.newUser.email,
                            'password': this.newUser.password,
                            'password_confirmation': this.newUser.rePassword
                        })
                    })
                    .then(response => {
                        console.log(response);
                        console.log('success')
                    })
                    .catch(error => {
                        console.log('error')
                    })
            }
        }
    }
</script>

<style scoped>

</style>
