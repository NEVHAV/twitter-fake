<template>
    <div>
        <title>Profile</title>
        <nav class="navbar navbar-expand-lg top-header row">
            <div class="col-2"></div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <RouterLink to="Timeline">HOME</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-on:click="logOut">Logout</a>
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
                        <h4 class="username">{{ profile.name }}</h4>
                        <p class="user-mail">{{ profile.email }}</p>
                    </div>
                </div>
                <div class="follow">
                    <h5 class="follow-tweet">Tweets</h5>
                    <h5 class="follow-count">{{ tweet_count }}</h5>
                </div>
            </div>
            <div class="card-2">
                <div class="card-post row">
                    <div class="col-1">
                        <i class="icon fas fa-3x fa-user-circle"></i>
                    </div>
                    <div class="input-post col-9">
                        <input v-model="newPost" type="text" class="form-control input-group input-group-myself"
                               placeholder="What's happening?" aria-label="post" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-post col-2">
                        <button type="button" class="btn btn-post" v-on:click="postPost">Post</button>
                    </div>
                </div>
                <div class="card-tweet row" id="post" v-for="(post, index) in orderedPosts " :key="index">
                    <div class="col-1">
                        <i class="icon fas fa-4x fa-user-circle tweet-ava"></i>
                    </div>
                    <div class="col-11 tweet-post">
                        <div class="row">
                            <h5 class="col-10 tweet-header">{{ post.username }} <a class="tweet-mail">{{ post.email }} -
                                {{post.created_at}}</a>
                            </h5>
                            <a class="col-2">
                                <i class="fas fa-trash" v-on:click="deletePost(index)" style="cursor: pointer"></i> &emsp;
                                <i class="fas fa-edit" style="cursor: pointer"></i>
                            </a>
                        </div>
                        <p class="tweet">
                            {{ post.content }}
                        </p>
                        <!--<a class="love-count"><i class="love far fa-lg fa-heart"></i> {{ post.like_count }}</a>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'profile',
        data() {
            return {
                post_id: null,
                posts: null,
                newPost: null,
                id: null,
                profile: null,
                tweet_count: null,
            }
        },
        mounted() {
            if (localStorage.logged) {
                var base64Url = localStorage.logged.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                this.id = JSON.parse(window.atob(base64)).id;
                this.getProfile();
                this.getPost();
            }
            else {
                this.$router.push('Login');
            }
        },
        methods: {
            getPost() {
                axios
                    .get('https://master-hieu.firebaseapp.com/v1/users/' + this.id + "/posts")
                    .then(response => {
                        const i = [];
                        const u = [];
                        response.data.forEach(function (e) {
                            u.push(Object.keys(e)[0]);
                            i.push(Object.values(e)[0]);
                        });
                        this.posts = i;
                        this.post_id = u;
                    })
            },
            postPost() {
                axios
                    .post('https://master-hieu.firebaseapp.com/v1/posts', {
                        content: this.newPost,
                        created_at: this.moment().format('YYYY-MM-DD hh:mm'),
                        email: this.profile.email,
                        like_count: 0,
                        username: this.profile.name
                    }, {headers: {'Authorization': 'Bearer ' + localStorage.logged}})
                    .then(response => {
                        this.newPost = null;
                        this.getPost();
                        this.getProfile();
                    })
            },
            deletePost(id) {
                const postId = this.post_id[id];
                if(window.confirm('Do you want to delete this posts?')) {
                    axios
                    .delete('https://master-hieu.firebaseapp.com/v1/posts/'+ postId, {headers: {'Authorization': 'Bearer ' + localStorage.logged}})
                    .then(response => {
                        this.getPost();
                        this.getProfile();
                    })
                    .catch(console.log('delete error!'))
                }
            }
            ,
            getProfile() {
                axios
                    .get('https://master-hieu.firebaseapp.com/v1/users/' + this.id)
                    .then(response => {
                        this.profile = response.data;
                    });
                axios
                    .get('https://master-hieu.firebaseapp.com/v1/users/' + this.id + '/countPosts')
                    .then(response => {
                        this.tweet_count = response.data;
                    });
            }
            ,
            logOut() {
                localStorage.removeItem('logged');
                this.$router.push('Login');
            }
        },
        computed: {
            orderedPosts: function () {
                return _.orderBy(this.posts, 'created_at', 'desc');
            }
        }
    }
</script>
