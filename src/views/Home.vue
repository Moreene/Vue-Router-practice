<template>
    <h1 class="text-center mt-5">Vue Router 自我練習</h1>
    <h2 class="text-center text-success opacity-75 my-5">這是首頁</h2>
    <div class="row">
        <div class="col-3">
            <div class="list-group">
                <router-link to="/a" class="list-group-item list-group-item-action">巢狀路由 A</router-link>
                <router-link to="/b" class="list-group-item list-group-item-action">巢狀路由 B</router-link>
                <router-link to="/c/c-1" class="list-group-item list-group-item-action">具名視圖</router-link>
                <router-link to="/d" class="list-group-item list-group-item-action">動態路由</router-link>
                <router-link to="/e" class="list-group-item list-group-item-action">動態路由 props</router-link>
                <router-link to="/f" class="list-group-item list-group-item-action">路由導航</router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>