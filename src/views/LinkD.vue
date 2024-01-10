<template>
    <h4 class="mb-5">這是動態路由的內容</h4>
    <ul class="d-flex mb-5">
        <li v-for="i in 5" :key="i" class="list-unstyled me-5">
            <router-link :to="`/d/${i}`" class="fs-5">user{{ i }}</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>