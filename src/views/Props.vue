<template>
    <h5 class="ps-4 mb-3">UserID： <span class="text-danger fw-bold">{{ id }}</span></h5>
    <div class="ps-4">
        {{ userInfo }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            userInfo: {},
        };
    },
    computed: {
        userId() {
            return this.id;
        },
    },
    watch: {
        userId: async function (newValue) {
            this.userInfo = await this.getUserInfo(newValue);
        }
    },
    methods: {
        async getUserInfo(id) {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return res.data;
        },
    },
    async created() {
        this.userInfo = await this.getUserInfo(this.userId);
    },
};
</script>