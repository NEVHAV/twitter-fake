<template>
    <div>
        <nav class="navbar navbar-expand-lg top-header row">
            <div class="col-2"></div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="Login">Logout</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row">
            <div class="card-1">
                <div class="user row">
                    <div class="col-4">
                        <i class="user-icon fas fa-6x fa-user-circle"></i>
                    </div>
                    <div class="user-info col-8">
                        <h4 class="username">ABC</h4>
                        <p class="user-mail">abc@gmail.com</p>
                    </div>
                </div>
                <div class="follow">
                    <h5 class="follow-tweet">Tweets</h5>
                    <h5 class="follow-count">113</h5>
                </div>
            </div>
            <div class="card-2">
                <div class="card-post row">
                    <div class="col-1">
                        <i class="icon fas fa-3x fa-user-circle"></i>
                    </div>
                    <div class="input-post col-11">
                        <input v-model="newPost" type="text" class="form-control input-group input-group-myself"
                               placeholder="What's happening?" aria-label="post" aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="card-tweet row" id="post" v-for="(post) in posts">
                    <div class="col-1">
                        <i class="icon fas fa-4x fa-user-circle tweet-ava"></i>
                    </div>
                    <div class="col-11 tweet-post">
                        <h5 class="tweet-header">{{ post.name }} <a class="tweet-mail">{{ post.address }} - 4 mins</a>
                        </h5>
                        <p class="tweet">
                            {{ post.description }}
                        </p>
                        <a class="love-count"><i class="love far fa-lg fa-heart"></i> {{ post.rating_count }}</a>
                    </div>
                </div>
            </div>
            <div class="card-3">
                <h4 class="col-12 newest-header">New users</h4>
                <div v-for="(user, index) in users">
                    <div class="row" v-if="index <= 2 ">
                        <div class="col-4">
                            <i class="user-icon-new fas fa-5x fa-user-circle"></i>
                        </div>
                        <div class="newest-info col-8">
                            <h5 class="username">{{ user.username }}</h5>
                            <p class="user-mail" style="font-size: 15px !important;">{{ user.email }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'timeline',
        data() {
            return {
                posts: null,
                users: null,
                newPost: null
            }
        },
        mounted() {
            this.getPost();
            this.getUser();
        },
        methods: {
            getPost() {
                axios
                    .get('http://localhost:3000/api/restaurants')
                    .then(response => {
                        this.posts = response.data.data
                    })
            },
            getUser() {
                axios
                    .get('http://localhost:3000/api/users')
                    .then(response => {
                        this.users = response.data.data
                    })
            }
        }
    }
</script>
