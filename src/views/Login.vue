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
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="card">
            <div class="card-body">
                <h1 class="title">Log in</h1>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <input class="input-group" type="email" placeholder="Email">
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-group-prepend input-pass">
                        <input class="input-group" type="password" placeholder="Password">
                    </div>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Remember me
                    </label>
                </div>
                <button type="button" class="btn btn-login">Log in</button>
                <div class="card-footer">
                    <p class="footer">New member? <a href="/signup">Sign up</a> with us now!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "../assets/myself.css";
</style>
