import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

// Put the logic in actions
const actions = {
    async fetchImages({commit, rootState }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data)        
    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
        await api.uploadImage(images, token);
        router.push('/');
    }
};

// Keep mutations simple
const mutations = {
    setImages: (state, images) => {
        state.images = images
    } 
};

export default {
    state,
    getters,
    actions,
    mutations,
}