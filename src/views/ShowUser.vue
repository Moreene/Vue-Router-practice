<template>
    <h5 class="ps-4 mb-3">UserID： <span class="text-danger fw-bold">{{ userId }}</span></h5>
    <div class="ps-4">
        <p>Name：{{ userInfo.name }}</p>
        <p>Email：{{ userInfo.email }}</p>
        <p>Phone：{{ userInfo.phone }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            userInfo: {},
        };
    },
    computed: {
        // 1. 透過計算屬性創建一個userId
        // 2. 透過返回this.$route.params.id來取得當前id值
        userId() {
            return this.$route.params.id;
        },
    },
    watch: {
        // 透過watch方法來監視userId的變化
        userId: async function (newValue) {
            this.userInfo = await this.getUserInfo(newValue);
        }
    },
    methods: {
        // 透過async/await取得api對應id的user資訊
        async getUserInfo(id) {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return res.data;
        },
    },
    async created() {
        // 初始畫userId的值，取得user資訊
        this.userInfo = await this.getUserInfo(this.userId);
    },
};

// 另一種寫法(沒有methods)
// export default {
//     data() {
//         return {
//             userInfo: {}
//         }
//     },
//     computed: {
//         userId() {
//             return this.$route.params.id;
//         }
//     },
//     watch: {
//         async userId(newVal) {
//             let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${newVal}`)
//             this.userInfo = res.data;
//         }
//     },
//     async created() {
//         let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
//         this.userInfo = res.data;
//     }
// };
</script>