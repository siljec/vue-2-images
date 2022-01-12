<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">Image Storage</a>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link class="item" to="/">Galleries</router-link>
                <router-link class="item" to="/upload">Upload</router-link>
                <a href="" class="item" @click="logout">Logout</a>
            </div>
            <a v-else href="#" class="ui item" @click="login">
                Log in
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: {
        ...mapActions(['login', 'logout'])
    },
}
</script>

<style scoped>
.horizontal {
    display: flex;
}
</style>