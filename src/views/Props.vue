<template>
    <div>
        <h5 class="ps-4 mb-3">UserID: <span class="text-danger fw-bold">{{ id }}</span></h5>
        <div class="ps-4" v-if="userInfo">
            {{ userInfo }}
        </div>
        <div class="ps-4" v-else>
            {{ errorMsg }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            userInfo: {},
            errorMsg: ''
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
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                return res.data;
            }
            catch (err) {
                this.errorMsg = '查無此資料!';
            };
        },
    },
    async created() {
        this.userInfo = await this.getUserInfo(this.userId);
    },
};
</script>