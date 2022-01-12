<template>
    <div>
        <div v-if="isLoggedIn" class="dropper">
            <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*"/>
            <span>Drag files here!</span>
        </div>
        <h2 v-else>
            Log in to get started
        </h2>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'UploadList',
    methods: mapActions(['uploadImages']),
    computed: mapGetters(['isLoggedIn'])
}
</script>

<style scoped>
.dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.dropper:hover {
    background: #eee;
    
}
input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
}
</style>