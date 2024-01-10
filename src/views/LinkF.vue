<template>
    <h4 class="mb-5">這是路由導航的內容</h4>
    <button type="button" class="btn btn-danger me-5" @click="getRoute">getRoute</button>
    <button type="button" class="btn btn-secondary me-5" @click="getRouter">getRouter</button>
    <button type="button" class="btn btn-success me-5" @click="push">push</button>
    <button type="button" class="btn btn-warning me-5" @click="replace">replace</button>
    <button type="button" class="btn btn-info" @click="go">go</button>
</template>

<script>
export default {
    methods: {
        getRoute() {
            console.log(this.$route);
        },
        getRouter() {
            console.log(this.$router);
        },
        push() {
            this.$router.push('/pageA');
        },
        replace() {
            this.$router.replace('/pageB');
        },
        go() {
            this.$router.go(2);
        }
    }
};
</script>