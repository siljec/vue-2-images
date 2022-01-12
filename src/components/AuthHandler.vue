<template>
    <h1>Please wait...</h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    // Life cycle hook
    created() {
       this.finalizeLogin(window.location.hash);
    },
}
</script>